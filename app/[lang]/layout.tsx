// import './globals.css'
import type { Metadata } from "next";
import { Locale, i18n } from "@/i18n.config";
import { GoogleAnalytics } from "@next/third-parties/google";
import localFont from "next/font/local";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import Loader from "./components/Loader";
import LayoutComponent from "./components/LayoutComponent";
import { LoadingProvider } from "../context/LoadingContext";
import { getDictionary } from "@/lib/dictionary";
import { PostsProvider } from "../context/PostsContext";

import "../globals.scss";

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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { navigation, footer, page } = await getDictionary(params.lang);

  return (
    <LoadingProvider>
      <Loader />
      <ReCaptchaProvider reCaptchaKey="6Le2XAoqAAAAABcR1RYwjuilen0Q8OvlkxhTGyLr">
        <html lang={params.lang} className={sfProFont.className}>
          <head>
            <script
              src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
              async
              defer
            ></script>
          </head>
          <body className={sfProFont.className}>
            <PostsProvider>
              <LayoutComponent
                lang={params.lang}
                font={sfProFont.className}
                children={children}
                translationsFooter={footer}
                translations={navigation}
                translationsUsedCars={page.used_cars}
              ></LayoutComponent>
            </PostsProvider>
          </body>
          <GoogleAnalytics gaId="G-LX59883J0R" />
        </html>
      </ReCaptchaProvider>
    </LoadingProvider>
  );
}
