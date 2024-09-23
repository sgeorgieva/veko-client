// import PostContent from './_components/post-content';
import dynamic from "next/dynamic";
export async function generateStaticParams() {
  return [
    { lang: "bg", slug: "test", query: { title: "test", description: "test" } },
  ];
}

const PostContent = dynamic(() => import("./_components/post-content"), {
  ssr: false,
});

export default async function PostDescription({
  params,
}: {
  params: { slug: string };
}) {
  return <PostContent title={params.slug.replaceAll("-", " ")} />;
}
