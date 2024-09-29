import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { Avatar, Box, Button, Flex, Link, Text, WashAnimated } from "gestalt";
import { endpoints, linkUrl } from "../../../../utils/functions";
import { CarProvider, useCarContext } from "@/app/context/CarContext";

import "./usedCarPerSingleComponent.scss";
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
  lang,
}: any) {
  const pathname = usePathname();
  const router = useRouter();
  const { car, setCar } = useCarContext();

  const handleSingleCar = (e) => {
    e.event.preventDefault();
    setCar(carInfo);

    car &&
      Object.keys(car).length > 0 &&
      router.push(
        lang !== "en"
          ? `/services/used-car/${encodeURIComponent(model)}`
          : `${pathname}/${encodeURIComponent(model)}`
      );
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
        <Link onClick={handleSingleCar}>
          <WashAnimated
            image={
              <Avatar
                name={model}
                src={`${process.env.NEXT_PUBLIC_STORAGE_URL}storage/${carInfo?.images[0].name}`}
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
    // </CarProvider>
  );
}
