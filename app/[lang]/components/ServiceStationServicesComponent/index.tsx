import { Image } from "gestalt";
import ServicesImage from "../../../../public/images/settings.png";
import RollImage from "../../../../public/images/roll.png";
import DiagnosticsImage from "../../../../public/images/diagonostics.png";
import PlateImage from "../../../../public/images/plate.webp";

import "./serviceStationServicesComponent.scss";
export default function ServiceStationServicesComponent({
  isMobile,
  translations,
}: {
  isMobile: boolean;
  transaltions: any;
}) {
  return (
    <div className="services-station-services-wrapper pb-5">
      <h4 className="text-uppercase text-center pb-4">
        {translations.our_services}
      </h4>
      <div
        className={`d-flex align-items-center ${isMobile ? "flex-column" : ""}`}
      >
        <div className={`${isMobile ? "w-25" : "flex-1"}`}>
          <Image src={ServicesImage.src} />
        </div>
        <div className={`${isMobile ? "" : "flex-10 ps-5"}`}>
          <h5 className="text-uppercase">{translations.engines}</h5>
          <p>{translations.engines_text}</p>
          <h5 className="text-uppercase">{translations.electronics}</h5>
          <p>{translations.electronics_text}</p>
          <h5 className="text-uppercase">{translations.liquid_check}</h5>
          <p>{translations.liquid_check_text}</p>
        </div>
      </div>
      <div
        className={`d-flex align-items-center ${isMobile ? "flex-column" : ""}`}
      >
        <div className={`${isMobile ? "w-25" : "flex-1"}`}>
          <Image src={RollImage.src} />
        </div>
        <div className={`${isMobile ? "" : "flex-10 ps-5"}`}>
          <h5 className="text-uppercase">{translations.oil_change}</h5>
          <p>{translations.oil_change_text}</p>
          <h5 className="text-uppercase">{translations.filters_change}</h5>
          <p>{translations.filters_change_text}</p>
        </div>
      </div>
      <div
        className={`d-flex align-items-center ${isMobile ? "flex-column" : ""}`}
      >
        <div className={`${isMobile ? "w-25" : "flex-1"}`}>
          <Image src={DiagnosticsImage.src} />
        </div>
        <div className={`${isMobile ? "" : "flex-10 ps-5"}`}>
          <h5 className="text-uppercase">{translations.climatic_systems}</h5>
          <p>{translations.climatic_systems_text}</p>
          <h5 className="text-uppercase">{translations.tires}</h5>
          <p>{translations.tires_text}</p>
          <h5 className="text-uppercase">
            {translations.full_computer_diagnostic}
          </h5>
          <p>{translations.full_computer_diagnostic_text}</p>
        </div>
      </div>
      <div
        className={`d-flex align-items-center ${isMobile ? "flex-column" : ""}`}
      >
        <div className={`${isMobile ? "w-25" : "flex-1"}`}>
          <Image src={PlateImage.src} />
        </div>
        <div className={`${isMobile ? "" : "flex-10 ps-5"}`}>
          <h5 className="text-uppercase">{translations.auto_accessories}</h5>
          <p>{translations.auto_accessories_text}</p>
          <h5 className="text-uppercase">{translations.repair_services}</h5>
          <p>{translations.repair_services_text}</p>
        </div>
      </div>
    </div>
  );
}
