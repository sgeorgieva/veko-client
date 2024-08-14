import { useState } from "react";
import { Avatar, Box, Button, Flex, Link, Text, WashAnimated } from "gestalt";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { endpoints, linkUrl } from "../../../../utils/functions";
import UsedCarDescription from "./UsedCarDescription";

import "./usedCarPerSingleComponent.scss";
export default function UsedCarPerSingleComponent({
  isEdit,
  isMobile,
  model,
  image,
  handleEditCarData,
  handleDeleteCar,
  setCarInfo,
  carInfo,
  id,
}: any) {
  const [isHandleSingleCarClicked, setIsHandleSingleClicked] = useState(false);

  const handleSingleCar = () => {
    setIsHandleSingleClicked(true);
    return <UsedCarDescription />;
  };

  const fetchSingleCar = async () => {
    console.log("here");
    handleEditCarData();

    try {
      const response = await axios.get(`${linkUrl()}${endpoints.carId}${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Replace with your actual authorization token
        },
      });
      if (response.status === 200) {
        setCarInfo(response.data.record);
        // handleEditCarData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex
      alignItems="center"
      height="100%"
      justifyContent="center"
      width="100%"
    >
      <Box column={12} maxWidth={236} padding={2}>
        {!isEdit ? (
          <Link onClick={handleSingleCar} href="/services/used-car/1">
            <WashAnimated
              image={
                <Avatar
                  name={model}
                  src={image}
                  verified={true}
                  className="car-image"
                />
              }
            >
              <Flex direction="column" justifyContent="center">
                <Text align="center" weight="bold">
                  <Box paddingX={3} paddingY={2}>
                    {model}
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
                src={image}
                verified={true}
              />
            }
          >
            <Flex direction="column" justifyContent="center">
              <Text align="center" weight="bold">
                <Box paddingX={3} paddingY={2}>
                  {model}
                </Box>
              </Text>
              <Button
                accessibilityLabel="edit car"
                color="gray"
                text="Редактирай"
                size={isMobile ? "sm" : "lg"}
                onClick={fetchSingleCar}
              />
              <Box marginTop={3}>
                <Button
                  accessibilityLabel="delete car"
                  color="red"
                  text="Изтрий"
                  size={isMobile ? "sm" : "lg"}
                  fullWidth
                  onClick={handleDeleteCar}
                />
              </Box>
            </Flex>
          </WashAnimated>
        )}
      </Box>
    </Flex>
  );
}
