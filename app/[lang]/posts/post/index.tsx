// import { useRouter } from "next/router";
"use client";

import { Flex, Heading, Image, Text } from "gestalt";
import Link from "next/link";
import { InlineShareButtons } from "sharethis-reactjs";

import "./post.scss";

function Block({ title, text, postId }: any) {
  return (
    <Flex direction="column" gap={{ column: 2, row: 0 }}>
      <Heading accessibilityLevel="none" size="400">
        <Link
          href={{ pathname: `posts/${title.toString().replaceAll(" ", "-")}` }}
        >
          {title}
        </Link>
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
      </Heading>
      <Text size="200">{text}</Text>
    </Flex>
  );
}
export default function PostId({ post }) {
  return (
    <>
      <Image
        alt={`${post?.title} image`}
        height={806}
        width={564}
        src={post?.images[0]?.name}
      />
      <Block
        text={post?.description.substring(0, 130).trimEnd() + "..."}
        title={post?.title}
        postId={post?.post_id}
      />
    </>
  );
}
