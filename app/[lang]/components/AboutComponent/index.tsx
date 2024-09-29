"use client";

import { Suspense, useEffect, useState } from "react";
import Loader from "../../components/Loader";
import HomeComponent from "../HomeComponent/page";

import "./aboutComponent.scss";

export default function AboutComponent({ title, translations }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  return (
    <HomeComponent
      isHomePage={false}
      component={
        <div className="contact-wrapper">
          <div className="title-contact">
            <h1 className="pageHeader mb-4">{title}</h1>
          </div>
          <div className="description-contact pageContent">
            <p>{translations.paragraph_text_one}</p>
            <p>{translations.paragraph_text_two}</p>
            <p className="fw-bold text-uppercase">
              {translations.paragraph_text_three}
            </p>
            <p
              className={`about-image ${isMobile ? "mobile-about-image" : ""}`}
            />
          </div>
        </div>
      }
    />
  );
}
