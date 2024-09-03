import { Box, Button, Flex, Text } from "gestalt";
import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";

import "./uploadImagesComponent.scss";

export default function UploadImagesComponet({ images, setImages }) {
  const maxNumber = 3;
  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    setImages(imageList as never[]);
  };

  return (
    <Box borderStyle="sm" rounding={3} paddingY={3}>
      <div className="App">
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div className="container upload__image-wrapper">
              <Flex alignItems="center" justifyContent="center">
                <Button
                  text="Щракнете или пуснете тук"
                  color={isDragging ? "red" : "transparent"}
                  onClick={onImageUpload}
                  {...dragProps}
                  size="sm"
                />
                &nbsp;
                {imageList.length && imageList.length > 0 ? (
                  <Button
                    onClick={onImageRemoveAll}
                    text="Изтрий всички снимки"
                    color="red"
                    size="sm"
                  />
                ) : null}
              </Flex>
              {imageList && imageList.length > 0 ? (
                <div className="row d-flex align-items-center justify-content-center pt-3">
                  {imageList.map((image, index) => (
                    <div key={index} className="col-md-4 image-item px-3 pt-3">
                      <img
                        src={
                          image.dataURL
                            ? image.dataURL
                            : `${process.env.NEXT_PUBLIC_STORAGE_URL}storage/${image.name}`
                        }
                        alt=""
                        width="100"
                        height="30"
                      />
                      {/* src={`${process.env.NEXT_PUBLIC_STORAGE_URL}storage/${image.name}`} */}
                      <div className="d-flex align-items-start justify-content-start py-4 image-item__btn-wrapper">
                        <Button
                          text="Качи"
                          color={isDragging ? "red" : "transparent"}
                          onClick={() => onImageUpdate(index)}
                          {...dragProps}
                          size="sm"
                        />
                        <Button
                          text="Изтрий"
                          color="red"
                          onClick={() => onImageRemove(index)}
                          {...dragProps}
                          size="sm"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          )}
        </ImageUploading>
      </div>
    </Box>
  );
}
