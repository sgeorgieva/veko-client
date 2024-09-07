import { useState } from "react";
import axios from "axios";
import { Avatar, Box, Button, Flex, Link, Text, WashAnimated } from "gestalt";
import { endpoints, linkUrl } from "../../../../utils/functions";
import UsedCarSingleId from "../../services/used-car/[id]/page";
// import UsedCarDescription from "./UsedCarDescription";

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
  carId,
  power,
}: any) {
  const [isHandleSingleCarClicked, setIsHandleSingleClicked] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleSingleCar = (e) => {
    e.preventDefault();
    setIsHandleSingleClicked(true);
  };

  const fetchSingleCar = async (id) => {
    try {
      const response = await axios.get(`${linkUrl()}${endpoints.carId}${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Replace with your actual authorization token
        },
      });
      if (response.status === 200) {
        setCarInfo(response.data.record);
        handleEditCarData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPostData = async () => {
    try {
      const response = await axios.get(
        `${linkUrl()}${endpoints.posts}?page=1`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      if (response.status === 200) {
        setPosts(response?.data?.records?.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  console.log("====================================");
  console.log("model: " + power);
  console.log("image", carInfo?.images);
  console.log("====================================");

  return (
    // <Flex
    //   alignItems="center"
    //   height="100%"
    //   justifyContent="center"
    //   width="100%"
    // >
    <Box column={12} maxWidth={236} padding={2}>
      {!isEdit ? (
        <Link
          onClick={handleSingleCar}
          href={`/services/used-car/${model}`}
          children={<UsedCarSingleId title={model} power={power} />}
        >
          <WashAnimated
            image={
              <Avatar
                name={model}
                src={`${process.env.NEXT_PUBLIC_STORAGE_URL}storage/${carInfo?.images[0].name}`}
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
          image={<Avatar size="fit" name={model} src={image} verified={true} />}
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
              onClick={() => fetchSingleCar(carInfo.id)}
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
    // </Flex>
  );
}
