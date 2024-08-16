"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import OilImage from "../../../../public/images/oil.png";
import AutoConsumablesImage from "../../../../public/images/auto-consumables.png";
import BatteryImage from "../../../../public/images/battery.png";
import LiquidsImage from "../../../../public/images/liquids.png";
import Loader from "../Loader";

import "./tradeComponent.scss";

const OilsComponent = dynamic(() => import("./OilsComponent"), {
  suspense: true,
});
const AccumulatorsComponent = dynamic(() => import("./AccumulatorsComponent"), {
  suspense: true,
});
const AutoConsumablesComponent = dynamic(
  () => import("./AutoConsumablesComponent"),
  { suspense: true }
);
const SpecialLiquidsComponent = dynamic(
  () => import("./SpecialLiquidsComponent"),
  { suspense: true }
);
const HomeComponent = dynamic(() => import("../HomeComponent"), {
  suspense: true,
});

export default function TradeComponent() {
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
          <div className="wrapper">
            <div className="title">
              <div
                className={`row d-flex align-items-center ${
                  isMobile ? "w-90 mx-auto" : ""
                }`}
              >
                <div className="col-md-12">
                  <h1 className="pageHeader">Търговия</h1>
                </div>
              </div>
            </div>
            <div className={`description ${isMobile ? "text-center" : ""}`}>
              <div
                className={`d-flex align-items-center py-4 flex-nowrap ${
                  isMobile ? "flex-column" : "row"
                }`}
              >
                <Link
                  href="/trade/oils"
                  children={<OilsComponent />}
                  className={`${isMobile ? "" : "w-25 p-0"}`}
                >
                  <img src={OilImage.src} alt="ecology-image" />
                  <h5 className="fw-bold text-center text-uppercase pt-3">
                    Масла
                  </h5>
                </Link>
                <Link
                  href="/trade/accumulators"
                  children={<AccumulatorsComponent />}
                  className={`${isMobile ? "" : "w-25 p-0 mx-3"}`}
                >
                  <img src={BatteryImage.src} alt="accumulators-image" />
                  <h5 className="fw-bold text-center text-uppercase pt-3">
                    Акумулатори
                  </h5>
                </Link>
                <Link
                  href="/trade/auto-consumables"
                  children={<AutoConsumablesComponent />}
                  className={`${isMobile ? "" : "w-25 p-0"}`}
                >
                  <img
                    src={AutoConsumablesImage.src}
                    alt="auto-consumables-image"
                  />
                  <h5 className="fw-bold text-center text-uppercase pt-3">
                    Автоконсумативи
                  </h5>
                </Link>
                <Link
                  href="/trade/special-liquids"
                  children={<SpecialLiquidsComponent />}
                  className={`${isMobile ? "" : "w-25 p-0 ms-3"}`}
                >
                  <img src={LiquidsImage.src} alt="special-liquids-image" />
                  <h5 className="fw-bold text-center text-uppercase pt-3">
                    Специални течности
                  </h5>
                </Link>
              </div>
            </div>
          </div>
        }
      />
    </Suspense>
  );
}
