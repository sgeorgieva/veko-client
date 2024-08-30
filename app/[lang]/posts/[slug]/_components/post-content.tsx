"use client";

import HomeComponent from "@/app/[lang]/components/HomeComponent/page";
import { usePosts } from "@/app/context/PostsContext";
import { Image } from "gestalt";

export default function PostContent({ title }: { title: string }) {
  const { posts } = usePosts();
  console.log("tt", title);
  const post = posts?.find((post) => post.title === title);
  return (
    <>
      <HomeComponent isHome={false} />
      <div className="px-5 pb-3">
        {/* {posts?.images.map((image) => <Image src={`/public/${image}`} />)} */}
        <h1>{post?.title}</h1>
        <p>{post?.description}</p>
      </div>
    </>
  );
}
