import { Metadata } from "next";
import { Locale, i18n } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import AboutComponent from "../components/AboutComponent";

// import Image from "../../../public/images/portfolio.webp";

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
    canonical: `${process.env.NODE_ENV !== "production" ? process.env.LOCALHOST_SITE_URL : process.env.SITE_URL}/about`,
  },
  other: {
    classification: "business",
    rating: "general",
    robots: "all",
    owner: "Santiya Georgieva",
    googlebot: "notranslate",
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function About({ params }: { params: { lang: Locale } }) {
  const { page, navigation } = await getDictionary(params.lang);

  return <AboutComponent title={navigation.about} translations={page.about} />;
}
