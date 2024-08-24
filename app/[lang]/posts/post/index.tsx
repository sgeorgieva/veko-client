// import { useRouter } from "next/router";
"use client";

import { Flex, Heading, Image, Text } from "gestalt";
import Link from "next/link";
import PostDescription from "./[slug]";

function Block({ title, text }: any) {
  return (
    <Flex direction="column" gap={{ column: 2, row: 0 }}>
      <Heading accessibilityLevel="none" size="400">
        <Link href={`/posts/${encodeURIComponent(title)}`}>
          {title}
          <PostDescription title={title} />
        </Link>
      </Heading>
      <Text size="200">{text}</Text>
    </Flex>
  );
}
export default function PostId({ post }) {
  // const router = useRouter();
  // const { query } = router;

  console.log("router", decodeURIComponent(post.title));

  return (
    // Your JSX
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
      />
    </>
  );
}
