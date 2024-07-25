"use client";

import { Suspense } from "react";
import Link from "next/link";
import dynamic from 'next/dynamic';
import Loader from "../Loader";
import { useRouter } from "next/navigation";
import BrandsImage from "../../../../public/images/brands.png";
import UsedCarImage from "../../../../public/images/autocenters.png";

import "./carDealershipComponent.scss";

const BrandsComponent = dynamic(() => import('./BrandsComponent'), { suspense: true });
const CarCentersComponent = dynamic(() => import('./CarCentersComponent'), { suspense: true });
const HomeComponent = dynamic(() => import('../HomeComponent'), { suspense: true });

export default function CarDealershipComponent() {
  const router = useRouter();

  return (
    <Suspense fallback={<Loader />}>
      <HomeComponent
        isHomePage={false}
        component={
          <div className="wrapper">
            <div className="title">
              <div className="row d-flex align-items-center">
                <div className="col-md-12">
                  <h1 className="pageHeader mb-3">Автомобилно представителство</h1>
                </div>
              </div>
            </div>
            <div className="description">
              <div className="row d-flex align-items-center py-4">
                <Link
                  href="/car-dealership/brands"
                  onClick={() => router.push("/car-dealership/brands")}
                  children={<BrandsComponent />}
                  className="p-0 w-25"
                >
                  <img src={BrandsImage.src} alt="ecology-image" />
                  <h5 className="fw-bold py-3 text-center text-uppercase">Марки</h5>
                </Link>
                <Link
                  href="/car-dealership/car-centers"
                  onClick={() => router.push("/car-dealership/car-centers")}
                  children={<CarCentersComponent />}
                  className="p-0 w-25 ms-5"
                >
                  <img src={UsedCarImage.src} alt="used-car-image" />
                  <h5 className="fw-bold py-3 text-center text-uppercase">Автоцентрове</h5>
                </Link>
              </div>
            </div>
          </div>
        }
      />
    </Suspense>
  );
}
