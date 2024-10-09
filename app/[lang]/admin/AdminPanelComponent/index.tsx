"use client";

import { Suspense, useEffect, useState } from "react";
import { Box, Flex, IconButton, SegmentedControl, Text } from "gestalt";
import { usePathname, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Loader from "../../components/Loader";
import HomeComponent from "../../components/HomeComponent/page";
import Message from "../../components/MessageComponent";
import AddCarModal from "./used-car/AddCarModal";
import AddPostsModal from "../posts/AddPostsModal";
import Login from "../login";
import { useApiPosts } from "@/hooks/useApiPosts";
// import AdminPanelUsedCarComponent from "./used-car";
// import AdminPanelPostsComponent from "../posts";

import "./adminPanel.scss";
import { useApiLogin } from "@/hooks/useApiLogin";

const AdminPanelUsedCarComponent = dynamic(() => import("./used-car"), {
  ssr: false,
});

const AdminPanelPostsComponent = dynamic(() => import("../posts"), {
  ssr: false,
});

export default function AdminPanelComponent({ lang, translations }) {
  const [isAddCarModalOpen, setIsAddCarOpen] = useState(false);
  const [isAddPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);
  const [page, setPage] = useState(1);
  const items = ["Оказион", "Новини"];
  const content = [
    <AdminPanelUsedCarComponent lang={lang} />,
    <AdminPanelPostsComponent lang={lang} />,
  ];
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [isOpenLoginModal, setOpenLoginModal] = useState(true);
  const pathname = usePathname();

  const { fetchPosts, isLoading } = useApiPosts();
  const { isLogin, setIsLogin } = useApiLogin();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("isLogin") === null) {
        localStorage.setItem("isLogin", "false");
      } else if (localStorage.getItem("isLogin") === "true") {
        setIsLogin(true);
        handleGetPostsData();
      } else {
        setIsLogin(false);
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("isLogin") === "true" && pathname === "/admin") {
      setShowToast(true);
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

  const fetchPostsData = () => {
    fetchPosts(page, setPage, lang);
  };

  const toggleLoginModal = () => {
    setOpenLoginModal(!isOpenLoginModal);
    location.reload();
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
            {showSuccessMsg && (
              <Message
                type="success"
                message="Промените са запазени успешно"
                setShowToast={setShowSuccessMsg}
              />
            )}
            {!isLogin &&
              // isOpenLoginModal &&
              localStorage.getItem("isLogin") === "false" && (
                <Login
                  isMobile={isMobile}
                  closeModal={toggleLoginModal}
                  // setOpenLoginMenu={setOpenLoginMenu}
                />
              )}
            {isLogin && (
              <div className="contact-wrapper mb-5">
                <div className="d-flex align-items-center justify-content-between title-contact">
                  <h1 className="d-flex pageHeader align-items-center justify-content-between py-4">
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
            )}
          </>
        }
      />
    </Suspense>
  );
}
