import { Locale, i18n } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import PostContent from "./_components/post-content";
// import { useParams } from "next/navigation";

export async function generateStaticParams() {
  // return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function PostDescription({
  params,
}: {
  params: { slug: string; lang: Locale };
}) {
  const { page } = await getDictionary(params.lang);
  // const { slug } = useParams();

  return <PostContent title={params.slug.replaceAll("-", " ")} />;
}
