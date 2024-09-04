"use client";

import { Box, Divider, Flex, IconButton, Spinner } from "gestalt";
import PostId from "./post";

export default function Posts({
  posts,
  showButton,
  lang,
  isMobile,
}: {
  posts: any;
  showButton: boolean;
  lang: string;
  isMobile: boolean;
}) {
  // console.log("====================================");
  // console.log("posts", posts);
  // console.log("====================================");
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {posts && posts.length > 0 ? (
        posts.reverse().map((post) => {
          return (
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
                <div className="d-flex post">
                  {post && <PostId post={post} />}
                </div>
                <Divider />
              </Flex>
            </Box>
          );
        })
      ) : (
        <Spinner show color="default" />
      )}
      {showButton && (
        <div className="d-flex align-items-center justify-content-end">
          <IconButton
            tooltip={{
              text: lang === "bg" ? "Нагоре" : "Go to Top",
              idealDirection: "right",
            }}
            size={isMobile ? "sm" : "lg"}
            bgColor="lightGray"
            icon="arrow-up"
            onClick={() => handleScrollToTop()}
          />
        </div>
      )}
    </>
  );
}
