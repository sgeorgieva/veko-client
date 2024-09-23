import { Locale, i18n } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import NotFound from "../not-found";
import { notFound } from "next/navigation";
// import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [{ lang: "bg", "not-found": ["not-found"] }];
}

// export async function getStaticPaths() {
//   const languages = ["bg", "en"];

//   const paths = languages.map((lang) => ({
//     params: { lang, "not-found": ["not-found"] },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

export default async function NotFoundCatchAll({
  params,
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(params.lang);

  if (!page) {
    notFound();
  } else {
    // return <NotFound translations={page.not_found} />;
  }
}
