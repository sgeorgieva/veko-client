import { Fragment, useState } from "react";
import {
  Box,
  Button,
  CompositeZIndex,
  FixedZIndex,
  Layer,
  ModalAlert,
  Text,
} from "gestalt";

export default function DeleteCarModal({
  isMobile,
  isDeleteCarModalOpen,
  setIsDeleteCarModalOpen,
  handleDeleteCar,
  id,
}: {
  isMobile: boolean;
  isDeleteCarModalOpen: boolean;
  setIsDeleteCarModalOpen: any;
  handleDeleteCar: any;
  id: number;
}) {
  const HEADER_ZINDEX = new FixedZIndex(10);
  const zIndex = new CompositeZIndex([HEADER_ZINDEX]);

  return (
    <Fragment>
      {isDeleteCarModalOpen ? (
        <Layer zIndex={zIndex}>
          <ModalAlert
            accessibilityModalLabel="Изтриване на автомобил"
            heading={isMobile ? "" : "Премахване на автомобил от автооказион"}
            onDismiss={() => {
              setIsDeleteCarModalOpen(!isDeleteCarModalOpen);
            }}
          >
            {isMobile && (
              <h3 className="fw-bold text-center pb-3">
                Премахване на автомобил от автооказион
              </h3>
            )}
            <Text>
              Този автомобил и всички свързани с него метаданни ще бъдат
              премахнати от вашия автооказион за постоянно. <br /> Това действие
              не може да бъде отменено.
            </Text>
            <Box padding={0} marginTop={3} marginBottom={3}>
              <Button
                fullWidth
                type="submit"
                color="red"
                accessibilityLabel="Submit"
                size={`${isMobile ? "sm" : "lg"}`}
                text="Премахни"
                onClick={(e) => handleDeleteCar(id)}
              />{" "}
            </Box>
            <Button
              fullWidth
              type="button"
              color="gray"
              accessibilityLabel="button"
              size={`${isMobile ? "sm" : "lg"}`}
              text="Отказ"
              onClick={(e) => setIsDeleteCarModalOpen(!isDeleteCarModalOpen)}
            />{" "}
          </ModalAlert>
        </Layer>
      ) : null}
    </Fragment>
  );
}
