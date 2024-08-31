import PostContent from "../../posts/[slug]/_components/post-content";

export async function generateStaticParams() {
  return [{ lang: "bg", slug: "test" }];
}

export default function PostDescription({
  params,
}: {
  params: { slug: string };
}) {
  return <PostContent title={params.slug.replaceAll("-", " ")} />;
}
