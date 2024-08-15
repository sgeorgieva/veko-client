import { Fragment, useState } from "react";
import {
  Box,
  Button,
  CompositeZIndex,
  FixedZIndex,
  Layer,
  ModalAlert,
  Text,
  TextArea,
  TextField,
} from "gestalt";
import axios from "axios";
import { endpoints, linkUrl } from "../../../../../utils/functions";
import UploadImagesComponet from "../../../../app/components/UploadImagesComponent";

import "./addNewsModal.scss";
export default function AddNewsModal({
  isMobile,
  isAddNewsModalOpen,
  setIsNewsModalOpen,
  fetchNewsData,
}: {
  isMobile: boolean;
  isAddNewsModalOpen: boolean;
  setIsNewsModalOpen: any;
  fetchNewsData: any;
}) {
  const HEADER_ZINDEX = new FixedZIndex(10);
  const modalZIndex = new CompositeZIndex([HEADER_ZINDEX]);
  let newItems = null;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const maxNumber = 5;

  const handleCancelAddingNews = () => {
    setIsNewsModalOpen(!isAddNewsModalOpen);
  };

  const handleTitleChange = (event) => {
    setTitle(event.value);
  };

  const handleDescription = (event) => {
    setDescription(event.value);
  };

  const handleAddNews = () => {
    // Add car logic here
    setIsNewsModalOpen(!isAddNewsModalOpen);
    const values = [
      {
        title: title,
        description: description,
      },
    ];

    newItems = values.map((value) => ({
      title: value.title,
      description: value.description,
      images: images,
    }));

    if (images[0].file !== undefined) {
      fetchAddPost(newItems);
    }
  };

  const fetchAddPost = async (newItems: any) => {
    const formData = new FormData();
    formData.append("title", newItems[0].title);
    formData.append("description", newItems[0].description);
    images.map((image) => formData.append("images[]", image.file));

    try {
      const response = await axios.post(
        `${linkUrl()}${endpoints.createPost}`,
        formData,
        {
          headers: {
            Accept: "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Replace with your actual authorization token
          },
        }
      );
      if (response.status === 200) {
        setIsNewsModalOpen(false);
        fetchNewsData();
      }
    } catch (error) {
      console.error(error);
      setIsNewsModalOpen(false);
    }
  };

  return (
    <Box padding={8}>
      {isAddNewsModalOpen && (
        <Layer zIndex={modalZIndex}>
          <ModalAlert
            accessibilityModalLabel="Create new board"
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
                        onChange={(event) => {
                          handleTitleChange(event);
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
                        label="Описание"
                        onChange={(event) => {
                          handleDescription(event);
                        }}
                        placeholder=""
                        value={description}
                      />
                    </Box>
                  </Box>
                </div>
              </div>
              <div className="row py-3 pb-4">
                <h6 className="fw-bold">Снимки</h6>
                <Text weight="bold">
                  <UploadImagesComponet images={images} setImages={setImages} />
                </Text>
              </div>
              <div className="row mt-3">
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
                  onClick={(e) => handleCancelAddingNews(e)}
                />{" "}
              </div>
            </Fragment>
          </ModalAlert>
        </Layer>
      )}
    </Box>
  );
}
