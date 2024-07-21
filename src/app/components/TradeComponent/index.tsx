"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import HomeComponent from "../HomeComponent";
import EcologyComponent from "../EcologyComponent";
import UsedCarComponent from "../UsedCarComponent";
import OilImage from "../../../../public/images/oil.png";
import AutoConsumablesImage from "../../../../public/images/auto-consumables.png";
import BatteryImage from "../../../../public/images/battery.png";
import LiquidsImage from "../../../../public/images/liquids.png";

import "./TradeComponent.scss";

export default function TradeComponent() {
  const router = useRouter();

  return (
    <>
      <HomeComponent
        isHomePage={false}
        component={
          <div className="wrapper">
            <div className="title">
              <div className="row d-flex align-items-center">
                <div className="col-md-12">
                  <h1 className="pageHeader">Търговия</h1>
                </div>
              </div>
            </div>
            <div className="description">
              <div className="row d-flex align-items-center py-4 flex-nowrap">
                <Link
                  href="/trade/oils"
                  onClick={() => router.push("/trade/oils")}
                  children={<EcologyComponent />}
                  className="w-25 p-0"
                >
                  <img src={OilImage.src} alt="ecology-image" />
                  <h5 className="fw-bold text-center text-uppercase pt-3">Масла</h5>
                </Link>
                <Link
                  href="/trade/accumulators"
                  onClick={() => router.push("/trade/accumulators")}
                  children={<UsedCarComponent />}
                  className="w-25 p-0 mx-5"
                >
                  <img src={BatteryImage.src} alt="used-car-image" />
                  <h5 className="fw-bold text-center text-uppercase pt-3">Акумулатори</h5>
                </Link>
                <Link
                  href="/trade/auto-consumables"
                  onClick={() => router.push("/trade/auto-consumables")}
                  children={<UsedCarComponent />}
                  className="w-25 p-0"
                >
                  <img src={AutoConsumablesImage.src} alt="used-car-image" />
                  <h5 className="fw-bold text-center text-uppercase pt-3">Автоконсумативи</h5>
                </Link>
                <Link
                  href="/trade/speical-liquids"
                  onClick={() => router.push("/trade/speical-liquids")}
                  children={<UsedCarComponent />}
                  className="w-25 p-0 ms-5"
                >
                  <img src={LiquidsImage.src} alt="used-car-image" />
                  <h5 className="fw-bold text-center text-uppercase pt-3">Специални течности</h5>
                </Link>
              </div>
            </div>
          </div>
        }
      />
    </>
  );
}