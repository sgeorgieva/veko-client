"use client";

import { Suspense, useEffect, useState } from "react";
import { Image } from "gestalt";
import Loader from "../../components/Loader";
import HomeComponent from "../HomeComponent/page";
import BulstradInsuranceLogo from "../../../../public/images/bulstrad_insurance-logo.png";
import ArmeecInsuranceLogo from "../../../../public/images/armeec_insurance-logo.png";

import "./insuranceComponent.scss";

export default function InsuranceComponent({ title, translations }) {
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
        <>
          {isMobile ? (
            <>
              <div className="insurance-wrapper">
                <div className="title-insurance">
                  <h1 className="pageHeader pt-3">{title}</h1>
                </div>
                <hr />
                <div className="d-flex">
                  <ol>
                    <li>{translations.car_insurance}</li>
                    <li>
                      {translations.insurance_for_your}
                      <ul>
                        <li>{translations.home}</li>
                        <li>{translations.office}</li>
                        <li>{translations.enterprises_and_warehouse}</li>
                        <li>{translations.construction_site}</li>
                        <li>{translations.small_and_medium_business}</li>
                      </ul>
                    </li>
                    <li>{translations.travel_insurances}</li>
                    <li>{translations.transport_insurances}</li>
                  </ol>
                </div>
                <div className="d-flex align-items-center insurance-images-wrapper flex-column">
                  <Image src={BulstradInsuranceLogo.src} />
                  <Image src={ArmeecInsuranceLogo.src} />
                </div>
              </div>
            </>
          ) : (
            <div className="insurance-wrapper">
              <div className="title-insurance">
                <h1 className="pageHeader pt-3">{title}</h1>
              </div>
              <hr />
              <div className="d-flex">
                <ol>
                  <li>{translations.car_insurance}</li>
                  <li>
                    {translations.insurance_for_your}
                    <ul>
                      <li>{translations.home}</li>
                      <li>{translations.office}</li>
                      <li>{translations.enterprises_and_warehouse}</li>
                      <li>{translations.construction_site}</li>
                      <li>{translations.small_and_medium_business}</li>
                    </ul>
                  </li>
                  <li>{translations.travel_insurances}</li>
                  <li>{translations.transport_insurances}</li>
                </ol>
                <div className="d-flex align-items-center insurance-images-wrapper">
                  <Image src={BulstradInsuranceLogo.src} />
                  <Image src={ArmeecInsuranceLogo.src} />
                </div>
              </div>
            </div>
          )}
        </>
      }
    />
  );
}
