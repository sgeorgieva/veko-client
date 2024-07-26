"use client";

import { Suspense } from "react";
import { Image } from "gestalt";
import Loader from "../../Loader";
import HomeComponent from "../../HomeComponent";

import CroppedKiaImage from "../../../../../public/images/cropped-kia-motors.png";

import './usedCarComponent.scss';

export default function UsedCarComponent() {
  return (
    <Suspense fallback={<Loader />}>
      <HomeComponent
        isHomePage={false}
        component={
          <div className="used-car-wrapper mt-3">
            <div className="title-contact">
              <h1 className="pageHeader mb-4">Автооказион</h1>
              <Image
                alt="kia-cropped-image"
                src={CroppedKiaImage.src} 
              />
            </div>
            <hr />
            <div className="description-contact pageContent">
              <div className="row">
              </div>
            </div>
          </div>
        }
      />
    </Suspense>
  );
}