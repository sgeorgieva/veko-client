"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "../Loader";
import EcologyImage from "../../../../public/images/kia-ecology.png";
import UsedCarImage from "../../../../public/images/autotrade.png";

import "./servicesComponent.scss";

const EcologyComponent = dynamic(() => import("./EcologyComponent"), {
  suspense: true,
});
const UsedCarComponent = dynamic(() => import("./UsedCarComponent"), {
  suspense: true,
});
const HomeComponent = dynamic(() => import("../HomeComponent"), {
  suspense: true,
});
export default function ServicesComponent() {
  const router = useRouter();
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
                  <h1 className="pageHeader">Услуги</h1>
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
                  href="/services/ecology"
                  onClick={() => router.push("/services/ecology")}
                  children={<EcologyComponent />}
                  className={`${isMobile ? "" : "w-25 p-0"}`}
                >
                  <img src={EcologyImage.src} alt="ecology-image" />
                  <h5 className="fw-bold text-center text-uppercase pt-3">
                    Екология
                  </h5>
                </Link>
                <Link
                  href="/services/used-car"
                  onClick={() => router.push("/services/used-car")}
                  children={<UsedCarComponent />}
                  className={`${isMobile ? "" : "w-25 p-0 ms-5"}`}
                >
                  <img src={UsedCarImage.src} alt="used-car-image" />
                  <h5 className="fw-bold text-center text-uppercase pt-3">
                    Автооказион
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
