import { Fragment, useState } from "react";
import {
  Box,
  CompositeZIndex,
  FixedZIndex,
  Layer,
  ModalAlert,
  TextArea,
  TextField,
} from "gestalt";

import "./addNewsModal.scss";

export default function AddNewsModal({
  isAddNewsModalOpen,
  setIsNewsModalOpen,
}: any) {
  const HEADER_ZINDEX = new FixedZIndex(10);
  const modalZIndex = new CompositeZIndex([HEADER_ZINDEX]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddNews = () => {
    // Add news logic here
    setIsNewsModalOpen(!isAddNewsModalOpen);
  };

  const handleCancelAddingNews = () => {
    setIsNewsModalOpen(!isAddNewsModalOpen);
  };

  return (
    <Box padding={8}>
      {isAddNewsModalOpen && (
        <Layer zIndex={modalZIndex}>
          <ModalAlert
            accessibilityModalLabel="Create new board"
            primaryAction={{
              accessibilityLabel: "cancel item",
              label: "Отказ",
              onClick: () => handleCancelAddingNews(),
              role: "button",
            }}
            secondaryAction={{
              accessibilityLabel: "add item",
              label: "Добави",
              onClick: () => handleAddNews(),
              role: "button",
            }}
            heading="Добавяне на новина в уебсайта"
            onDismiss={() => handleCancelAddingNews()}
            type="default"
          >
            <Fragment>
              <div className="row">
                <div className="col-md-12">
                  <Box
                    alignItems="start"
                    display="flex"
                    height="100%"
                    justifyContent="start"
                  >
                    <Box width="100%">
                      <TextField
                        id="title"
                        label="Заглавие"
                        onChange={(e) => {
                          setTitle(e.value);
                        }}
                        placeholder=""
                        value={title}
                      />
                    </Box>
                  </Box>
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-md-12">
                  <Box
                    alignItems="start"
                    display="flex"
                    height="100%"
                    justifyContent="start"
                  >
                    <Box width="100%">
                      <TextArea
                        id="description"
                        label="Допълнителни описание"
                        onChange={(e) => {
                          setDescription(e.value);
                        }}
                        placeholder=""
                        value={description}
                      />
                    </Box>
                  </Box>
                </div>
              </div>
            </Fragment>
          </ModalAlert>
        </Layer>
      )}
    </Box>
  );
}
