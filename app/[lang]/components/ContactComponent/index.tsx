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
            <div className="col-md-7">
              <ContactFormComponent translations={translations} />
            </div>
            <div className="col-md-5">
              <div className="contact-image" />
            </div>
          </div>
          <div className="row">
            <div className={`location col-md-6 ${isMobile ? "py-4" : ""}`}>
              <LocationsComponents
                title={translations.trade_base_name_ruse}
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
                title={translations.trade_base_name_ruse}
                message={`${translations.long_address_turnovo}`}
                statusMessage={`${translations.name_turnovo}`}
                component={
                  <MapProvider>
                    <MapComponent hrefLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.5819988520343!2d25.619561299999997!3d43.071258199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a9272202dd392b%3A0xacbb4d198e211d6e!2zItCS0JXQmtCeINCe0JnQmyIg0JXQntCe0JQ!5e0!3m2!1sen!2sbg!4v1726953369934!5m2!1sen!2sbg" />
                  </MapProvider>
                }
              />
            </div>
          </div>
          <div className={`row ${isMobile ? "" : "my-5"}`}>
            <div className={`col-md-6 ${isMobile ? "py-4" : ""}`}>
              <LocationsComponents
                title={`${translations.trade_base_name_ruse}`}
                message={`${translations.long_address_gabravo_autocenter}`}
                statusMessage={`${translations.name_gabrovo}`}
                component={
                  <MapProvider>
                    <MapComponent hrefLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.1783552069055!2d25.323079900000003!3d42.89018360000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a91a84d3f5f8f3%3A0x86f7e8acc9d7c3e2!2z0JLQldCa0J4g0J7QmdCbINCV0J7QntCUL1ZFS08gT0lMIEx0ZC4!5e0!3m2!1sen!2sbg!4v1726953202356!5m2!1sen!2sbg" />
                  </MapProvider>
                }
              />
            </div>
            <div className="col-md-6">
              <LocationsComponents
                title={`${translations.service_name_gabrovo}`}
                message={`${translations.long_address_gabravo_autoservice}`}
                statusMessage={`${translations.name_gabrovo}`}
                component={
                  <MapProvider>
                    <MapComponent hrefLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.1783552069055!2d25.323079900000003!3d42.89018360000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a91a84d3f5f8f3%3A0x86f7e8acc9d7c3e2!2z0JLQldCa0J4g0J7QmdCbINCV0J7QntCUL1ZFS08gT0lMIEx0ZC4!5e0!3m2!1sen!2sbg!4v1726953202356!5m2!1sen!2sbg" />
                  </MapProvider>
                }
              />
            </div>
          </div>
        </div>
      }
    />
  );
}
