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
  isMobile,
  isDeleteNewsModalOpen,
  setIsDeleteNewsModalOpen,
}: any) {
  const HEADER_ZINDEX = new FixedZIndex(10);
  const zIndex = new CompositeZIndex([HEADER_ZINDEX]);

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
          >
            <Text>
              Тази новина и всички свързани с нея метаданни ще бъдат премахнати
              от вашия уебсайт за постоянно. <br /> Това действие не може да
              бъде отменено.
            </Text>
            <Box marginTop={3} marginBottom={3} padding={0}>
              <Button
                fullWidth
                type="submit"
                color="red"
                accessibilityLabel="Submit"
                size={`${isMobile ? "sm" : "lg"}`}
                text="Премахни"
                onClick={(e) =>
                  setIsDeleteNewsModalOpen(!isDeleteNewsModalOpen)
                }
              />{" "}
            </Box>
            <Button
              fullWidth
              type="button"
              color="gray"
              accessibilityLabel="button"
              size={`${isMobile ? "sm" : "lg"}`}
              text="Отказ"
              onClick={(e) => setIsDeleteNewsModalOpen(!isDeleteNewsModalOpen)}
            />{" "}
          </ModalAlert>
        </Layer>
      ) : null}
    </Fragment>
  );
}
