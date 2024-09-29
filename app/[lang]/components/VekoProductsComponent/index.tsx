"use client";

import { Image } from "gestalt";
import Link from "next/link";
import dynamic from "next/dynamic";
import HomeComponent from "../HomeComponent/page";
import VekoProductsLogoImage from "../../../../public/images/veko_products-logo.webp";
import VekoProductsOthersLogoImage from "../../../../public/images/battery.png";
import OilImage from "../../../../public/images/oil.png";
import AutoConsumablesImage from "../../../../public/images/auto-consumables.png";
import BatteryImage from "../../../../public/images/battery.png";
import LiquidsImage from "../../../../public/images/liquids.png";

import "./vekoProductsComponent.scss";
import { useEffect, useState } from "react";

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
export default function VekoProductsComponent({
  title,
  translations,
  translationsNavigation,
}) {
  const [isOtherProductsExpanded, setOtherProductsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  const handleOtherProductsExpanded = () => {
    setOtherProductsExpanded(!isOtherProductsExpanded);
  };

  return (
    <HomeComponent
      isHomePage={false}
      component={
        <div className="wrapper">
          <div className="title">
            <div className="row d-flex align-items-center">
              <div className="col-md-12">
                <h1 className="pageHeader">{title}</h1>
                <hr />
              </div>
            </div>
          </div>
          <h6>
            {translations.text}
            <Link
              href="https://www.veko-products.com/"
              className="fw-bold veko-link"
              target="_blank"
            >
              {" "}
              {translations.link}
            </Link>
            .
          </h6>
          <div className="d-flex pt-4">
            <Link
              href="https://www.veko-products.com/%d0%bf%d1%80%d0%be%d0%b4%d1%83%d0%ba%d1%82%d0%b8/"
              className="fw-bold veko-link"
              target="_blank"
            >
              <div className="d-flex flex-column">
                <Image
                  src={VekoProductsLogoImage.src}
                  alt="veko-products-logo-image"
                />
                <h5 className="fw-bold text-uppercase text-center py-3">
                  {translations.veko_products_title}
                </h5>
              </div>
            </Link>
            <div
              className="d-flex flex-column w-25 ps-4"
              onClick={handleOtherProductsExpanded}
            >
              <Image
                src={VekoProductsOthersLogoImage.src}
                alt="veko-products-others-logo-image"
              />
              <h5 className="fw-bold text-uppercase text-center py-3">
                {translations.veko_products_others_titles}
              </h5>
            </div>
          </div>
          {isOtherProductsExpanded && (
            <div className="d-flex">
              <Link
                href="/veko-products/oils"
                children={<OilsComponent />}
                className={`${isMobile ? "" : "w-25 p-0"}`}
              >
                <img src={OilImage.src} alt="ecology-image" />
                <h5 className="fw-bold text-uppercase pt-3 text-center">
                  {translationsNavigation.oils}
                </h5>
              </Link>
              <Link
                href="/veko-products/accumulators"
                children={<AccumulatorsComponent />}
                className={`${isMobile ? "" : "w-25 mx-3 p-0"}`}
              >
                <img src={BatteryImage.src} alt="accumulators-image" />
                <h5 className="fw-bold text-uppercase pt-3 text-center">
                  {translationsNavigation.accumulators}
                </h5>
              </Link>
              <Link
                href="/veko-products/auto-consumables"
                children={<AutoConsumablesComponent />}
                className={`${isMobile ? "" : "w-25 p-0"}`}
              >
                <img
                  src={AutoConsumablesImage.src}
                  alt="auto-consumables-image"
                />
                <h5 className="fw-bold text-uppercase pt-3 text-center">
                  {translationsNavigation.autoconsumables}
                </h5>
              </Link>
              <Link
                href="/veko-products/special-liquids"
                children={<SpecialLiquidsComponent />}
                className={`${isMobile ? "" : "w-25 ms-3 p-0"}`}
              >
                <img src={LiquidsImage.src} alt="special-liquids-image" />
                <h5 className="fw-bold text-uppercase pt-3 text-center">
                  {translationsNavigation.special_liquids}
                </h5>
              </Link>
            </div>
          )}
        </div>
      }
    />
  );
}
