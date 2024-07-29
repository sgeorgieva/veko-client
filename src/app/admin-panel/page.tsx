"use client";

import { Suspense, useEffect, useState } from "react";
import { Button, Flex, Tabs } from "gestalt";
import Loader from "../components/Loader";
import HomeComponent from "../components/HomeComponent";
import AdminPanelUsedCarComponent from "./used-car";
import AdminPanelNewsComponent from "./news";

import "./adminPanel.scss";
export default function AdminPanel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAddCarModalOpen, setIsAddCarOpen] = useState(false);
  const [isAddNewsModalOpen, setIsNewsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    console.log("HERE in admin panel", activeIndex);
    setActiveIndex(parseInt(localStorage.getItem("activeTabIndex")));
  }, [activeIndex]);

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
              <div className="title-contact">
                <h1 className="d-flex pageHeader align-items-center justify-content-start mb-4">
                  Админстраторски панел на Veko Oil
                </h1>
              </div>
              <hr />
              <Flex
                alignItems="center"
                height="100%"
                justifyContent="between"
                width="100%"
              >
                <Tabs
                  activeTabIndex={activeIndex}
                  onChange={({ activeTabIndex, event }) => {
                    event.preventDefault();
                    setActiveIndex(activeTabIndex);
                    localStorage.setItem(
                      "activeTabIndex",
                      activeTabIndex.toString()
                    );
                  }}
                  tabs={[
                    {
                      href: "/admin-panel",
                      text: "Оказион",
                    },
                    {
                      href: "/admin-panel",
                      text: "Новини",
                    },
                  ]}
                />
                <div className={`${isMobile ? "" : "pt-4"}`}>
                  {activeIndex === 0 ? (
                    <Flex
                      alignItems="center"
                      height="100%"
                      justifyContent="end"
                      width="100%"
                    >
                      <Button
                        color="blue"
                        size={isMobile ? "sm" : "lg"}
                        text="Добави автомобил"
                        onClick={openAddCarModal}
                      />
                    </Flex>
                  ) : (
                    <Flex
                      alignItems="center"
                      height="100%"
                      justifyContent="end"
                      width="100%"
                    >
                      <Button
                        color="blue"
                        size={isMobile ? "sm" : "lg"}
                        text="Добави новина"
                        onClick={openAddNewsModal}
                      />
                    </Flex>
                  )}
                </div>
              </Flex>
              {activeIndex === 0 && (
                <AdminPanelUsedCarComponent
                  isAddCarModalOpen={isAddCarModalOpen}
                  setIsAddCarOpen={setIsAddCarOpen}
                />
              )}
              {activeIndex === 1 && (
                <AdminPanelNewsComponent
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
