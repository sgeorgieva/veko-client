"use client";

// import { useSearchParams } from "next/navigation";
import moment from "moment";
import ModalImage from "react-modal-image";
import { Box } from "gestalt";
import {
  generateCategoryContent,
  generateEuroStandard,
  generateTransmissionContent,
  generateTypeEngineContent,
} from "@/utils/functions";
import HomeComponent from "../../HomeComponent/page";

import "./usedCarDescription.scss";
import { Suspense } from "react";
import Loader from "../../Loader";
import { useCarContext } from "@/app/contexts/CarContext";

export default function UsedCarDescription({ lang, translations }) {
  const { car } = useCarContext();
  const attributes = car.attributes ? JSON.parse(car.attributes) : {};

  return (
    <Suspense fallback={<Loader />}>
      <HomeComponent
        isHomePage={false}
        component={
          <div className="wrapper">
            <div className="title">
              <div className="row d-flex align-items-center">
                <div className="col-md-12">
                  {car?.images && car.images.length > 0 && (
                    <img
                      width={500}
                      src={`${process.env.NEXT_PUBLIC_STORAGE_URL}storage/${car.images[0].name}`}
                      alt={car?.model}
                    />
                  )}
                </div>
                <h1 className="mb-3 pageHeader">
                  {translations.model}: {car?.model}
                </h1>
                <div className="d-flex modal-images-wrapper">
                  {car?.images &&
                    car?.images.map((image) => (
                      <Box
                        borderStyle="sm"
                        rounding={3}
                        paddingY={2}
                        marginStart={3}
                      >
                        <ModalImage
                          small={`${process.env.NEXT_PUBLIC_STORAGE_URL}storage/${image.name}`}
                          large={`${process.env.NEXT_PUBLIC_STORAGE_URL}storage/${image.name}`}
                        />
                      </Box>
                    ))}
                </div>
                <div className="d-flex mt-4">
                  <div className="flex-one">
                    <h6>
                      {translations.year}:{" "}
                      {moment(moment.utc(car?.year).toDate())
                        .local()
                        .format("DD.MM.YYYY")}
                    </h6>
                    <h6>
                      {translations.type_engine}:{" "}
                      <span className="fw-bold">
                        {generateTypeEngineContent(car?.typeEngine, lang)}
                      </span>
                    </h6>
                    <h6>
                      {translations.power}:{" "}
                      <span className="fw-bold">
                        {car?.power} {lang === "bg" ? "к.с." : "hp"}
                      </span>
                    </h6>
                    <h6>
                      {translations.euro_emission}:{" "}
                      <span className="fw-bold">
                        {generateEuroStandard(car?.euroEmission, lang)}
                      </span>
                    </h6>
                    <h6>
                      {translations.transmission}:{" "}
                      <span className="fw-bold">
                        {generateTransmissionContent(car?.transmission, lang)}
                      </span>
                    </h6>
                    <h6>
                      {translations.category}:{" "}
                      <span className="fw-bold">
                        {generateCategoryContent(car?.category, lang)}
                      </span>
                    </h6>
                    <h6>
                      {translations.mileage}:{" "}
                      <span className="fw-bold">
                        {car?.mileage} {lang === "bg" ? "км" : " m"}
                      </span>
                    </h6>
                    <h6>
                      {translations.color}:{" "}
                      <span className="fw-bold">{car?.color}</span>
                    </h6>
                    <h6>
                      {translations.description}:{" "}
                      <span className="fw-bold">{car?.description}</span>
                    </h6>
                  </div>
                  <div className="flex-one">
                    {attributes.autoStabilityControlCheck ||
                    attributes.antiblockSystemCheck ||
                    attributes.backAirPillowsCheck ||
                    attributes.frontAirPillowsCheck ||
                    attributes.lateralAirPillowsCheck ||
                    attributes.parktronicCheck ? (
                      <h5 className="fw-bold mt-4">{translations.safety}</h5>
                    ) : null}
                    <ul>
                      {attributes.autoStabilityControlCheck && (
                        <li>{translations.auto_stability_control_check}</li>
                      )}
                      {attributes.antiblockSystemCheck && (
                        <li>{translations.anti_block_system_check}</li>
                      )}
                      {attributes.backAirPillowsCheck && (
                        <li>{translations.back_air_pillows_check}</li>
                      )}
                      {attributes.frontAirPillowsCheck && (
                        <li>{translations.front_air_pillows_check}</li>
                      )}
                      {attributes.lateralAirPillowsCheck && (
                        <li>{translations.lateral_air_pillows_check}</li>
                      )}
                      {attributes.parktronicCheck && (
                        <li>{translations.parktronic_check}</li>
                      )}
                    </ul>
                  </div>
                  <div className="flex-one">
                    {attributes.doorsCheck ||
                    attributes.alloyWheelsCheck ||
                    attributes.halogenHeadlightsCheck ||
                    attributes.protectionCheck ||
                    attributes.immobilizerCheck ||
                    attributes.centralLockingCheck ? (
                      <h5 className="fw-bold mt-4">{translations.exterior}</h5>
                    ) : null}
                    <ul>
                      {attributes.doorsCheck && (
                        <li>{translations.doors_check}</li>
                      )}
                      {attributes.alloyWheelsCheck && (
                        <li>{translations.alloy_wheels_check}</li>
                      )}
                      {attributes.halogenHeadlightsCheck && (
                        <li>{translations.halogen_headlights_check}</li>
                      )}
                      {attributes.protectionCheck && (
                        <li>{translations.protection_check}</li>
                      )}
                      {attributes.immobilizerCheck && (
                        <li>{translations.immobilizer_check}</li>
                      )}
                      {attributes.centralLockingCheck && (
                        <li>{translations.central_locking_check}</li>
                      )}
                    </ul>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="flex-one">
                    {attributes.bluetoothHandsfreeSystemCheck ||
                    attributes.audioConsumablesCheck ||
                    attributes.boardComputerCheck ||
                    attributes.lightSensorCheck ||
                    attributes.electricMirrorsCheck ||
                    attributes.electricMirrorsCheck ||
                    attributes.electricGlassCheck ||
                    attributes.climatronicCheck ||
                    attributes.steeringWheelAdjustmentCheck ||
                    attributes.rainSensorCheck ||
                    attributes.powerSteeringCheck ||
                    attributes.autopilotCheck ||
                    attributes.stereoCheck ? (
                      <h5 className="fw-bold mt-4">{translations.comfort}</h5>
                    ) : null}
                    <ul>
                      {attributes.bluetoothHandsfreeSystemCheck && (
                        <li>{translations.bluetooth_handsfree_system_check}</li>
                      )}
                      {attributes.audioConsumablesCheck && (
                        <li>{translations.audio_consumables_check}</li>
                      )}
                      {attributes.boardComputerCheck && (
                        <li>{translations.board_computer_check}</li>
                      )}
                      {attributes.lightSensorCheck && (
                        <li>{translations.light_sensor_check}</li>
                      )}
                      {attributes.electricMirrorsCheck && (
                        <li>{translations.electric_mirrors_check}</li>
                      )}
                      {attributes.electricGlassCheck && (
                        <li>{translations.electric_glass_check}</li>
                      )}
                      {attributes.climatronicCheck && (
                        <li>{translations.climatronic_check}</li>
                      )}
                      {attributes.steeringWheelAdjustmentCheck && (
                        <li>{translations.steering_wheel_adjustmentCheck}</li>
                      )}
                      {attributes.rainSensorCheck && (
                        <li>{translations.rain_sensor_check}</li>
                      )}
                      {attributes.powerSteeringCheck && (
                        <li>{translations.power_steering_check}</li>
                      )}
                      {attributes.autopilotCheck && (
                        <li>{translations.autopilot_check}</li>
                      )}
                      {attributes.stereoCheck && (
                        <li>{translations.stereo_check}</li>
                      )}
                    </ul>
                  </div>
                  <div className="flex-two">
                    {attributes.newImportationCheck && (
                      <h5 className="fw-bold mt-4">{translations.others}</h5>
                    )}
                    <ul>
                      {attributes.newImportationCheck && (
                        <li>{translations.new_importation_check}</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </Suspense>
  );
}
