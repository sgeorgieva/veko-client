"use client";

import { Suspense, useEffect, useState } from "react";
import Loader from "../../components/Loader";
import HomeComponent from "../HomeComponent";

import "./aboutComponent.scss";

export default function AboutComponent() {
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
              <h1 className="pageHeader mb-4">За нас</h1>
            </div>
            <div className="description-contact pageContent">
              <p>
                &ldquo;Веко ойл&ldquo; ЕООД е основана на 19 февруари 1997 г. в
                гр. Русе с основен предмет на дейност продажба на петролни
                продукти, химикали, автоаксесоари и автокозметика. Фирмата
                развива и автосервизна дейност – от профилактика до основен
                ремонт на леки и лекотоварни автомобили. &ldquo;Веко ойл&ldquo;
                ЕООД е основен дистрибутор за Централна и Североизточна България
                на световноизвестни марки петролни продукти, както и на
                продуктите на различни реномирани производители и вносители.
              </p>
              <p>
                От 2007 г. &ldquo;Веко ойл&ldquo; ЕООД е официален представител
                на автомобилните марки &ldquo;SUBARU&ldquo; и &ldquo;KIA&ldquo;
                -нови автомобили. Нашата стратегия е насочена към внимателно и
                целенасочено подбиране на доставчици с доказано име на вътрешния
                и международния пазар. По този начин вярваме, че предлагаме на
                клиентите и партнъорите си само сертифицирани, качествени
                продукти и услуги. Успешното развитие на фирмата ни през
                годините се и дължи на внимателното изграждане на екип от
                професионалисти, прилагащи иновативни решения в областта на
                предлагането на стоки и услуги, безопасност и опазване на
                заобикалящата ни среда.
              </p>
              <p className="fw-bold text-uppercase">
                Ние не продаваме просто стоки, а удовлетворяваме конкретни
                потребности.
              </p>
              <p
                className={`about-image ${
                  isMobile ? "mobile-about-image" : ""
                }`}
              />
            </div>
          </div>
        }
      />
    </Suspense>
  );
}
