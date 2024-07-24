"use client";

import { Suspense } from "react";
import Link from "next/link";
import Loader from "../../Loader";
import HomeComponent from "../../HomeComponent";
import VekoOilImage from "../../../../../public/images/VEKO-products_logo.png";

import "./specialLiquids.scss";

export default function SpecialLiquidsComponent() {
  return (
    <Suspense fallback={<Loader />}>
      <HomeComponent
        isHomePage={false}
        component={
          <div className="auto-consumables-wrapper">
            <div className="title-contact">
              <h1 className="pageHeader mb-4">Специални течности</h1>
            </div>
            <hr />
            <h5>Официален ДИСТРИБУТОР на:</h5>
            <div className="row d-flex align-items-baseline py-4 flex-nowrap">
              <Link
                href="https://veko-shop.com/"
                className="w-25"
                target="_blank"
              >
                <img src={VekoOilImage.src} alt="veko-oil-image" />
              </Link>
            </div>
          </div>
        }
      />
    </Suspense>
  );
}