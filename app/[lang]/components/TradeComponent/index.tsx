"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import { Image } from "gestalt";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
import ServiceStationFirstImage from "../../../../public/images/service_station.webp";
import ServiceStationSecondImage from "../../../../public/images/service_station-second.webp";
import ServiceStationServicesComponent from "../ServiceStationServicesComponent";
import CarCentersFormComponent from "../CarCentersFormComponent";
import Loader from "../Loader";

import "./tradeComponent.scss";

const HomeComponent = dynamic(() => import("../HomeComponent/page"), {
  suspense: true,
});

export default function TradeComponent({ translations, translationsPage }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  console.log("translations", translations);

  return (
    <Suspense fallback={<Loader />}>
      <HomeComponent
        isHomePage={false}
        component={
          <div className="wrapper">
            <div className="title">
              <div
                className={`row d-flex align-items-center ${
                  isMobile ? "w-90 mx-auto" : ""
                }`}
              >
                <div className="col-md-12">
                  <h1 className="pageHeader">
                    {translations.service} {translations.station}
                  </h1>
                  <hr />
                </div>
              </div>
            </div>
            <div className={`description ${isMobile ? "text-center" : ""}`}>
              <div
                className={`d-flex align-items-center ${
                  isMobile ? "flex-column" : "row"
                }`}
              >
                <p>{translationsPage.service_station.service_station_text}</p>
                <div className="d-flex align-items-center pt-3">
                  <div className="pe-5">
                    <Image src={ServiceStationFirstImage.src} />
                  </div>
                  <div>
                    <Image src={ServiceStationSecondImage.src} />
                  </div>
                </div>
                <CarCentersFormComponent
                  translations={translationsPage.car_centers}
                />
                <ServiceStationServicesComponent
                  translations={translationsPage.service_station}
                  isMobile={isMobile}
                />
              </div>
            </div>
          </div>
        }
      />
    </Suspense>
  );
}
