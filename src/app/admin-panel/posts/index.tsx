"use client";

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Spinner } from "gestalt";
import { endpoints, linkUrl } from "../../../../utils/functions";
import PostComponent from "../../components/PostComponent";
import AddPostsModal from "./AddPostsModal";
import EditPostsModal from "./EditPostsModal";
import DeletePostsModal from "./DeletePostsModal";

import "./adminPanelPosts.scss";
export default function AdminPanelPostsComponent({
  isAddPostModalOpen,
  setIsPostModalOpen,
}: {
  isAddPostModalOpen: boolean;
  setIsPostModalOpen: any;
}) {
  const [isEditPostsModalOpen, setIsEditPostsModalOpen] = useState(false);
  const [isDeletePostsModalOpen, setIsDeletePostsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [items, setItems] = useState([]);
  const [deleteId, setDeleteId] = useState(0);
  const [postInfo, setPostInfo] = useState("");
  const initialized = useRef(false);

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    if (!initialized.current && items && items.length === 0) {
      initialized.current = true;
      fetchPostsData();
    }
  }, [items]);

  async function fetchPostsData() {
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
        setItems(response?.data?.posts?.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const fetchDeletePostData = async (id: number) => {
    try {
      const response = await axios.delete(
        `${linkUrl()}${endpoints.deletePost}${id}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Replace with your actual authorization token
          },
        }
      );
      if (response.status === 200) {
        setIsDeletePostsModalOpen(!isDeletePostsModalOpen);
        // fetchPostsData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetPostsData = () => {
    fetchPostsData();
  };

  const handleEditPostData = () => {
    setIsEditPostsModalOpen(true);
  };

  const handleDeletePost = (id: number) => {
    setIsDeletePostsModalOpen(!isDeletePostsModalOpen);
    setDeleteId(id);
  };

  return (
    <>
      <div className="row d-flex">
        {items && items.length > 0 ? (
          items.map((item) => {
            return (
              <div className="col-md-4">
                <PostComponent
                  title={item.title}
                  key={item.id}
                  isMobile={isMobile}
                  handleEditPostData={handleEditPostData}
                  model={item.title}
                  id={item.id}
                  isEdit={true}
                  postInfo={postInfo}
                  setPostInfo={setPostInfo}
                  image={item?.images[0]?.name}
                  handleDeletePost={() => handleDeletePost(item.id)}
                  isEditPostsModalOpen={isEditPostsModalOpen}
                  setIsEditPostsModalOpen={setIsEditPostsModalOpen}
                  setIsDeletePostsModalOpen={setIsDeletePostsModalOpen}
                />
              </div>
            );
          })
        ) : (
          <Spinner show color="default" />
        )}
      </div>
      {isAddPostModalOpen && (
        <AddPostsModal
          isMobile={isMobile}
          isAddPostModalOpen={isAddPostModalOpen}
          setIsPostModalOpen={setIsPostModalOpen}
          handleGetPostsData={handleGetPostsData}
        />
      )}
      {isEditPostsModalOpen && (
        <EditPostsModal
          isMobile={isMobile}
          setIsDeletePostsModalOpen={setIsDeletePostsModalOpen}
          fetchPostsData={fetchPostsData}
          id={deleteId}
          postInfo={postInfo}
          isEditPostsModalOpen={isEditPostsModalOpen}
          setIsEditPostsModalOpen={setIsEditPostsModalOpen}
          handleGetPostsData={handleGetPostsData}
        />
      )}
      {isDeletePostsModalOpen && (
        <DeletePostsModal
          id={deleteId}
          isMobile={isMobile}
          isDeletePostsModalOpen={isDeletePostsModalOpen}
          setIsDeletePostsModalOpen={setIsDeletePostsModalOpen}
          handleDeletePost={() => fetchDeletePostData(deleteId)}
        />
      )}
    </>
  );
}
