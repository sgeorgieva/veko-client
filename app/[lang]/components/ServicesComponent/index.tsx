"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Loader from "../Loader";
import UsedCarImage from "../../../../public/images/autotrade.png";
import RentACarImage from "../../../../public/images/rent-a-car.png";

import "./servicesComponent.scss";

const RentCarComponent = dynamic(() => import("./RentCarComponet"), {
  suspense: true,
});
const UsedCarComponent = dynamic(() => import("./UsedCarComponent"), {
  suspense: true,
});
const HomeComponent = dynamic(() => import("../HomeComponent/page"), {
  suspense: true,
});
export default function ServicesComponent({ translations, lang }) {
  const router = useRouter();
  const pathname = usePathname();
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
            <div className={`description ${isMobile ? "text-center" : ""}`}>
              <div
                className={`d-flex align-items-center flex-nowrap py-4 ${
                  isMobile ? "flex-column" : "row"
                }`}
              >
                <Link
                  href={`${pathname}/used-car`}
                  onClick={() => router.push(`${pathname}/used-car`)}
                  children={<UsedCarComponent lang={lang} />}
                  className={`${isMobile ? "" : "w-25 ms-3"}`}
                >
                  <img src={UsedCarImage.src} alt="used-car-image" />
                  <h5 className="fw-bold text-uppercase pt-3 text-center">
                    {translations.used_cars}
                  </h5>
                </Link>
                <Link
                  href={`${pathname}/rent-a-car`}
                  onClick={() => router.push(`${pathname}/rent-a-car`)}
                  children={<RentCarComponent />}
                  className={`${isMobile ? "" : "w-25 text-center"}`}
                >
                  <img src={RentACarImage.src} alt="ecology-image" />
                  <h5 className="fw-bold text-uppercase pt-3 text-center">
                    {translations.rent_a_car}
                  </h5>
                  <h5 className="fw-bold text-uppercase text-center">
                    {translations.comming_soon}
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
