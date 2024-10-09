"use client";

import { Suspense } from "react";
// import { usePosts } from "../../../context/PostsContext";
import { Image } from "gestalt";
import moment from "moment";
import { useSearchParams } from "next/navigation";
import HomeComponent from "../../components/HomeComponent/page";
import Loader from "@/app/[lang]/components/Loader";
import { PostsProvider } from "@/app/contexts/PostsContext";
import NotFound from "@/app/[lang]/not-found";

import "./postContent.scss";

export async function getStaticPaths() {
  // Return an empty array for paths to let Next.js know there are no pre-generated pages
  // We'll handle them dynamically with fallback
  return {
    paths: [], // No paths pre-generated at build time
    fallback: "blocking", // Blocking mode: generate the page on the first request
  };
}

export default function Post() {
  let post;
  if (typeof window !== "undefined") {
    post = JSON.parse(localStorage.getItem("post"));
    console.log("post", post);
  }
  // const post = useSearchParams();
  // console.log("a", a.get("title"));
  // const { posts } = usePosts();
  // const post =
  //   posts &&
  //   posts.length > 0 &&
  //   posts?.find((post) => post.title === decodeURIComponent(post?.title));

  // Fallback for when the post is not found
  if (!post) {
    return <NotFound />;
  }

  return (
    <PostsProvider>
      <Suspense fallback={<Loader />}>
        <HomeComponent isHome={false} />
        <div className="d-flex post-wrapper px-5 py-5">
          <div>
            {post?.images &&
              post?.images.length > 0 &&
              post?.images.map((image, idx) => (
                <Image
                  key={idx}
                  src={`${process.env.NEXT_PUBLIC_STORAGE_URL}storage/${image.name}`}
                  alt={image.name}
                />
              ))}
          </div>
          <div>
            <h1>{post?.title}</h1>
            <p>
              {post?.updated_at !== ""
                ? moment(moment.utc(post?.updated_at).toDate())
                    .local()
                    .format("DD/MM/YYYY")
                : post?.created_at}
            </p>
            <p className="pt-4 pb-5">{post?.description}</p>
          </div>
        </div>
      </Suspense>
    </PostsProvider>
  );
}
