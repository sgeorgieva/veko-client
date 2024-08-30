"use client";

import { Box, Divider, Flex, Heading, Image, Spinner, Text } from "gestalt";
import Link from "next/link";
// import { PostDescription } from "./[slug]";
// import { useRouter } from "next/navigation";
import PostId from "./post";
// import { redirect } from 'next/navigation';
// import PostDescription from "./[slug]/[slug]";

function Block({ title, text }: any) {
  return (
    <Flex direction="column" gap={{ column: 2, row: 0 }}>
      <Heading accessibilityLevel="none" size="400">
        {title}
      </Heading>
      <Text size="200">{text}</Text>
    </Flex>
  );
}
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
          <div className="d-flex post">
            {/* {post &&
              (console.log("post", post),
              (
                <Link
                  // id={post.id}
                  // as={`/${post?.title.toLowerCase().replace(/ /g, "-")} `}
                  // href={`/[[...slug]]`}
                  // onClick={(e) => {
                  //   e.preventDefault();

                  //   // router.push(
                  //   //   'posts/post.title',
                  //   //   `posts/${encodeURIComponent(post.title).toLowerCase().replace(/ /g, "-")}`, { shallow: true }
                  //   // );
                  //   router.push(
                  //     `/posts/${encodeURIComponent(post.title).toLowerCase().replace(/ /g, "-")}`,
                  //     { shallow: true }
                  //   );
                  //   // router.refresh();
                  //   // return <PostDescription children={post} />;
                  // }}
                  // passHref={true}
                  // prefetch={false}
                  // shallow={true}
                  // replace={true}
                  // passHref
                  href={`/posts/[slug]?slug=${post.title}`}
                  // href={`/posts//${encodeURIComponent(post.title)}`}
                  // as = {`posts/${encodeURIComponent(post?.title.toLowerCase().replace(/ /g, "-"))}`}
                  // href={{
                  //   pathname: `/posts/[slug]`,
                  //   query: {
                  //     slug: encodeURIComponent(post?.title),
                  //     // slug: encodeURIComponent(
                  //     //   post?.title.toLowerCase().replace(/ /g, "-")
                  //     // ),
                  //   },
                  // }}
                  lang="bg"
                  shallow
                  // href={`/posts/page?title=${post.slug}`}
                  // as={`/posts/${post.title.toLowerCase().replace(/ /g, "-")}`}
                  // href="/posts/[slug]"
                  as={`posts/${encodeURIComponent(post?.title.toLowerCase().replace(/ /g, "-"))}`}
                >
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
                </Link>
              ))} */}
  

            {post && <PostId post={post} />}
          </div>
          <Divider />
        </Flex>
      </Box>
    ))
  ) : (
    <Spinner show color="default" />
  );
}
