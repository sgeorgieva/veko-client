import { Fragment, useState } from "react";
import {
  BannerSlim,
  Box,
  Button,
  CompositeZIndex,
  FixedZIndex,
  Flex,
  Layer,
  ModalAlert,
  Text,
  TextArea,
  TextField,
} from "gestalt";
import axios from "axios";
import { endpoints, linkUrl } from "../../../../../utils/functions";
import UploadImagesComponet from "../../../components/UploadImagesComponent";

import "./addPostsModal.scss";
export default function AddPostsModal({
  isMobile,
  isAddPostModalOpen,
  setIsPostModalOpen,
  handleGetPostsData,
}: {
  isMobile: boolean;
  isAddPostModalOpen: boolean;
  setIsPostModalOpen: any;
  handleGetPostsData: any;
}) {
  const HEADER_ZINDEX = new FixedZIndex(10);
  const modalZIndex = new CompositeZIndex([HEADER_ZINDEX]);
  let newItems = null;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const [isValidForm, setIsValidForm] = useState(true);
  const [messageValidation, setMessageValidation] = useState("");
  const [hasTitleValidationError, setHasTitleValidationError] = useState(false);
  const [hasDescriptionValidationError, setHasDescriptionValidationError] =
    useState(false);
  const [hasImagesValidationError, setHasImagesValidationError] =
    useState(false);

  const handleCancelAddingPost = (е) => {
    setIsPostModalOpen(!isAddPostModalOpen);
  };

  const handleTitleChange = (event) => {
    setTitle(event.value);
  };

  const handleDescription = (event) => {
    setDescription(event.value);
  };

  const handleAddPost = () => {
    validateForm();

    if (
      !hasTitleValidationError &&
      !hasDescriptionValidationError &&
      !hasImagesValidationError
    ) {
      setIsValidForm(true);
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
    }

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
        setIsPostModalOpen(false);
        handleGetPostsData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const validateForm = () => {
    if (!title) {
      setHasTitleValidationError(true);
      setIsValidForm(false);
    } else {
      setHasTitleValidationError(false);
    }

    if (!description) {
      setHasDescriptionValidationError(true);
      setIsValidForm(false);
    } else {
      setHasDescriptionValidationError(false);
    }

    if (!images) {
      setHasImagesValidationError(true);
      setIsValidForm(false);
    } else {
      setHasImagesValidationError(false);
    }

    setMessageValidation("Моля, попълнете празните полета");
  };

  return (
    <Box padding={8}>
      {isAddPostModalOpen && (
        <Layer zIndex={modalZIndex}>
          <ModalAlert
            accessibilityModalLabel="Create new board"
            heading="Добавяне на новина в уебсайта"
            onDismiss={(e) => handleCancelAddingPost(e)}
            type="default"
          >
            <Fragment>
              <div className="row">
                {!isValidForm && (
                  <Box
                    alignItems="center"
                    display="flex"
                    height="100%"
                    justifyContent="center"
                    padding={3}
                  >
                    <Flex
                      direction="column"
                      gap={{ column: 3, row: 0 }}
                      width="100%"
                    >
                      <BannerSlim
                        iconAccessibilityLabel="Info"
                        message={messageValidation}
                        onDismiss={() => setIsValidForm(!isValidForm)}
                        type="error"
                      />
                    </Flex>
                  </Box>
                )}
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
                        errorMessage={
                          !hasTitleValidationError
                            ? undefined
                            : "Моля, въведете заглавие"
                        }
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
                        errorMessage={
                          !hasDescriptionValidationError
                            ? undefined
                            : "Моля, въведете описание"
                        }
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
                    onClick={(e) => handleAddPost()}
                  />{" "}
                </Box>
                <Button
                  fullWidth
                  type="button"
                  color="gray"
                  accessibilityLabel="button"
                  size={`${isMobile ? "sm" : "lg"}`}
                  text="Отказ"
                  onClick={(e) => handleCancelAddingPost(e)}
                />{" "}
              </div>
            </Fragment>
          </ModalAlert>
        </Layer>
      )}
    </Box>
  );
}
