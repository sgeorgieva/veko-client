"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Image } from "gestalt";
import HomeComponent from "../../HomeComponent/page";
import KiaRuseFirstImage from "../../../../../public/images/kia_ruse-first.png";
import KiaRuseSecondImage from "../../../../../public/images/kia_ruse-second.png";
import KiaGabrovoImage from "../../../../../public/images/kia_gabrovo.png";
import KiaVelikoTurnovoImage from "../../../../../public/images/kia_veliko_turnovo.png";
import KiaLogo from "../../../../../public/images/Kia.avif";
import SubaruLogo from "../../../../../public/images/subaru_logo.webp";
import TalariaLogo from "../../../../../public/images/talaria-logo.webp";
import DongFengLogo from "../../../../../public/images/dongfeng-logo.png";
import TenaxLogo from "../../../../../public/images/tenax_logo.webp";

import "./carCentersComponent.scss";

export default function CarCentersComponent({ title, translations }) {
  const [isMobile, setIsMobile] = useState(false);
  let ref = useRef([]);
  const [isExpandedRuseFirst, setIsExpandedRuseFirst] = useState(false);
  const [isExpandedRuseSecond, setIsExpandedRuseSecond] = useState(false);
  const [isExpandedGabrovo, setIsExpandedGabrovo] = useState(false);
  const [isExpandedVelikoTurnovo, setIsExpandedVelikoTurnovo] = useState(false);

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  const handleExpandKiaRuseFirst = (e: any): void => {
    setIsExpandedRuseFirst(!isExpandedRuseFirst);
    setIsExpandedRuseSecond(false);
    setIsExpandedGabrovo(false);
    setIsExpandedVelikoTurnovo(false);
  };

  const handleExpandKiaRuseSecond = (e: any): void => {
    setIsExpandedRuseSecond(!isExpandedRuseSecond);
    setIsExpandedRuseFirst(false);
    setIsExpandedGabrovo(false);
    setIsExpandedVelikoTurnovo(false);
  };

  const handleExpandKiaGabrovo = (e: any): void => {
    setIsExpandedGabrovo(!isExpandedGabrovo);
    setIsExpandedRuseFirst(false);
    setIsExpandedRuseSecond(false);
    setIsExpandedVelikoTurnovo(false);
  };

  const handleExpandKiaVelikoTurnovo = (e: any): void => {
    setIsExpandedVelikoTurnovo(!isExpandedVelikoTurnovo);
    setIsExpandedGabrovo(false);
    setIsExpandedRuseFirst(false);
    setIsExpandedRuseSecond(false);
  };

  return (
    <HomeComponent
      isHomePage={false}
      component={
        <div className="contact-wrapper">
          <div className="title-contact">
            <h1 className="pageHeader pb-4">{title}</h1>
          </div>
          <div className="description d-flex justify-content-around">
            <div onClick={handleExpandKiaRuseFirst}>
              <Image src={KiaRuseFirstImage.src} alt="" />
              <h5 className="d-flex flex-column fw-bold text-uppercase py-3 text-center">
                <span>{translations.auto_center_beko}</span>
                <span>{translations.central_office}</span>
              </h5>
              {isExpandedRuseFirst && (
                <div className="images-wrapper">
                  <p
                    className="item-text"
                    ref={(ele) => (ref.current = ele)}
                    id="element1"
                  >
                    {translations.auto_center_ruse_text}
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <Image src={KiaLogo.src} />
                    <Image src={SubaruLogo.src} />
                    <Image src={TalariaLogo.src} />
                  </div>
                </div>
              )}
            </div>
            <div onClick={handleExpandKiaRuseSecond}>
              <Image src={KiaRuseSecondImage.src} alt="" />
              <h5 className="d-flex flex-column fw-bold text-uppercase py-3 text-center">
                <span>{translations.motor_show_beko}</span>
              </h5>
              {isExpandedRuseSecond && (
                <div className="images-wrapper">
                  <p className="item-text" ref={ref} id="element2">
                    {translations.motor_show_text}
                  </p>
                  <div className="d-flex align-items-center justify-content-between pt-4">
                    <Image src={DongFengLogo.src} />
                    <Image src={TenaxLogo.src} />
                    <Image src={TalariaLogo.src} />
                  </div>
                </div>
              )}
            </div>
            <div onClick={handleExpandKiaGabrovo}>
              <Image src={KiaGabrovoImage.src} alt="" />
              <h5 className="d-flex flex-column fw-bold text-uppercase py-3 text-center">
                <span>{translations.auto_center_beko}</span>
                <span>{translations.auto_center_beko_gabrovo}</span>
              </h5>
              {isExpandedGabrovo && (
                <div className="images-wrapper">
                  <p className="item-text" ref={ref} id="element2">
                    {translations.auto_center_gabrovo_text}
                  </p>
                  <div className="d-flex align-items-center justify-content-between pt-4">
                    <Image src={KiaLogo.src} />
                    <Image src={SubaruLogo.src} />
                    <Image src={DongFengLogo.src} />
                    <Image src={TenaxLogo.src} />
                    <Image src={TalariaLogo.src} />
                  </div>
                </div>
              )}
            </div>
            <div onClick={handleExpandKiaVelikoTurnovo}>
              <Image src={KiaVelikoTurnovoImage.src} alt="" />
              <h5 className="d-flex flex-column fw-bold text-uppercase py-3 text-center">
                <span>{translations.motor_show_beko}</span>
                <span>{translations.motor_show_veliko_turnovo}</span>
              </h5>
              {isExpandedVelikoTurnovo && (
                <div className="images-wrapper">
                  <p className="item-text" ref={ref} id="element2">
                    {translations.motor_show_veliko_turnovo_text}
                  </p>
                  <div className="d-flex justify-content-between align-items-center pt-4">
                    <Image src={SubaruLogo.src} />
                    <Image src={DongFengLogo.src} />
                    <Image src={TalariaLogo.src} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      }
    />
  );
}
