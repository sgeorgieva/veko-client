"use client";

import { Box, Divider, Flex, Spinner } from "gestalt";
import PostId from "./post";

export default function Posts({ posts }: { posts: any }) {
  return posts && posts.length > 0 ? (
    posts.reverse().map((post) => (
      <Box
        key={post?.id}
        alignItems="center"
        display="flex"
        height="100%"
        width="100%"
        justifyContent="start"
        padding={8}
      >
        <Flex direction="column" gap={{ column: 10, row: 0 }}>
          <div className="d-flex post">{post && <PostId post={post} />}</div>
          <Divider />
        </Flex>
      </Box>
    ))
  ) : (
    <Spinner show color="default" />
  );
}
