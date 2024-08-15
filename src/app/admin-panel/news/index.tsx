"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "gestalt";
import { endpoints, linkUrl } from "../../../../utils/functions";
import NewsPerSingleComponent from "../../../app/components/NewsPerSingleComponent";
import AddNewsModal from "./AddNewsModal";
import EditNewsModal from "./EditNewsModal";
import DeleteNewsModal from "./DeleteNewsModal";

import "./adminPanelNews.scss";
export default function AdminPanelNewsComponent({
  isAddNewsModalOpen,
  setIsNewsModalOpen,
}: {
  isAddNewsModalOpen: boolean;
  setIsNewsModalOpen: any;
}) {
  const [isEditNewsModalOpen, setIsEditNewsModalOpen] = useState(false);
  const [isDeleteNewsModalOpen, setIsDeleteNewsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    fetchNewsData();
  }, []);

  async function fetchNewsData() {
    // You can await here
    try {
      const response = await axios.get(
        `${linkUrl()}${endpoints.posts}?page=2`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Replace with your actual authorization token
          },
        }
      );
      if (response.status === 200) {
        console.log(response);
        setItems(response?.data?.posts?.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleEditPostData = () => {};

  return (
    <>
      <div className="row d-flex">
        {items && items.length > 0 ? (
          items.map((item) => {
            return (
              <div className="col-md-4">
                <NewsPerSingleComponent
                  key={item.id}
                  isMobile={isMobile}
                  handleEditPostData={handleEditPostData}
                  model={item.title}
                  id={item.id}
                  isEdit={true}
                  // postInfo={postInfo}
                  // setPostInfo={setPostInfo}
                  image={item?.images[0]?.name}
                  handleDeletePost={() => handleDeletePost(item.id)}
                  isEditNewsModalOpen={isEditNewsModalOpen}
                  setIsEditNewsModalOpen={setIsEditNewsModalOpen}
                  setIsDeleteNewsModalOpen={setIsDeleteNewsModalOpen}
                />
              </div>
            );
          })
        ) : (
          <Spinner show color="default" />
        )}
      </div>
      {isAddNewsModalOpen && (
        <AddNewsModal
          isMobile={isMobile}
          isAddNewsModalOpen={isAddNewsModalOpen}
          setIsNewsModalOpen={setIsNewsModalOpen}
          fetchNewsData={fetchNewsData}
        />
      )}
      {isEditNewsModalOpen && (
        <EditNewsModal
          isMobile={isMobile}
          isEditNewsModalOpen={isEditNewsModalOpen}
          setIsEditNewsModalOpen={setIsEditNewsModalOpen}
        />
      )}
      {isDeleteNewsModalOpen && (
        <DeleteNewsModal
          isMobile={isMobile}
          isDeleteNewsModalOpen={isDeleteNewsModalOpen}
          setIsDeleteNewsModalOpen={setIsDeleteNewsModalOpen}
        />
      )}
    </>
  );
}
