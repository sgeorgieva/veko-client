"use client";

import { Flex, Heading, Image, Text } from "gestalt";
import Link from "next/link";
import { InlineShareButtons } from "sharethis-reactjs";
import dynamic from "next/dynamic";
import Loader from "../../components/Loader";
import { PostsProvider, usePosts } from "@/app/contexts/PostsContext";

import "./post.scss";

// const PostPage = dynamic(() => import("../[id]/page"), {
//   ssr: true,
//   loading: () => <Loader />,
// });

function Block({ title, text, description, postId, lang, post }: any) {
  localStorage.setItem("post", JSON.stringify(post));

  return (
    <Flex direction="column" gap={{ column: 2, row: 0 }}>
      <Heading accessibilityLevel="none" size="400">
        <Link
          // href={{
          //   pathname:
          //     lang === "en"
          //       ? `${lang}/posts/${title.toString().replaceAll(" ", "-")}`
          //       : `/posts/${title.toString().replaceAll(" ", "-")}`,
          //   query: { ...post },
          // }}
          href={{
            pathname:
              lang === "en" ? `${lang}/posts/${postId}` : `/posts/${postId}`,
            // query: { ...post },
          }}
          // children={<PostPage />}
        >
          {title}
        </Link>
        <div className="share-button">
          <InlineShareButtons
            config={{
              alignment: "center",
              color: "social",
              enabled: true,
              font_size: 16,
              labels: "cta",
              language: "en",
              networks: ["facebook"],
              padding: 12,
              radius: 4,
              size: 40,
            }}
          />
        </div>
      </Heading>
      <Text size="200">{text}</Text>
    </Flex>
  );
}
export default function PostId({ post, lang }) {
  return (
    <div className="news-wrapper">
      <Image
        alt={`${post?.title} image`}
        height={806}
        width={564}
        src={`${process.env.NEXT_PUBLIC_STORAGE_URL}storage/${post?.images[0]?.name}`}
      />
      <PostsProvider>
        <Block
          post={post}
          lang={lang}
          text={post?.description.substring(0, 130).trimEnd() + "..."}
          description={post?.description}
          title={post?.title}
          postId={post?.id}
        />
      </PostsProvider>
    </div>
  );
}
