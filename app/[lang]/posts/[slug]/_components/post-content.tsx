"use client";

import { Suspense } from "react";
import { usePosts } from "../../../../context/PostsContext";
import { Image } from "gestalt";
import moment from "moment";
import { useSearchParams } from "next/navigation";
import HomeComponent from "../../../../[lang]/components/HomeComponent/page";
import Loader from "@/app/[lang]/components/Loader";

import "./postContent.scss";
import NotFound from "@/app/[lang]/not-found";

export default function PostContent() {
  const { posts } = usePosts();
  const post =
    posts &&
    posts.length > 0 &&
    posts?.find((post) => post.title === decodeURIComponent(post?.title));

  // Fallback for when the post is not found
  if (!post) {
    return <NotFound />;
  }

  return (
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
  );
}
