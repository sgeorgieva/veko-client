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
  isDeleteCarModalOpen,
  setIsDeleteCarModalOpen,
  isMobile,
}: any) {
  const HEADER_ZINDEX = new FixedZIndex(10);
  const zIndex = new CompositeZIndex([HEADER_ZINDEX]);

  return (
    <Fragment>
      {isDeleteCarModalOpen ? (
        <Layer zIndex={zIndex}>
          <ModalAlert
            accessibilityModalLabel="Изтриване на автомобил"
            heading="Премахване на автомобил от автооказион"
            onDismiss={() => {
              setIsDeleteCarModalOpen(!isDeleteCarModalOpen);
            }}
            primaryAction={{
              accessibilityLabel: "Keep item",
              label: "Отказ",
              onClick: () => setIsDeleteCarModalOpen(!isDeleteCarModalOpen),
              role: "button",
              size: isMobile ? "sm" : "lg",
            }}
            secondaryAction={{
              accessibilityLabel: "Remove item",
              label: "Потвърди",
              onClick: () => {},
              role: "button",
              size: isMobile ? "sm" : "lg",
            }}
          >
            <Text>
              Този автомобил и всички свързани с него метаданни ще бъдат
              премахнати от вашия автооказион за постоянно. <br /> Това действие
              не може да бъде отменено.
            </Text>
          </ModalAlert>
        </Layer>
      ) : null}
    </Fragment>
  );
}
