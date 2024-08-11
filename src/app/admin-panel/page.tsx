"use client";

import { Suspense, useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  SegmentedControl,
  Tabs,
  Text,
} from "gestalt";
import Loader from "../components/Loader";
import HomeComponent from "../components/HomeComponent";
import AdminPanelUsedCarComponent from "./used-car";
import AdminPanelNewsComponent from "./news";

import "./adminPanel.scss";
import AddCarModal from "./used-car/AddCarModal";
import { act } from "react-dom/test-utils";
import AddNewsModal from "./news/AddNewsModal";
export default function AdminPanel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAddCarModalOpen, setIsAddCarOpen] = useState(false);
  const [isAddNewsModalOpen, setIsNewsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);
  const items = ["Автооказион", "Новини"];
  const content = [<AdminPanelUsedCarComponent />, <AdminPanelNewsComponent />];

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

    setActiveIndex(parseInt(activeTabIndex));
    console.log("HERE in admin panel", activeIndex);
    console.log("HERE in admin panel", itemIndex);
  }, [itemIndex]);

  const openAddCarModal = () => {
    setIsAddCarOpen(!isAddCarModalOpen);
  };

  const openAddNewsModal = () => {
    setIsNewsModalOpen(!isAddNewsModalOpen);
  };

  return (
    <Suspense fallback={<Loader />}>
      <HomeComponent
        isHomePage={false}
        component={
          <>
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
                    localStorage.setItem(
                      "activeTabIndex",
                      activeIndex.toString()
                    );
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
                      {activeIndex === 0 && <Text>{content[0]}</Text>}
                      {activeIndex === 1 && <Text>{content[1]}</Text>}
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
                    {activeIndex === 0 && <Text>{content[0]}</Text>}
                    {activeIndex === 1 && <Text>{content[1]}</Text>}
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
              {isAddNewsModalOpen && (
                <AddNewsModal
                  isMobile={isMobile}
                  isAddNewsModalOpen={isAddNewsModalOpen}
                  setIsNewsModalOpen={setIsNewsModalOpen}
                />
              )}
            </div>
          </>
        }
      />
    </Suspense>
  );
}
