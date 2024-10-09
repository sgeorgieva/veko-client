"use client";

import { Icon, Image } from "gestalt";
import Link from "next/link";
import dynamic from "next/dynamic";
import HomeComponent from "../HomeComponent/page";
import VekoProductsLogoImage from "../../../../public/images/veko_products-logo.webp";
import VekoProductsOthersLogoImage from "../../../../public/images/battery.png";
// import OilImage from "../../../../public/images/oil.png";
// import AutoConsumablesImage from "../../../../public/images/auto-consumables.png";
// import BatteryImage from "../../../../public/images/battery.png";
// import LiquidsImage from "../../../../public/images/liquids.png";

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
  const [isProductsExpanded, setProductsExpanded] = useState(false);
  const [isOtherProductsExpanded, setOtherProductsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  const handleProductsExpanded = () => {
    setProductsExpanded(!isProductsExpanded);
  };

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
                <h1 className="pageHeader pt-3">
                  {translationsNavigation.distribution_with}{" "}
                  {translationsNavigation.auto_consumables}
                </h1>
                <hr />
              </div>
            </div>
          </div>
          <h6>
            {translations.text}
            <Link
              href="https://veko-shop.com"
              className="fw-bold veko-link"
              target="_blank"
            >
              {" "}
              {translations.link}
            </Link>
            .
          </h6>
          <div className={`d-flex pt-4 ${isMobile ? "flex-column" : ""}`}>
            {/* <Link
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
            </Link> */}

            <div
              className="d-flex flex-column w-25 ps-4"
              onClick={handleProductsExpanded}
            >
              <Image
                src={VekoProductsLogoImage.src}
                alt="veko-products-logo-image"
              />
              <h5 className="fw-bold text-uppercase text-center py-3">
                {translations.veko_products_title}
              </h5>
            </div>
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
          {isProductsExpanded && (
            <div className="d-flex flex-column row">
              <Link
                href="https://veko-products.com"
                className={`${isMobile ? "" : "col-md-4 align-self-start"}`}
              >
                <h5 className="d-flex fw-bold text-uppercase pt-3">
                  {translationsNavigation.antifreezes}
                  <span className="ps-1">
                    <Icon icon="visit" color="dark" />
                  </span>
                </h5>
              </Link>
              <Link
                href="https://veko-products.com"
                className={`${isMobile ? "" : "col-md-4 align-self-start"}`}
              >
                <h5 className="d-flex fw-bold text-uppercase pt-3">
                  {translationsNavigation.winter_products}
                  <span className="ps-1">
                    <Icon icon="visit" color="dark" />
                  </span>
                </h5>
              </Link>
              <Link
                href="https://veko-products.com"
                className={`${isMobile ? "" : "col-md-4 align-self-start"}`}
              >
                <h5 className="d-flex fw-bold text-uppercase pt-3">
                  {translationsNavigation.winter_wiper_fluid}
                  <span className="ps-1">
                    <Icon icon="visit" color="dark" />
                  </span>
                </h5>
              </Link>
              <Link
                href="https://veko-products.com"
                className={`${isMobile ? "" : "col-md-4 align-self-start"}`}
              >
                <h5 className="d-flex fw-bold text-uppercase pt-3">
                  {translationsNavigation.summer_wiper_fluid}
                  <span className="ps-1">
                    <Icon icon="visit" color="dark" />
                  </span>
                </h5>
              </Link>
              <Link
                href="https://veko-products.com"
                className={`${isMobile ? "" : "col-md-6 align-self-start"}`}
              >
                <h5 className="d-flex fw-bold text-uppercase pt-3">
                  {translationsNavigation.exterior_car_maintenance}
                  <span className="ps-1">
                    <Icon icon="visit" color="dark" />
                  </span>
                </h5>
              </Link>
              <Link
                href="https://veko-products.com"
                className={`${isMobile ? "" : "col-md-4 align-self-start"}`}
              >
                <h5 className="d-flex fw-bold text-uppercase pt-3">
                  {translationsNavigation.car_shampoos}
                  <span className="ps-1">
                    <Icon icon="visit" color="dark" />
                  </span>
                </h5>
              </Link>
              <Link
                href="https://veko-products.com"
                className={`${isMobile ? "" : "col-md-6 align-self-start"}`}
              >
                <h5 className="d-flex fw-bold text-uppercase pt-3">
                  {translationsNavigation.interior_car_maintenance}
                  <span className="ps-1">
                    <Icon icon="visit" color="dark" />
                  </span>
                </h5>
              </Link>
              <Link
                href="https://veko-products.com"
                className={`${isMobile ? "" : "col-md-6 align-self-start"}`}
              >
                <h5 className="d-flex fw-bold text-uppercase pt-3">
                  {translationsNavigation.additives}
                  <span className="ps-1">
                    <Icon icon="visit" color="dark" />
                  </span>
                </h5>
              </Link>
              <Link
                href="https://veko-products.com"
                className={`${isMobile ? "" : "col-md-4 align-self-start"}`}
              >
                <h5 className="d-flex fw-bold text-uppercase pt-3">
                  {translationsNavigation.hand_care}
                  <span className="ps-1">
                    <Icon icon="visit" color="dark" />
                  </span>
                </h5>
              </Link>
              <Link
                href="https://veko-products.com"
                className={`${isMobile ? "" : "col-md-4 align-self-start"}`}
              >
                <h5 className="d-flex fw-bold text-uppercase pt-3">
                  {translationsNavigation.sins}
                  <span className="ps-1">
                    <Icon icon="visit" color="dark" />
                  </span>
                </h5>
              </Link>
              <Link
                href="https://veko-products.com"
                className={`${isMobile ? "" : "col-md-4 align-self-start"}`}
              >
                <h5 className="d-flex fw-bold text-uppercase pt-3">
                  {translationsNavigation.others}
                  <span className="ps-1">
                    <Icon icon="visit" color="dark" />
                  </span>
                </h5>
              </Link>
            </div>
          )}
          {isOtherProductsExpanded && (
            <div className="d-flex flex-column row">
              <Link
                href="/veko-products/oils"
                children={<OilsComponent />}
                className={`${isMobile ? "" : "col-md-4 align-self-center"}`}
              >
                <h5 className="d-flex fw-bold text-uppercase pt-3">
                  {translationsNavigation.oils}
                  <span className="ps-1">
                    <Icon icon="visit" color="dark" />
                  </span>
                </h5>
              </Link>
              <Link
                href="/veko-products/accumulators"
                children={<AccumulatorsComponent />}
                className={`${isMobile ? "" : "col-md-4 align-self-center"}`}
              >
                <h5 className="d-flex fw-bold text-uppercase pt-3">
                  {translationsNavigation.accumulators}
                  <span className="ps-1">
                    <Icon icon="visit" color="dark" />
                  </span>
                </h5>
              </Link>
              <Link
                href="/veko-products/auto-consumables"
                children={<AutoConsumablesComponent />}
                className={`${isMobile ? "" : "col-md-4 align-self-center"}`}
              >
                <h5 className="d-flex fw-bold text-uppercase pt-3 text-center">
                  {translationsNavigation.autoconsumables}
                  <span className="ps-1">
                    <Icon icon="visit" color="dark" />
                  </span>
                </h5>
              </Link>
              <Link
                href="/veko-products/special-liquids"
                children={<SpecialLiquidsComponent />}
                className={`${isMobile ? "" : "col-md-4 align-self-center"}`}
              >
                <h5 className="d-flex fw-bold text-uppercase pt-3 text-center">
                  {translationsNavigation.special_liquids}
                  <span className="ps-1">
                    <Icon icon="visit" color="dark" />
                  </span>
                </h5>
              </Link>
            </div>
          )}
        </div>
      }
    />
  );
}
