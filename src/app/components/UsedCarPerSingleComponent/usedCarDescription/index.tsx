"use client";

import { Suspense } from "react";
import Loader from "../../Loader";
import HomeComponent from "../../HomeComponent";

import "./usedCarDescription.scss";
export default function UsedCarDescription() {
  return (
    <Suspense fallback={<Loader />}>
      <HomeComponent
        isHomePage={false}
        component={
          <>
            <div className="contact-wrapper">
              <div className="d-flex align-items-center justify-content-between title-contact">
                <h1 className="d-flex pageHeader align-items-center justify-content-between mb-4">
                  Audi A3 2.0
                </h1>
              </div>
            </div>
          </>
        }
      />
    </Suspense>
  );
}
