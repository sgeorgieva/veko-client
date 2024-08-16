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

import "./deletePostsModal.scss";
export default function DeletePostsModal({
  isMobile,
  isDeletePostsModalOpen,
  setIsDeletePostsModalOpen,
  handleDeletePost,
  id,
}: any) {
  const HEADER_ZINDEX = new FixedZIndex(10);
  const zIndex = new CompositeZIndex([HEADER_ZINDEX]);

  return (
    <Fragment>
      {isDeletePostsModalOpen ? (
        <Layer zIndex={zIndex}>
          <ModalAlert
            accessibilityModalLabel="Изтриване на новина"
            heading="Премахване на новина от уебсайта"
            onDismiss={() => {
              setIsDeletePostsModalOpen(!isDeletePostsModalOpen);
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
                onClick={(e) => handleDeletePost(id)}
              />{" "}
            </Box>
            <Button
              fullWidth
              type="button"
              color="gray"
              accessibilityLabel="button"
              size={`${isMobile ? "sm" : "lg"}`}
              text="Отказ"
              onClick={(e) =>
                setIsDeletePostsModalOpen(!isDeletePostsModalOpen)
              }
            />{" "}
          </ModalAlert>
        </Layer>
      ) : null}
    </Fragment>
  );
}
