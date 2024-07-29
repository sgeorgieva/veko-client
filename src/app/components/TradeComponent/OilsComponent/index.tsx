"use client";

import { Suspense } from "react";
import Link from "next/link";
import Loader from "../../Loader";
import HomeComponent from "../../HomeComponent";
import PristaOilImage from "../../../../../public/images/prista-oil-com.png";
import LukoilImage from "../../../../../public/images/LUK_OIL_Logo.png";
import ValvolineImage from "../../../../../public/images/Valvoline_company_logo.png";
import CyclonLpsImage from "../../../../../public/images/cyclon-logo.png";
import TexacoImage from "../../../../../public/images/Texaco_logo.png";
import MobanolImage from "../../../../../public/images/mabanol-logo-1.png";
import MobilImage from "../../../../../public/images/mobil-logo.png";
import ShellImage from "../../../../../public/images/Shell-logo.png";
import CastrolImage from "../../../../../public/images/castrol-logo-300x300.png";

import "./oilsComponent.scss";

export default function OilsComponent() {
  return (
    <Suspense fallback={<Loader />}>
      <HomeComponent
        isHomePage={false}
        component={
          <div className="oils-wrapper">
            <div className="title-contact">
              <h1 className="pageHeader mb-4">Масла</h1>
            </div>
            <hr />
            <h5>Официален ДИСТРИБУТОР на:</h5>
            <div className="row d-flex align-items-baseline py-4 flex-nowrap text-center">
              <Link
                href="https://www.prista-oil.com/"
                className="w-25"
                target="_blank"
              >
                <img src={PristaOilImage.src} alt="prista-oil-image" />
              </Link>
              <Link
                href="https://euro-oil.eu/Lukoil-produktov-katalog/"
                className="w-25"
                target="_blank"
              >
                <img src={LukoilImage.src} alt="lukoil-image" />
              </Link>
              <Link
                href="https://www.valvolineglobal.com/en-eur/"
                className="w-25"
                target="_blank"
              >
                <img src={ValvolineImage.src} alt="valvoline-image" />
              </Link>
              <Link
                href="https://www.cyclon-lpc.com/en/lubricants-and-environment/"
                className="w-25"
                target="_blank"
              >
                <img src={CyclonLpsImage.src} alt="cyclon-image" />
              </Link>
            </div>
            <div className="row d-flex align-items-baseline py-4 flex-nowrap text-center">
              <Link
                href="https://www.texacolubricants.com/"
                className="w-25"
                target="_blank"
              >
                <img src={TexacoImage.src} alt="texaco-image" />
              </Link>
              <Link
                href="https://euro-oil.eu/wp-content/uploads/2021/09/Mabanol-product-range_2021_hr.pdf"
                className="w-25  "
                target="_blank"
              >
                <img src={MobanolImage.src} alt="mobanol-image" />
              </Link>
              <Link
                href="https://www.mobil.com/en"
                className="w-25"
                target="_blank"
              >
                <img src={MobilImage.src} alt="mobil-image" />
              </Link>
              <Link
                href="https://euro-oil.eu/shell/"
                className="w-25"
                target="_blank"
              >
                <img src={ShellImage.src} alt="shell-image" />
              </Link>
            </div>
            <div className="row d-flex align-items-baseline py-4 flex-nowrap text-center">
              <Link
                href="https://www.castrol.com/"
                className="w-25"
                target="_blank"
              >
                <img src={CastrolImage.src} alt="castrol-image" />
              </Link>
            </div>
          </div>
        }
      />
    </Suspense>
  );
}
