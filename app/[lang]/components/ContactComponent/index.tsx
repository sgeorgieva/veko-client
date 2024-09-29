"use client";

import { useEffect, useState } from "react";
import HomeComponent from "../HomeComponent/page";
import ContactFormComponent from "../ContactFormComponent";
import LocationsComponents from "../LocationsComponent";
import { MapComponent } from "../MapComponent";
import { MapProvider } from "../../../../app/providers/map-provider";

import "./contactComponent.scss";

export default function ContactComponent({ translations }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  return (
    <HomeComponent
      isHomePage={false}
      component={
        <div className="contact-wrapper">
          <div className="title-contact">
            <h1 className="d-flex pageHeader align-items-center justify-content-start mb-4">
              {translations.title}
            </h1>
          </div>
          <div className="row">
            <div className={`location col-md-6 ${isMobile ? "py-4" : ""}`}>
              <LocationsComponents
                title={translations.base_name_ruse}
                message={`${translations.long_address_ruse}`}
                statusMessage={translations.name_ruse}
                component={
                  <MapProvider>
                    <MapComponent
                      hrefLink="https://www.google.com/maps/embed/v1/place?key=AIzaSyAwyOjplXnP6-JJMY8_ZymlBUGbuberxkE
    &q=KIA Ruse Autocenter VEKO / ВЕКО ОЙЛ"
                    />
                  </MapProvider>
                }
              />
            </div>
            <div className="col-md-6" style={{ position: "relative" }}>
              <LocationsComponents
                title={translations.salon_name_ruse}
                message={`${translations.long_address_ruse_second}`}
                statusMessage={`${translations.name_ruse}`}
                component={
                  <MapProvider>
                    <MapComponent hrefLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.456991955578!2d25.96261527607825!3d43.82562157109446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ae60831403f725%3A0xf449f085a9b6b525!2z0JfQsNC_0LDQtCwgYnVsLiAiR290c2UgRGVsY2hldiIgMzgsIDcwMTYgUnVzZQ!5e0!3m2!1sen!2sbg!4v1727556504770!5m2!1sen!2sbg" />
                  </MapProvider>
                }
              />
            </div>
          </div>
          <div className={`row ${isMobile ? "" : "my-5"}`}>
            <div className={`col-md-6 ${isMobile ? "py-4" : ""}`}>
              <LocationsComponents
                title={`${translations.salon_name_ruse}`}
                message={`${translations.address_turnovo_second}`}
                statusMessage={`${translations.name_turnovo}`}
                component={
                  <MapProvider>
                    <MapComponent hrefLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.207437605815!2d25.598038476037654!3d43.07913407113518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a925e77946d405%3A0x37c957f69def11b4!2sg.k.%20Kolyo%20Ficheto%2C%20ul.%20%22Oborishte%22%2018%2C%205000%20Veliko%20Tarnovo!5e0!3m2!1sen!2sbg!4v1727556616371!5m2!1sen!2sbg" />
                  </MapProvider>
                }
              />
            </div>
            <div className="col-md-6">
              <LocationsComponents
                title={`${translations.trade_base_name_turnovo}`}
                message={`${translations.long_address_turnovo}`}
                statusMessage={`${translations.name_turnovo}`}
                component={
                  <MapProvider>
                    <MapComponent hrefLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.547151993098!2d25.6166755760372!3d43.071990971135605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a9266d7fc914a9%3A0x5450a961edc0a142!2sIndustrial%20zone%2C%20ul.%20%22Magistralna%22%209%2C%205002%20Veliko%20Tarnovo!5e0!3m2!1sen!2sbg!4v1727556741313!5m2!1sen!2sbg" />
                  </MapProvider>
                }
              />
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-md-6">
              <LocationsComponents
                title={`${translations.trade_base_name_gabrovo}`}
                message={`${translations.address_trade_gabrovo}`}
                statusMessage={`${translations.name_gabrovo}`}
                component={
                  <MapProvider>
                    <MapComponent hrefLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.1783552069055!2d25.323079900000003!3d42.89018360000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a91a84d3f5f8f3%3A0x86f7e8acc9d7c3e2!2z0JLQldCa0J4g0J7QmdCbINCV0J7QntCUL1ZFS08gT0lMIEx0ZC4!5e0!3m2!1sen!2sbg!4v1726953202356!5m2!1sen!2sbg" />
                  </MapProvider>
                }
              />
            </div>
            <div className="col-md-6">
              <ContactFormComponent translations={translations} />
            </div>
          </div>
        </div>
      }
    />
  );
}
