import { notFound } from "next/navigation";
import { Locale, i18n } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import NotFound from "../not-found";
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
export default async function NotFoundCatchAll({
  params,
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(params.lang);

  return <NotFound translations={page.not_found} />;
}
