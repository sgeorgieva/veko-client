import PostContent from "../../posts/[slug]/_components/post-content";

export async function generateStaticParams() {
  return [{ lang: "bg", slug: "test", query: { name: "test" } }];
}

export default function PostDescription({
  params,
}: {
  params: { slug: string };
}) {
  console.log("params", params);

  return <PostContent title={params.slug.replaceAll("-", " ")} />;
}
