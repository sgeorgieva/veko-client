import { useState } from "react";
import {
  Box,
  Button,
  FixedZIndex,
  Flex,
  Image,
  Layer,
  Mask,
  OverlayPanel,
  TextArea,
  TextField,
  Text,
} from "gestalt";
import UploadImagesComponent from "../../../../app/components/UploadImagesComponent";

import "./editNewsModal.scss";

export default function EditNewsModal({
  isEditNewsModalOpen,
  setIsEditNewsModalOpen,
  isMobile,
}: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCloseOnOutsideClick = () => {
    setIsEditNewsModalOpen(false);
  };

  const handleAddNews = () => {
    // Add car logic here
    setIsEditNewsModalOpen(!isEditNewsModalOpen);
  };

  const handleCancelAddingNews = () => {
    setIsEditNewsModalOpen(!isEditNewsModalOpen);
  };

  return (
    <Box padding={6}>
      {isEditNewsModalOpen && (
        <Layer zIndex={new FixedZIndex(11)}>
          <OverlayPanel
            accessibilityDismissButtonLabel="Close edit Pin overlay panel"
            accessibilityLabel="Edit your Pin details"
            closeOnOutsideClick={() => handleCloseOnOutsideClick}
            footer={
              <Flex>
                <Flex.Item flex="grow">
                  <Button
                    color="red"
                    onClick={() => setIsEditNewsModalOpen(false)}
                    size={isMobile ? "sm" : "lg"}
                    text="Изтрий"
                  />
                </Flex.Item>
                <Flex gap={{ column: 0, row: 2 }}>
                  <Button
                    onClick={() => setIsEditNewsModalOpen(false)}
                    size={isMobile ? "sm" : "lg"}
                    text="Отказ"
                  />
                  <Button
                    color="blue"
                    onClick={() => setIsEditNewsModalOpen(false)}
                    size={isMobile ? "sm" : "lg"}
                    text="Редактирай"
                    type="submit"
                  />
                </Flex>
              </Flex>
            }
            heading={isMobile ? "" : "Редактиране на новина №1"}
            onDismiss={() => setIsEditNewsModalOpen(false)}
            size="lg"
          >
            {isMobile && (
              <h3 className="fw-bold text-center pb-3">
                Редактиране на новина №1
              </h3>
            )}
            <Box height={300} id="popover-overlaypanel">
              <Box rounding={4} width={200}>
                <Mask rounding={4}>
                  <Image
                    alt="Tropic greens: The taste of Petrol and Porcelain | Interior design, Vintage Sets and Unique Pieces agave"
                    color="rgb(231, 186, 176)"
                    naturalHeight={751}
                    naturalWidth={564}
                    src="https://i.ibb.co/7bQQYkX/stock2.jpg"
                  />
                </Mask>
              </Box>
            </Box>
            <div className="row">
              <TextField
                label="Заглавие"
                id="title"
                placeholder=" "
                value={title}
                onChange={() => setTitle(title)}
              />
              <Box>
                <TextArea
                  id="description"
                  label="Описание"
                  onChange={() => setDescription(description)}
                  placeholder=" "
                  value={description}
                />
              </Box>
            </div>
            <div className="row py-3">
              <h6 className="fw-bold">Снимки</h6>
              <Text weight="bold">
                <UploadImagesComponent />
              </Text>
            </div>
            <div className="row mt-3 pb-4">
              <Box padding={0} marginTop={3} marginBottom={3}>
                <Button
                  fullWidth
                  type="submit"
                  color="blue"
                  accessibilityLabel="Submit"
                  size={`${isMobile ? "sm" : "lg"}`}
                  text="Добави"
                  onClick={(e) => handleAddNews()}
                />{" "}
              </Box>
              <Button
                fullWidth
                type="button"
                color="gray"
                accessibilityLabel="button"
                size={`${isMobile ? "sm" : "lg"}`}
                text="Отказ"
                onClick={(e) => handleCancelAddingNews()}
              />{" "}
            </div>
          </OverlayPanel>
        </Layer>
      )}
    </Box>
  );
}
