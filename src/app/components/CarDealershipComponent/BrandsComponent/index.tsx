"use client";

import { Suspense, useEffect, useState } from "react";
import Loader from "../../Loader";
import HomeComponent from "../../HomeComponent";
import Link from "next/link";

import "./brandsComponent.scss";

export default function BrandsComponent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <HomeComponent
        isHomePage={false}
        component={
          <div className="contact-wrapper">
            <div className="title-contact">
              <div className="row d-flex align-items-center">
                <div className="col-md-8">
                  <h1 className="pageHeader">Марки</h1>
                </div>
                <div className="col-md-4">
                  <div className="col-md-3">
                    <span className="cars-image kia-logo" />
                  </div>
                </div>
              </div>
            </div>
            <div className="description-contact pageContent">
              <div className="row">
                <div className="col-md-9">
                  <h6>
                    &quot;ВЕКО ОЙЛ&quot; ЕООД е официален дилър на автомобилите
                    с марка{" "}
                    <Link href="https://kiaruse.com" target="_blank">
                      <span className="fw-bolder">&quot;Kia&quot;</span>
                    </Link>{" "}
                    за градовете Русе, Габрово и Велико Търново, както и на
                    автомобилите с марка SUBARU за Северна България. През 2019
                    г. фирмата става официален представител на южнокорейския
                    автомобилен производител KIA за Русе и региона. В двата
                    града има изградени модерни сгради с шоурум, предлагащ
                    всички модели на марките КИА и Субару и сервизи, оборудвани
                    с най-съвременна техника за профилактика, обслужване и
                    ремонт.
                  </h6>
                  <div className="row"></div>
                </div>
                <div className="col-md-3">
                  <span
                    className={`cars-image ${
                      isMobile ? "kia-mobile-image" : "kia-image"
                    }`}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <span
                    className={`cars-image subaru-logo ${
                      isMobile ? "subaru-mobile-logo" : ""
                    }`}
                  />
                </div>
                <div className="col-md-12">
                  <p>
                    SUBARU непрекъснато се стреми да произвежда автомобили,
                    които предлагат отлични нива на безопасност при всички пътни
                    условия, отлична динамика и интелигентни асистенти при
                    движение. Тази е в основата на всеки автомобил, който SUBARU
                    произвежда. Системата за задвижване на всички колела
                    Symmetrical All Wheel Drive на Марката е в основата на тази
                    концепция. Задвижването на всички колела е проектирано така,
                    че да бъде идеално симетрично с нисък център на тежестта,
                    като благодарение на хоризонтално разположения Subaru Boxer
                    двигател, Японската автомобилна марка SUBARU е лидер в
                    бранша от 65 години. От 40 години се слави със своите
                    изключително надеждни боксерови двигатели, а от повече от 30
                    години е символ на високата проходимост благодарение на
                    патентованата система със симетрично задвижване на четирите
                    колела.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <span
                    className={`cars-image subaru-image ${
                      isMobile ? "subaru-mobile-image" : ""
                    }`}
                  />
                </div>
              </div>
              <div className="row text-end">
                <div className="col-md-12">
                  <span className="cars-image dongfeng-logo" />
                </div>
                <p>
                  Шоурумът е вносител на автомобили на известната марка
                  Dongfeng. Тя редлага качествени, сертифицирани за ЕС продукти
                  с модерен европейски дизайн, съвременни технологии и системи
                  за безопасност, с безпрецедентна гаранция за пазара.
                  Пътническите превозни средства обхващат различни видове
                  модели, включително седан, SUV, MPV, мини автомобил и т.н., а
                  високопроходимите специални превозни средства за движение
                  извън пътя обхващат пустинни превозни средства, офроуд камиони
                  със задвижване на всички колела и други. Превозните средства с
                  нови енергии обхващат различни видове хибридни превозни
                  средства, BEV, превозни средства на природен газ и т.н.
                </p>
              </div>
              <div className="row d-flex align-items-center mt-5">
                <div className="col-md-2">
                  <span className="cars-image gaz-logo" />
                </div>
                <div className="col-md-8">
                  Като официален дилър на Talaria, &quot;ВЕКО ОЙЛ&quot; ЕООД
                  вярва в електрическите превозни средства като бъдещето на
                  мобилността. Нашата мисия е да предложим на клиентите
                  най-доброто от света на електрическите мотоциклети, като
                  същевременно осигурим безкомпромисно качество и професионално
                  обслужване.
                </div>
                <div className="col-md-2">
                  <span className="cars-image talaria-logo" />
                </div>
              </div>
            </div>
          </div>
        }
      />
    </Suspense>
  );
}
