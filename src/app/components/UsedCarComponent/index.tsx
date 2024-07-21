"use client";

import { Suspense } from "react";
import { Icon } from "gestalt";
import Loader from "../../components/Loader";
import HomeComponent from "../HomeComponent";

import './usedCarComponent.scss';

export default function UsedCarComponent() {
  return (
    <Suspense fallback={<Loader />}>
      <HomeComponent
        isHomePage={false}
        component={
          <div className="contact-wrapper">
            <div className="title-contact">
              <h1 className="pageHeader mb-4">Автооказион</h1>
            </div>
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