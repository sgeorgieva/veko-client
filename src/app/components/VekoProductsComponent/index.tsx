"use client";

import Link from "next/link";
import HomeComponent from "../HomeComponent";

import "./vekoProductsComponent.scss";

export default function VekoProductsComponent() {
  return (
    <>
      <HomeComponent
        isHomePage={false}
        component={
          <div className="wrapper">
            <div className="title">
              <div className="row d-flex align-items-center">
                <div className="col-md-12">
                  <h1 className="pageHeader">Veko продукти</h1>
                </div>
                <hr />
                <h6>
                  Фирмата e с предмет на дейност производство на антифризи,
                  течности за чистачки, добавки и подобрители за горива,
                  автокозметика и препарати за бита. Разполага със собствена
                  модерна лаборатория, в която се осъществява ежедневен входящ
                  контрол на суровините и изходящ контрол на готовата продукция.
                  Производството е съобразено с европейските стандарти за
                  качество, безопасност на условията на труд и опазване на
                  околната среда. За повече информация, може да посетите
                  следният
                  <Link
                    href="https://www.veko-products.com/"
                    className="fw-bold veko-link"
                    target="_blank"
                  >
                    {" "}
                    линк
                  </Link>
                  .
                </h6>
              </div>
            </div>
          </div>
        }
      />
    </>
  );
}
