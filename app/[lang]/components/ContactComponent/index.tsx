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
                      lat="43.83615669296568"
                      lng="25.965429756577716"
                      markerLat="43.8361"
                      markerLng="25.96481"
                      title={translations.base_name}
                      city={translations.name_ruse}
                      street={translations.address_ruse}
                      fax={`${translations.phone_fax} 0700 20 320`}
                      phone={`${translations.mobile_phone}: 0866 861 616`}
                      googlePreview={translations.google_preview}
                      hrefLink="https://www.google.com/maps/place//data=!4m2!3m1!1s0x40ae61d865c50243:0xb8052e6522d0f3e8?sa=X&ved=1t:8290&ictx=111"
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
                    <MapComponent
                      lat="42.890395806548256"
                      lng="25.32305843849706"
                      markerLat="42.8903"
                      markerLng="25.3230"
                      title={translations.base_name}
                      city={translations.name_turnovo}
                      street={translations.address_turnovo}
                      fax={`${translations.phone_fax} 062 601 171`}
                      phone={`${translations.mobile_phone}: 0885 807 782`}
                      hrefLink="https://www.google.com/maps/place/%D0%92%D0%95%D0%9A%D0%9E+%D0%9E%D0%99%D0%9B+%D0%95%D0%9E%D0%9E%D0%94%2FVEKO+OIL+Ltd./@42.890184,25.32308,16z/data=!4m6!3m5!1s0x40a91a84d3f5f8f3:0x86f7e8acc9d7c3e2!8m2!3d42.8901836!4d25.3230799!16s%2Fg%2F1tj83bqn?hl=en-US&entry=ttu"
                      googlePreview={translations.google_preview}
                    />
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
                    <MapComponent
                      lat=" 42.89042767761082"
                      lng="25.324024137536224"
                      markerLat="42.8904"
                      markerLng="25.3240"
                      title={translations.base_name}
                      city={translations.name_gabrovo}
                      street={`${translations.address_trade_gabrovo}`}
                      phone={`${translations.mobile_phone}: 0889 309 396`}
                      hrefLink="https://www.google.com/maps?ll=42.890184,25.32308&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=9725497749148255202"
                      googlePreview={translations.google_preview}
                    />
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
                    <MapComponent
                      lat=" 42.89042767761082"
                      lng="25.324024137536224"
                      markerLat="42.8904"
                      markerLng="25.3240"
                      title={translations.base_name}
                      city={translations.name_gabrovo}
                      street={`${translations.address_trade_gabrovo}`}
                      phone={`${translations.tel} 0887 932 700`}
                      hrefLink="https://www.google.com/maps?ll=42.890184,25.32308&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=9725497749148255202"
                      googlePreview={translations.google_preview}
                    />
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
