"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Loader from "../../Loader";
import VekoOilImage from "../../../../../public/images/VEKO-products_logo.png";

import "./specialLiquids.scss";
import HomeComponent from "../../HomeComponent";

// const HomeComponent = dynamic(() => import('../../HomeComponent'), { suspense: true });

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
            <div className="row d-flex align-items-baseline py-4 flex-nowrap text-center">
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
