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

export default function EditNewsModal({
  isEditNewsModalOpen,
  setIsEditNewsModalOpen,
  isMobile,
}: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Box padding={6}>
      {isEditNewsModalOpen && (
        <Layer zIndex={new FixedZIndex(11)}>
          <OverlayPanel
            accessibilityDismissButtonLabel="Close edit Pin overlay panel"
            accessibilityLabel="Edit your Pin details"
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
                      label="Описание"
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
