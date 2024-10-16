import { Metadata } from "next";
import { Suspense } from "react";
import { Locale, i18n } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import EcologyComponent from "../../components/ServicesComponent/EcologyComponent";
import Loader from "../../components/Loader";
import RentCarComponent from "../../components/ServicesComponent/RentCarComponet";

// import Image from "../../../public/images/portfolio.webp";

export const metadata: Metadata = {
  title: "ВЕКО ОЙЛ ЕООД",
  description: "ВЕКО ОЙЛ ЕООД",
  keywords: `ВЕКО ОЙЛ ЕООД, ВЕКО, ВЕКО Русе, Русе, масла русе, VEKO-Oil, масла, търговия, VEKO продукти, автомобилно представителство, 
    марки, автоцентрове, акумулатори, автоконсумативи, специални течности, екология, автооказион, за нас, контакти,
    car delearship, trade, oils, services, VEKO products, about, contact, accummulators, auoconsumbles, special liquids, products,
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
    canonical: `${process.env.NODE_ENV !== "production" ? process.env.LOCALHOST_SITE_URL : process.env.SITE_URL}/services/rent-a-car`,
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

export default async function RentAcar({
  params,
}: {
  params: { lang: Locale };
}) {
  const { page, navigation } = await getDictionary(params.lang);

  return (
    <Suspense fallback={<Loader />}>
      <RentCarComponent
        title={{
          rent_a_car: navigation.rent_a_car,
          comming_soon: navigation.comming_soon,
        }}
        translations={page}
      />
    </Suspense>
  );
}
