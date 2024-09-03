"use client";
import { Avatar, Box, Button, Flex, Link, Text, WashAnimated } from "gestalt";
import { useEffect, useState } from "react";
import axios from "axios";
import { endpoints, linkUrl } from "../../../../utils/functions";

import "./postComponent.scss";
import { useRouter } from "next/navigation";

export default function PostComponent({
  isEdit,
  postInfo,
  setPostInfo,
  handleEditPostData,
  handleDeletePost,
  title,
  image,
  id,
  lang,
}: any) {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    if (!title) return;
  }, [router]);

  const fetchSinglePost = async () => {
    try {
      const response = await axios.get(
        `${linkUrl()}${endpoints.postId}${id}?language_id=${lang}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      if (response.status === 200) {
        setPostInfo(response?.data?.post);
        handleEditPostData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex alignItems="center" height="100%" justifyContent="start" width="100%">
      <Box column={12} maxWidth={236} padding={2}>
        {!isEdit ? (
          <Link href={`/services/posts/${id}`}>
            <WashAnimated
              image={
                <Avatar
                  name={title}
                  src={image}
                  verified={false}
                  className="car-image"
                />
              }
            >
              <Flex direction="column" justifyContent="center">
                <Text align="center" weight="bold">
                  <Box paddingX={3} paddingY={2}>
                    {title}
                  </Box>
                </Text>
              </Flex>
            </WashAnimated>
          </Link>
        ) : (
          <WashAnimated
            image={
              <Avatar size="fit" name={title} src={image} verified={false} />
            }
          >
            <Flex direction="column" justifyContent="center">
              <Text align="center" weight="bold">
                <Box paddingX={3} paddingY={2}>
                  {title}
                </Box>
              </Text>
              <Button
                size={isMobile ? "sm" : "lg"}
                accessibilityLabel="edit car"
                color="gray"
                text="Редактирай"
                onClick={fetchSinglePost}
              />
              <Box marginTop={3}>
                <Button
                  size={isMobile ? "sm" : "lg"}
                  accessibilityLabel="edit car"
                  color="red"
                  text="Изтрий"
                  fullWidth
                  onClick={handleDeletePost}
                />
              </Box>
            </Flex>
          </WashAnimated>
        )}
      </Box>
    </Flex>
  );
}
