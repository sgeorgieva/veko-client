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
import UploadImagesComponet from "../../../../app/components/UploadImagesComponent";

import "./addNewsModal.scss";
import { ImageListType } from "react-images-uploading";
import { endpoints, linkUrl } from "../../../../../utils/functions";

export default function AddNewsModal({
  isMobile,
  isAddNewsModalOpen,
  setIsNewsModalOpen,
}: {
  isMobile: boolean;
  isAddNewsModalOpen: boolean;
  setIsNewsModalOpen: any;
}) {
  const HEADER_ZINDEX = new FixedZIndex(10);
  const modalZIndex = new CompositeZIndex([HEADER_ZINDEX]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const maxNumber = 5;

  const handleAddNews = () => {
    // Add news logic here
    console.log("here");
    handleCreatePost();
    setIsNewsModalOpen(!isAddNewsModalOpen);
  };

  const handleCancelAddingNews = () => {
    setIsNewsModalOpen(!isAddNewsModalOpen);
  };

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    setImages({
      images: imageList,
      index: addUpdateIndex,
    });
  };

  const handleCreatePost = async () => {
    console.log("images", images?.images[0].file);
    let formData = new URLSearchParams();
    formData.append("title", title);
    formData.append("description", description);
    // images?.images.forEach((image) => {
    //   console.log("image", image.file);
    //   return formData.append("images[]", image?.file);
    // });
    // formData.append("images[]", images?.images[0].file);
    console.log("formData", formData);

    try {
      const response = await fetch(
        `https://veka.perspectivefusion.com/api/v1/${endpoints.createPost}`,
        {
          // const response = await fetch(`${linkUrl()}${endpoints.login}`, {
          method: "POST",
          headers: {
            // "Content-Type": "multipart/form-data",
            "Content-Type": "application/x-www-form-urlencoded",
            Bearer: localStorage.getItem("jwt"),
          },
          // body: images?.images[0].file,
          body: formData,
        }
      );
      const data = await response.json();

      if (data.status === "fail" || data.status === "error") {
        throw Error(data.message);
      } else {
        console.log("data", data);
        // setError(false);
        // setMessage(t(data?.statusText));
      }
    } catch (error) {
      console.log("error", error);
      // setMessage(`${t(error?.message)}`);
      // setError(true);
      // throw Error(error);
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
                        label="Описание"
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
              <div className="row py-3 pb-4">
                <h6 className="fw-bold">Снимки</h6>
                <Text weight="bold">
                  <UploadImagesComponet
                    maxNumber={maxNumber}
                    onChange={onChange}
                    handleCreatePost={handleCreatePost}
                  />
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
                  onClick={(e) => handleCancelAddingNews()}
                />{" "}
              </div>
            </Fragment>
          </ModalAlert>
        </Layer>
      )}
    </Box>
  );
}
