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
  BannerSlim,
} from "gestalt";
import UploadImagesComponent from "../../../components/UploadImagesComponent";

import "./editPostsModal.scss";
import { endpoints, linkUrl } from "../../../../../utils/functions";
import axios from "axios";

export default function EditPostsModal({
  isEditPostsModalOpen,
  setIsEditPostsModalOpen,
  isMobile,
  setIsDeletePostsModalOpen,
  postInfo,
  handleGetPostsData,
  setShowSuccessMsg,
  lang,
}: any) {
  let newItems = null;
  const [title, setTitle] = useState(postInfo?.title);
  const [description, setDescription] = useState(postInfo?.description);
  const [images, setImages] = useState(postInfo?.images);

  const [isValidForm, setIsValidForm] = useState(true);
  const [messageValidation, setMessageValidation] = useState("");
  const [hasTitleValidationError, setHasTitleValidationError] = useState(false);
  const [hasDescriptionValidationError, setHasDescriptionValidationError] =
    useState(false);
  const [hasImagesValidationError, setHasImagesValidationError] =
    useState(false);

  const handleCloseOnOutsideClick = () => {
    setIsEditPostsModalOpen(false);
  };

  const handleCancelEditPost = () => {
    setIsEditPostsModalOpen(!isEditPostsModalOpen);
  };

  const handleTitleChange = (event) => {
    setTitle(event.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.value);
  };

  const handleEditPost = (e: any) => {
    validateForm();

    if (
      !hasTitleValidationError &&
      !hasDescriptionValidationError &&
      (!hasImagesValidationError || images.length > 0)
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

      fetchEditPost(postInfo.id);
    }
  };

  const fetchEditPost = async (id: number) => {
    const formData = new FormData();
    formData.append("title", newItems[0].title);
    formData.append("description", newItems[0].description);
    formData.append("language_id", lang);
    images.map((image) => formData.append("images[]", image.file));

    try {
      const response = await axios.post(
        `${linkUrl()}${endpoints.updatePost}${id}`,
        formData,
        {
          headers: {
            Accept: "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Replace with your actual authorization token
          },
        }
      );
      if (response.status === 200) {
        setIsEditPostsModalOpen(false);
        handleGetPostsData();
        setShowSuccessMsg(true);
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

  console.log("postInfo", postInfo);

  return (
    <div className="edit-post-modal-wrapper">
      <Box padding={6}>
        {isEditPostsModalOpen && (
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
                      onClick={() => {
                        setIsDeletePostsModalOpen(true);
                        setIsEditPostsModalOpen(false);
                      }}
                      size={isMobile ? "sm" : "lg"}
                      text="Изтрий"
                    />
                  </Flex.Item>
                  <Flex gap={{ column: 0, row: 2 }}>
                    <Button
                      onClick={() => setIsEditPostsModalOpen(false)}
                      size={isMobile ? "sm" : "lg"}
                      text="Отказ"
                    />
                    <Button
                      color="blue"
                      onClick={() => setIsEditPostsModalOpen(false)}
                      size={isMobile ? "sm" : "lg"}
                      text="Редактирай"
                      type="submit"
                    />
                  </Flex>
                </Flex>
              }
              heading={isMobile ? "" : `Редактиране на новина ${title}`}
              onDismiss={() => setIsEditPostsModalOpen(false)}
              size="lg"
            >
              {isMobile && (
                <h3 className="fw-bold pb-3 text-center">
                  Редактиране на новина {title}
                </h3>
              )}
              {messageValidation && (
                <Box
                  alignItems="center"
                  display="flex"
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
              <Box height={300} id="popover-overlaypanel">
                <Box rounding={4} width={200}>
                  <Mask rounding={4}>
                    <Image
                      alt="Tropic greens: The taste of Petrol and Porcelain | Interior design, Vintage Sets and Unique Pieces agave"
                      color="rgb(231, 186, 176)"
                      naturalHeight={751}
                      naturalWidth={564}
                      src={"https://i.ibb.co/7bQQYkX/stock2.jpg"}
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
                  onChange={(event) => {
                    handleTitleChange(event);
                  }}
                  errorMessage={
                    !hasTitleValidationError
                      ? undefined
                      : "Моля, въведете заглавие"
                  }
                />
                <Box>
                  <TextArea
                    id="description"
                    label="Описание"
                    onChange={(event) => {
                      handleDescriptionChange(event);
                    }}
                    placeholder=" "
                    value={description}
                    errorMessage={
                      !hasDescriptionValidationError
                        ? undefined
                        : "Моля, въведете описание"
                    }
                  />
                </Box>
              </div>
              <div className="row py-3">
                <h6 className="fw-bold">Снимки</h6>
                <Text weight="bold">
                  <UploadImagesComponent
                    images={images}
                    setImages={setImages}
                  />
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
                    text="Редактирай"
                    onClick={(e) => handleEditPost(e)}
                  />{" "}
                </Box>
                <Button
                  fullWidth
                  type="button"
                  color="gray"
                  accessibilityLabel="button"
                  size={`${isMobile ? "sm" : "lg"}`}
                  text="Отказ"
                  onClick={(e) => handleCancelEditPost()}
                />{" "}
              </div>
            </OverlayPanel>
          </Layer>
        )}
      </Box>
    </div>
  );
}
