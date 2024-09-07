// import { useRouter } from "next/router";
"use client";

import { Flex, Heading, Image, Text } from "gestalt";
import Link from "next/link";
import { InlineShareButtons } from "sharethis-reactjs";

import "./post.scss";
import { endpoints, linkUrl } from "@/utils/functions";
import axios from "axios";
import { useEffect, useState } from "react";
import { usePosts } from "@/app/context/PostsContext";
import { useRouter } from "next/navigation";

function Block({ title, text, postId, lang }: any) {
  const [post, setPost] = useState();

  const fetchSinglePost = async () => {
    try {
      const response = await axios.get(
        `${linkUrl()}${endpoints.postId}${postId}?language_id=${lang}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("response?.data?.post", response?.data?.post);
        setPost(response?.data?.post);
        // setPostInfo(response?.data?.post);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const { query } = useRouter();

  return (
    <Flex direction="column" gap={{ column: 2, row: 0 }}>
      <Heading accessibilityLevel="none" size="400">
        <Link
          href={{
            pathname: `posts/${title.toString().replaceAll(" ", "-")}`,
            query: { name: "Sajad" },
            // test: console.log("query", query),
            // query: { ...query, post },
          }}
          // passHref
          // shallow
          // replace
          onClick={() => fetchSinglePost()}
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
        title={post?.title}
        postId={post?.id}
      />
    </>
  );
}
