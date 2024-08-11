"use client";

import { Suspense, useEffect, useState } from "react";
import { Image } from "gestalt";
import Loader from "../../Loader";
import HomeComponent from "../../HomeComponent";
import UsedCarPerSingleComponent from "../../UsedCarPerSingleComponent";
import CroppedKiaImage from "../../../../../public/images/cropped-kia-motors.png";

import "./usedCarComponent.scss";

export default function UsedCarComponent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <HomeComponent
        isHomePage={false}
        component={
          <div
            className={`used-car-wrapper mt-3 ${
              isMobile ? "used-car-wrapper-mobile" : ""
            }`}
          >
            <div className="title-contact">
              <h1 className="pageHeader mb-4">Автооказион</h1>
              <Image
                alt="kia-cropped-image"
                src={CroppedKiaImage.src}
                className="test"
              />
            </div>
            <hr />
            <div className="description-contact pageContent">
              <div className="row">
                <UsedCarPerSingleComponent isEdit={false} />
              </div>
            </div>
          </div>
        }
      />
    </Suspense>
  );
}
