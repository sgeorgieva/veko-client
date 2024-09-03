"use client";

// import { usePosts } from "@/app/context/PostsContext";
import HomeComponent from "../../../../[lang]/components/HomeComponent/page";
import { usePosts } from "../../../../context/PostsContext";
import { Image } from "gestalt";

export default function PostContent({ title }: { title: string }) {
  const { posts } = usePosts();
  console.log("====================================");
  console.log("posts", posts);
  console.log("====================================");
  console.log("====================================");
  console.log("title", title);
  console.log("====================================");
  const post =
    posts &&
    posts.length > 0 &&
    posts?.find((post) => post.title === decodeURIComponent(title));

  return (
    <>
      <HomeComponent isHome={false} />
      <div className="px-5 pb-3">
        {post?.images &&
          post?.images.length > 0 &&
          post?.images.map((image) => <Image src={`/public/${image}`} />)}
        <h1>{post?.title}</h1>
        <p className="pt-4 pb-5">{post?.description}</p>
      </div>
    </>
  );
}
