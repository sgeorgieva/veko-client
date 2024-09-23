import { Locale, i18n } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import UsedCarDescription from "@/app/[lang]/components/UsedCarPerSingleComponent/UsedCarDescription";
import { Suspense } from "react";
import Loader from "@/app/[lang]/components/Loader";

export function generateStaticParams() {
  return [{ lang: "bg", id: "Kia" }];
}

export default async function UsedCarSingleId({
  params,
}: {
  params: { lang: Locale };
}) {
  const { page, navigation } = await getDictionary(params.lang);

  return (
    <Suspense fallback={false}>
      <UsedCarDescription lang={params.lang} translations={page.used_cars} />
    </Suspense>
  );
}
