import { useState } from "react";
import axios from "axios";
import { Avatar, Box, Button, Flex, Link, Text, WashAnimated } from "gestalt";
import { endpoints, linkUrl } from "../../../../utils/functions";

import "./usedCarPerSingleComponent.scss";
import { usePathname } from "next/navigation";
import UsedCarSingleId from "../../services/used-car/[id]/page";
export default async function UsedCarPerSingleComponent({
  isEdit,
  isMobile,
  model,
  image,
  handleEditCarData,
  handleDeleteCar,
  setCarInfo,
  carInfo,
  translations,
  lang
}: any) {
  const [isHandleSingleCarClicked, setIsHandleSingleClicked] = useState(false);
  const pathname = usePathname();

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

  return (
    <Box column={12} maxWidth={236} padding={2}>
      {!isEdit ? (
        <Link href={lang !== 'en' ? `/services/used-car/${encodeURIComponent(model)}?carInfo=${encodeURIComponent(JSON.stringify(carInfo))}&translations=${JSON.stringify(translations)}`
      : `${pathname}/${encodeURIComponent(model)}?carInfo=${encodeURIComponent(JSON.stringify(carInfo))}&translations=${JSON.stringify(translations)}`}>
          <WashAnimated
            image={
              <Avatar
                name={model}
                src={`${process.env.NEXT_PUBLIC_STORAGE_URL}storage/${carInfo?.images[0].name}`}
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
  );
}
