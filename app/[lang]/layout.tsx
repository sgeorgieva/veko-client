// import './globals.css'
import { Suspense } from "react";
import type { Metadata } from "next";
import { Locale, i18n } from "@/i18n.config";
import { GoogleAnalytics } from "@next/third-parties/google";
import localFont from "next/font/local";
import { getDictionary } from "@/lib/dictionary";
import GlobalLoader from "./components/GlobalLoader";
import { PostsProvider } from "../contexts/PostsContext";
import { CarProvider } from "../contexts/CarContext";

import "../globals.scss";
import dynamic from "next/dynamic";
import Loader from "./components/Loader";
import { Provider } from "react-redux";
import store from "@/store/store";

export const metadata: Metadata = {
  title: "ВЕКО ОЙЛ ЕООД",
  description: "ВЕКО ОЙЛ ЕООД",
  keywords: `ВЕКО ОЙЛ ЕООД, ВЕКО, ВЕКО Русе, Русе, масла русе, VEKO-Oil, масла, търговия, VEKO продукти, автомобилно представителство, 
    марки, автоцентрове, акумулатори, автоконсумативи, специални течности, екология, автооказион, за нас, контакти,
    car delearship, trade, oils, services, VEKO products, about, contact, accummulators, autoconsumbles, special liquids, products,
    Ruse, Rousse, veko oil ruse`,
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "PBhS2OksPMopQ926LID6cpmxuDpdJsyqVVIFt4Vhlwo",
  },
  openGraph: {
    title: "ВЕКО ОЙЛ ЕООД | VEKO Oil Ltd.",
    url:
      process.env.NODE_ENV !== "production"
        ? process.env.LOCALHOST_SITE_URL
        : process.env.SITE_URL,
    type: "website",
    description: "ВЕКО ОЙЛ ЕООД",
    // images: `${process.env.NODE_ENV !== 'production' ? '' : process.env.SITE_URL}${Image.src}`,
    // 'http-equiv': 'Content-Security-Policy',
  },
  alternates: {
    canonical: `${process.env.NODE_ENV !== "production" ? process.env.LOCALHOST_SITE_URL : process.env.SITE_URL}`,
  },
  other: {
    classification: "business",
    rating: "general",
    robots: "all",
    owner: "Santiya Georgieva",
    googlebot: "notranslate",
  },
};

const sfProFont = localFont({
  src: "../sf-pro-display-medium.woff2",
  variable: "--font-sf-pro-display-medium",
  // display: 'swap',
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const LayoutComponent = dynamic(() => import("./components/LayoutComponent"), {
  ssr: true,
  loading: () => <Loader />,
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { navigation, footer, page } = await getDictionary(params.lang);

  return (
    <html lang={params.lang} className={sfProFont.className}>
      <head>
        <script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          async
          defer
        ></script>
      </head>
      <body className={sfProFont.className}>
        <CarProvider>
          <PostsProvider>
            {/* <Provider store={store}> */}
            <GlobalLoader>
              <Suspense fallback={<Loader />}>
                <LayoutComponent
                  lang={params.lang}
                  font={sfProFont.className}
                  children={children}
                  translationsFooter={footer}
                  translations={navigation}
                  translationsUsedCars={page.used_cars}
                />
              </Suspense>
            </GlobalLoader>
            {/* </Provider> */}
          </PostsProvider>
        </CarProvider>
      </body>
      <GoogleAnalytics gaId="G-LX59883J0R" />
    </html>
  );
}
