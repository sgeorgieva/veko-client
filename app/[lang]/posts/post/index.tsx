// import { useRouter } from "next/router";
"use client";

import { linkUrl } from "@/utils/functions";
import { Flex, Heading, Image, Text } from "gestalt";
import Link from "next/link";
// import PostDescription from "../[slug]/page";

function Block({ title, text }: any) {
  return (
    <Flex direction="column" gap={{ column: 2, row: 0 }}>
      <Heading accessibilityLevel="none" size="400">
        <Link
          href={`/posts/${title.toString().replaceAll(" ", "-").toLowerCase()}`}
        >
          {title}
        </Link>
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
      />
    </>
  );
}
