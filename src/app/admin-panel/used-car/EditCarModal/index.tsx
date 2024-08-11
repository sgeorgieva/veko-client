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
} from "gestalt";

import "./editCarModal.scss";
export default function EditCarModal({
  isEditCarModalOpen,
  setIsEditCarModalOpen,
  setIsDeleteCarModalOpen,
  isMobile,
}: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCloseOnOutsideClick = () => {
    setIsEditCarModalOpen(false);
  };

  return (
    <Box padding={6}>
      {isEditCarModalOpen && (
        <Layer zIndex={new FixedZIndex(11)}>
          <OverlayPanel
            size={isMobile ? "sm" : "lg"}
            accessibilityDismissButtonLabel="Close edit News overlay panel"
            accessibilityLabel="Edit news"
            closeOnOutsideClick={() => handleCloseOnOutsideClick}
            footer={
              <Flex>
                <Flex.Item flex="grow">
                  <Button
                    color="red"
                    onClick={() => {
                      setIsDeleteCarModalOpen(true);
                      setIsEditCarModalOpen(false);
                    }}
                    size={isMobile ? "sm" : "lg"}
                    text="Изтрий"
                  />
                </Flex.Item>
                <Flex gap={{ column: 0, row: 2 }}>
                  <Button
                    onClick={() => setIsEditCarModalOpen(false)}
                    size={isMobile ? "sm" : "lg"}
                    text="Отказ"
                  />
                  <Button
                    color="blue"
                    onClick={() => setIsEditCarModalOpen(false)}
                    size={isMobile ? "sm" : "lg"}
                    text="Редактирай"
                    type="submit"
                  />
                </Flex>
              </Flex>
            }
            onDismiss={() => setIsEditCarModalOpen(false)}
            heading={isMobile ? "" : "Редактиране на автомобил Audi A3 2.0"}
          >
            {isMobile && (
              <h3 className="fw-bold text-center pb-3">
                Редактиране на автомобил Audi A3 2.0
              </h3>
            )}
            <Box
              display="flex"
              height={400}
              id="popover-overlaypanel"
              paddingX={8}
            >
              <Flex gap={{ row: 8, column: 0 }} width="100%">
                <Box paddingX={2} rounding={4} width={200}>
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
                <Flex.Item flex="grow">
                  <Flex direction="column" gap={{ column: 8, row: 0 }}>
                    <TextField
                      label="Заглавие"
                      id="title"
                      placeholder=" "
                      value={title}
                      onChange={() => setTitle(title)}
                    />
                    <TextArea
                      id="description"
                      label="Допълнително описание"
                      onChange={() => setDescription(description)}
                      placeholder=" "
                      value={description}
                    />
                  </Flex>
                </Flex.Item>
              </Flex>
            </Box>
          </OverlayPanel>
        </Layer>
      )}
    </Box>
  );
}
