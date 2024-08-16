"use client";

import { Suspense, useEffect, useState } from "react";
import { Box, Flex, IconButton, SegmentedControl, Text } from "gestalt";
import Loader from "../components/Loader";
import { useRouter } from "next/navigation";
import HomeComponent from "../components/HomeComponent";
import AdminPanelUsedCarComponent from "./used-car";
import AdminPanelPostsComponent from "./posts";
import AddCarModal from "./used-car/AddCarModal";
import AddPostsModal from "./posts/AddPostsModal";
import Message from "../components/MessageComponent";

import "./adminPanel.scss";
export default function AdminPanel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAddCarModalOpen, setIsAddCarOpen] = useState(false);
  const [isAddPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);
  const items = ["Автооказион", "Новини"];
  const content = [
    <AdminPanelUsedCarComponent />,
    <AdminPanelPostsComponent />,
  ];
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (Boolean(localStorage.getItem("isLoginIn"))) {
      router.push("/admin-panel");
      setShowToast(true);
    } else {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    if (Boolean(localStorage.getItem("isLoginIn"))) {
      router.push("/admin-panel");
      setShowToast(true);
    } else {
      router.push("/");
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
      // now access your localStorage#
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
                  isMobile={isMobile}
                  isAddCarModalOpen={isAddCarModalOpen}
                  setIsAddCarOpen={setIsAddCarOpen}
                />
              )}
              {isAddPostModalOpen && (
                <AddPostsModal
                  handleGetPostsData
                  isMobile={isMobile}
                  isAddPostModalOpen={isAddPostModalOpen}
                  setIsPostModalOpen={setIsPostModalOpen}
                />
              )}
            </div>
          </>
        }
      />
    </Suspense>
  );
}
