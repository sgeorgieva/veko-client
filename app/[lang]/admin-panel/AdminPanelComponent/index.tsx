"use client";

import { Suspense, useEffect, useState } from "react";
import { Box, Flex, IconButton, SegmentedControl, Text } from "gestalt";
import { useRouter } from "next/navigation";
import axios from "axios";
import { endpoints, linkUrl } from "@/utils/functions";
import Loader from "../../components/Loader";
import HomeComponent from "../../components/HomeComponent/page";
import Message from "../../components/MessageComponent";
import AddCarModal from "./used-car/AddCarModal";
import AddPostsModal from "../posts/AddPostsModal";
import AdminPanelUsedCarComponent from "./used-car";
import AdminPanelPostsComponent from "../posts";

import "./adminPanel.scss";

export default function AdminPanelComponent({ lang }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAddCarModalOpen, setIsAddCarOpen] = useState(false);
  const [isAddPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [pagesLength, setPagesLength] = useState(null);
  const [itemsPage, setItemsPage] = useState([]);
  const items = ["Автооказион", "Новини"];
  const content = [
    <AdminPanelUsedCarComponent lang={lang} />,
    <AdminPanelPostsComponent lang={lang} />,
  ];
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  useEffect(() => {
    if (Boolean(localStorage.getItem("isLoginIn"))) {
      // router.push("/admin-panel");
      setShowToast(true);
    } else {
      // router.push("/");
    }
  }, []);

  useEffect(() => {
    if (Boolean(localStorage.getItem("isLoginIn"))) {
      // router.push("/admin-panel");
      setShowToast(true);
    } else {
      // router.push("/");
    }
  }, []);

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    let activeTabIndex;
    if (typeof window !== "undefined") {
      activeTabIndex = localStorage.getItem("activeTabIndex");
    }

    if (itemIndex !== parseInt(localStorage.getItem("activeTabIndex"))) {
      setItemIndex(parseInt(localStorage.getItem("activeTabIndex")));
    }
  }, [itemIndex]);

  const openAddCarModal = () => {
    setIsAddCarOpen(!isAddCarModalOpen);
  };

  const openAddNewsModal = () => {
    setIsPostModalOpen(!isAddPostModalOpen);
  };

  const handleGetPostsData = () => {
    fetchPostsData();
  };

  async function fetchPostsData() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${linkUrl()}${endpoints.posts}?page=${page}?language_id=${lang}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Replace with your actual authorization token
          },
        }
      );
      if (response.status === 200) {
        setItemsPage((prevItems) => [
          ...prevItems,
          ...response?.data?.posts?.data,
        ]);
        setPagesLength(response.data?.posts?.last_page);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Suspense fallback={<Loader />}>
      <HomeComponent
        isHomePage={false}
        component={
          <>
            {showToast && (
              <Message
                type="success"
                message="Успешно вписване"
                setShowToast={setShowToast}
              />
            )}
            {showSuccessMsg && (
              <Message
                type="success"
                message="Промените са запазени успешно"
                setShowToast={setShowSuccessMsg}
              />
            )}
            <div className="contact-wrapper">
              <div className="d-flex align-items-center justify-content-between title-contact">
                <h1 className="d-flex pageHeader align-items-center justify-content-between mb-4">
                  Админстраторски панел на Veko Oil
                </h1>
                {itemIndex === 0 && (
                  <IconButton
                    size={isMobile ? "sm" : "lg"}
                    bgColor="lightGray"
                    icon="add"
                    onClick={openAddCarModal}
                  />
                )}
                {itemIndex === 1 && (
                  <IconButton
                    size={isMobile ? "sm" : "lg"}
                    bgColor="lightGray"
                    icon="add"
                    onClick={openAddNewsModal}
                  />
                )}
              </div>
              <hr />
              <Box height="100%">
                <SegmentedControl
                  items={items}
                  onChange={({ activeIndex, event }) => {
                    event.preventDefault();
                    setItemIndex(activeIndex);
                    localStorage.setItem("activeTabIndex", +activeIndex);
                  }}
                  selectedItemIndex={itemIndex}
                />
                {isMobile ? (
                  <Flex justifyContent="center" alignItems="center">
                    <Box
                      borderStyle="sm"
                      height="80%"
                      marginTop={2}
                      padding={6}
                      rounding={2}
                    >
                      {itemIndex === 0 && <Text>{content[0]}</Text>}
                      {itemIndex === 1 && <Text>{content[1]}</Text>}
                    </Box>
                  </Flex>
                ) : (
                  <Box
                    borderStyle="sm"
                    height="80%"
                    marginTop={2}
                    padding={6}
                    rounding={2}
                  >
                    {itemIndex === 0 && <Text>{content[0]}</Text>}
                    {itemIndex === 1 && <Text>{content[1]}</Text>}
                  </Box>
                )}
              </Box>
              {isAddCarModalOpen && (
                <AddCarModal
                  lang={lang}
                  isMobile={isMobile}
                  isAddCarModalOpen={isAddCarModalOpen}
                  setIsAddCarOpen={setIsAddCarOpen}
                  setShowSuccessMsg={setShowSuccessMsg}
                  lang={lang}
                />
              )}
              {isAddPostModalOpen && (
                <AddPostsModal
                  handleGetPostsData={handleGetPostsData}
                  isMobile={isMobile}
                  isAddPostModalOpen={isAddPostModalOpen}
                  setIsPostModalOpen={setIsPostModalOpen}
                  setShowSuccessMsg={setShowSuccessMsg}
                  lang={lang}
                />
              )}
            </div>
          </>
        }
      />
    </Suspense>
  );
}
