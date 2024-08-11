import { Box, Button, Flex, Text } from "gestalt";
import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";

export default function UploadImagesComponet({
  onChange,
  images,
  maxNumber,
}: any) {
  return (
    <Box justifyContent="center" borderStyle="sm" rounding={3} paddingY={3}>
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
            // write your building UI
            <div className="upload__image-wrapper">
              <button
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button>
              &nbsp;
              <button onClick={onImageRemoveAll}>Remove all images</button>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image["data_url"]} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>

            // <div className="container upload__image-wrapper">
            //   <Flex alignItems="center" justifyContent="center">
            //     <Button
            //       text="Щракнете или пуснете тук"
            //       color={isDragging ? "red" : "transparent"}
            //       onClick={onImageUpload}
            //       {...dragProps}
            //       size="sm"
            //     />
            //     &nbsp;
            //     {imageList.length && imageList.length > 0 ? (
            //       <Button
            //         onClick={onImageRemoveAll}
            //         text="Изтрий всички снимки"
            //         color="red"
            //         size="sm"
            //       />
            //     ) : null}
            //   </Flex>
            //   {imageList && imageList.length > 0 ? (
            //     <div className="row pt-3">
            //       {imageList.map((image, index) => (
            //         <div key={index} className="col-md-4 image-item px-3 pt-3">
            //           <img src={image.dataURL} alt="" width="100" height="30" />
            //           <div className="d-flex py-4 image-item__btn-wrapper">
            //             <Button
            //               text="Качи"
            //               color={isDragging ? "red" : "transparent"}
            //               onClick={() => onImageUpdate(index)}
            //               {...dragProps}
            //               size="sm"
            //             />
            //             <Button
            //               text="Изтрий"
            //               color="red"
            //               onClick={() => onImageRemove(index)}
            //               {...dragProps}
            //               size="sm"
            //             />
            //           </div>
            //         </div>
            //       ))}
            //     </div>
            //   ) : null}
            // </div>
          )}
        </ImageUploading>
      </div>
    </Box>
  );
}
