"use client";

// import { usePosts } from "@/app/context/PostsContext";
import HomeComponent from "../../../../[lang]/components/HomeComponent/page";
import { usePosts } from "../../../../context/PostsContext";
import { Image } from "gestalt";
import moment from "moment";

import "./postContent.scss";

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
      <div className="d-flex post-wrapper py-5">
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
              : post?.created_at_}
          </p>
          <p className="pt-4 pb-5">{post?.description}</p>
        </div>
      </div>
    </>
  );
}
