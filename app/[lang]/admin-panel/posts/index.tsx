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
import Message from "../../components/MessageComponent";
export default function AdminPanelPostsComponent({
  isAddPostModalOpen,
  setIsPostModalOpen,
  lang,
}: {
  isAddPostModalOpen: boolean;
  setIsPostModalOpen: any;
  lang: string;
}) {
  const [isEditPostsModalOpen, setIsEditPostsModalOpen] = useState(false);
  const [isDeletePostsModalOpen, setIsDeletePostsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [items, setItems] = useState([]);
  const [deleteId, setDeleteId] = useState(0);
  const [postInfo, setPostInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [pagesLength, setPagesLength] = useState(null);
  const initialized = useRef(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      fetchPostsData();
    }
  }, [items]);

  const handleScroll = () => {
    if (window.innerHeight > document.documentElement.scrollTop || isLoading) {
      return;
    } else {
      if (page <= pagesLength) {
        fetchPostsData();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  async function fetchPostsData() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${linkUrl()}${endpoints.posts}?page=${page}&language_id=${lang}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Replace with your actual authorization token
          },
        }
      );
      if (response.status === 200) {
        setItems((prevItems) => [...prevItems, ...response?.data?.posts?.data]);
        setPagesLength(response.data?.posts?.last_page);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
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
        fetchPostsData();
        setShowSuccessMsg(true);
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
      {showSuccessMsg && (
        <Message
          type="success"
          message="Промените са запазени успешно"
          setShowToast={setShowSuccessMsg}
        />
      )}
      <div className="row d-flex">
        {items && items.length > 0 && !isLoading ? (
          items.map((item) => {
            return (
              <div className="col-md-3">
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
                  lang={lang}
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
          setShowSuccessMsg={setShowSuccessMsg}
          lang={lang}
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
          setShowSuccessMsg={setShowSuccessMsg}
          lang={lang}
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
