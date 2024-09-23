"use client";

import { Flex, Heading, Image, Text } from "gestalt";
import Link from "next/link";
import { InlineShareButtons } from "sharethis-reactjs";

import "./post.scss";
function Block({ title, text, description, postId, lang }: any) {
  return (
    <Flex direction="column" gap={{ column: 2, row: 0 }}>
      <Heading accessibilityLevel="none" size="400">
        <Link
          href={
            lang === "en"
              ? `${lang}/posts/${title.toString().replaceAll(" ", "-")}`
              : `/posts/${title.toString().replaceAll(" ", "-")}`
          }
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
    <>
      <Image
        alt={`${post?.title} image`}
        height={806}
        width={564}
        src={post?.images[0]?.name}
      />
      <Block
        lang={lang}
        text={post?.description.substring(0, 130).trimEnd() + "..."}
        description={post?.description}
        title={post?.title}
        postId={post?.id}
      />
    </>
  );
}
