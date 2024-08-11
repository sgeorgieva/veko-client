import { useState } from "react";
import { Avatar, Box, Button, Flex, Link, Text, WashAnimated } from "gestalt";
import AudiCarImage from "../../../../public/images/audi-car.png";

import "./usedCarPerSingleComponent.scss";
import UsedCarDescription from "./usedCarDescription";
export default function UsedCarPerSingleComponent({
  isEdit,
  isMobile,
  setIsEditCarModalOpen,
  setIsDeleteCarModalOpen,
}: any) {
  const [isHandleSingleCarClicked, setIsHandleSingleClicked] = useState(false);

  const handleSingleCar = () => {
    setIsHandleSingleClicked(true);
    return <UsedCarDescription />;
  };

  return (
    <Flex alignItems="center" height="100%" justifyContent="start" width="100%">
      <Box column={12} maxWidth={236} padding={2}>
        {!isEdit ? (
          <Link onClick={handleSingleCar} href="/services/used-car/1">
            <WashAnimated
              image={
                <Avatar
                  name="Audi A3 2.0"
                  src={AudiCarImage.src}
                  verified={true}
                  className="car-image"
                />
              }
            >
              <Flex direction="column" justifyContent="center">
                <Text align="center" weight="bold">
                  <Box paddingX={3} paddingY={2}>
                    Audi A3 2.0
                  </Box>
                </Text>
              </Flex>
            </WashAnimated>
          </Link>
        ) : (
          <WashAnimated
            image={
              <Avatar
                size="fit"
                name="Audi A3 2.0"
                src={AudiCarImage.src}
                verified={true}
              />
            }
          >
            <Flex direction="column" justifyContent="center">
              <Text align="center" weight="bold">
                <Box paddingX={3} paddingY={2}>
                  Audi A3 2.0
                </Box>
              </Text>
              <Button
                accessibilityLabel="edit car"
                color="gray"
                text="Редактирай"
                size={isMobile ? "sm" : "lg"}
                onClick={() => setIsEditCarModalOpen(true)}
              />
              <Box marginTop={3}>
                <Button
                  accessibilityLabel="edit car"
                  color="red"
                  text="Изтрий"
                  size={isMobile ? "sm" : "lg"}
                  fullWidth
                  onClick={setIsDeleteCarModalOpen}
                />
              </Box>
            </Flex>
          </WashAnimated>
        )}
      </Box>
    </Flex>
  );
}
