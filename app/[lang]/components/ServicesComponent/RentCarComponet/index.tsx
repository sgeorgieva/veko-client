"use client";

import { Suspense, useEffect, useState } from "react";
import Loader from "../../Loader";
import HomeComponent from "../../HomeComponent/page";

import "./rentCarComponet.scss";

export default function RentCarComponent({ title, translations }) {
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
            <h1 className="pageHeader mb-4">
              {title.rent_a_car} {title.comming_soon}
            </h1>
            <hr />
          </div>
          <div className="description-contact pageContent">
            {/* <Image /> */}
          </div>
        </div>
      }
    />
  );
}
