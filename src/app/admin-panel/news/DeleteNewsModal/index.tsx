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

import "./deleteNewsModal.scss";
export default function DeleteNewsModal({
  isDeleteNewsModalOpen,
  setIsDeleteNewsModalOpen,
}: any) {
  const HEADER_ZINDEX = new FixedZIndex(10);
  const zIndex = new CompositeZIndex([HEADER_ZINDEX]);

  console.log("here in delete news modal");

  return (
    <Fragment>
      {isDeleteNewsModalOpen ? (
        <Layer zIndex={zIndex}>
          <ModalAlert
            accessibilityModalLabel="Изтриване на новина"
            heading="Премахване на новина от уебсайта"
            onDismiss={() => {
              setIsDeleteNewsModalOpen(!isDeleteNewsModalOpen);
            }}
            primaryAction={{
              accessibilityLabel: "Keep item",
              label: "Отказ",
              onClick: () => setIsDeleteNewsModalOpen(!isDeleteNewsModalOpen),
              role: "button",
            }}
            secondaryAction={{
              accessibilityLabel: "Remove item",
              label: "Потвърди",
              onClick: () => setIsDeleteNewsModalOpen(!isDeleteNewsModalOpen),
              role: "button",
            }}
          >
            <Text>
              Тази новина и всички свързани с нея метаданни ще бъдат премахнати
              от вашия уебсайт за постоянно. <br /> Това действие не може да
              бъде отменено.
            </Text>
          </ModalAlert>
        </Layer>
      ) : null}
    </Fragment>
  );
}
