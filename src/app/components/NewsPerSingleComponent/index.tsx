import { Avatar, Box, Button, Flex, Link, Text, WashAnimated } from "gestalt";
import AudiCarImage from "../../../../public/images/audi-car.png";

import "./newsPerSingleComponent.scss";
import { useEffect, useState } from "react";

export default function NewsPerSingleComponent({
  isEdit,
  setIsEditNewsModalOpen,
  setIsDeleteNewsModalOpen,
  title,
  image,
}: any) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  return (
    <Flex alignItems="center" height="100%" justifyContent="start" width="100%">
      <Box column={12} maxWidth={236} padding={2}>
        {!isEdit ? (
          <Link href="/services/news/1">
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
                onClick={() => setIsEditNewsModalOpen(true)}
              />
              <Box marginTop={3}>
                <Button
                  size={isMobile ? "sm" : "lg"}
                  accessibilityLabel="edit car"
                  color="red"
                  text="Изтрий"
                  fullWidth
                  onClick={setIsDeleteNewsModalOpen}
                />
              </Box>
            </Flex>
          </WashAnimated>
        )}
      </Box>
    </Flex>
  );
}
