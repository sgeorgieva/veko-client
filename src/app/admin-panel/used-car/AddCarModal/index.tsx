import { Fragment, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  CompositeZIndex,
  FixedZIndex,
  Flex,
  Label,
  Layer,
  ModalAlert,
  SelectList,
  Text,
  TextArea,
  TextField,
} from "gestalt";
import { DatePicker } from "antd";
import axios from "axios";
import UploadImagesComponet from "../../../../app/components/UploadImagesComponent";
import { linkUrl, endpoints } from "../../../../../utils/functions";

import "./addCarModal.scss";

export default function AddCarModal({
  isAddCarModalOpen,
  setIsAddCarOpen,
  isMobile,
}: any) {
  const HEADER_ZINDEX = new FixedZIndex(10);
  const modalZIndex = new CompositeZIndex([HEADER_ZINDEX]);
  const [items, setItems] = useState([]);
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [typeEngine, setTypeEngine] = useState("");
  const [power, setPower] = useState("");
  const [euroEmission, setEuroEmission] = useState("");
  const [transmission, setTransmission] = useState("");
  const [category, setCategory] = useState("");
  const [mileage, setМileage] = useState("");
  const [color, setColor] = useState("");
  const [autoStabilityControlCheck, setAutoStabilityControlCheck] =
    useState(false);
  const [antiblockSystemCheck, setAntiBlockSystemCheck] = useState(false);
  const [backAirPillowsCheck, setBackAirPillowsCheck] = useState(false);
  const [frontAirPillowsCheck, setFrontAirPillowsCheck] = useState(false);
  const [lateralAirPillowsCheck, setLateralAirPillowsCheck] = useState(false);
  const [parktronicCheck, setParktronicCheck] = useState(false);
  const [doorsCheck, setDoorsCheck] = useState(false);
  const [alloyWheelsCheck, setAlloyWheelsCheck] = useState(false);
  const [halogenHeadlightsCheck, setHalogenHeadlightsCheck] = useState(false);
  const [protectionCheck, setProtectionCheck] = useState(false);
  const [immobilizerCheck, setImmobilizerCheck] = useState(false);
  const [centralLockingCheck, setCentralLockingCheck] = useState(false);
  const [bluetoothHandsfreeSystemCheck, setBluetoothHandsfreeSystemCheck] =
    useState(false);
  const [audioConsumablesCheck, setAudioConsumablesCheck] = useState(false);
  const [boardComputerCheck, setBoardComputerCheck] = useState(false);
  const [lightSensorCheck, setLightSensorCheck] = useState(false);
  const [electricMirrorsCheck, setElectricMirrorsCheck] = useState(false);
  const [electricGlassCheck, setElectricGlassCheck] = useState(false);
  const [climatronicCheck, setClimatronicCheck] = useState(false);
  const [steeringWheelAdjustmentCheck, setSteeringWheelAdjustmentCheck] =
    useState(false);
  const [rainSensorCheck, setRainSensorCheck] = useState(false);
  const [powerSteeringCheck, setPowerSteeringCheck] = useState(false);
  const [autopilotCheck, setAutopilotCheck] = useState(false);
  const [newImportationCheck, setNewImportationCheck] = useState(false);
  const [stereoCheck, setStereoCheck] = useState(false);
  const [allCheckBoxesCheck, setAllCheckboxsesCheck] = useState(false);

  const handleAllCheckboxses = (checked: boolean) => {
    if (checked) {
      setAutoStabilityControlCheck(true);
      setAntiBlockSystemCheck(true);
      setBackAirPillowsCheck(true);
      setFrontAirPillowsCheck(true);
      setLateralAirPillowsCheck(true);
      setParktronicCheck(true);
      setDoorsCheck(true);
      setAlloyWheelsCheck(true);
      setHalogenHeadlightsCheck(true);
      setProtectionCheck(true);
      setImmobilizerCheck(true);
      setCentralLockingCheck(true);
      setBluetoothHandsfreeSystemCheck(true);
      setAudioConsumablesCheck(true);
      setBoardComputerCheck(true);
      setLightSensorCheck(true);
      setElectricMirrorsCheck(true);
      setElectricGlassCheck(true);
      setClimatronicCheck(true);
      setSteeringWheelAdjustmentCheck(true);
      setRainSensorCheck(true);
      setPowerSteeringCheck(true);
      setAutopilotCheck(true);
      setStereoCheck(true);
      setNewImportationCheck(true);
    } else {
      setAutoStabilityControlCheck(false);
      setAntiBlockSystemCheck(false);
      setBackAirPillowsCheck(false);
      setFrontAirPillowsCheck(false);
      setLateralAirPillowsCheck(false);
      setParktronicCheck(false);
      setDoorsCheck(false);
      setAlloyWheelsCheck(false);
      setHalogenHeadlightsCheck(false);
      setProtectionCheck(false);
      setImmobilizerCheck(false);
      setCentralLockingCheck(false);
      setBluetoothHandsfreeSystemCheck(false);
      setAudioConsumablesCheck(false);
      setBoardComputerCheck(false);
      setLightSensorCheck(false);
      setElectricMirrorsCheck(false);
      setElectricGlassCheck(false);
      setClimatronicCheck(false);
      setSteeringWheelAdjustmentCheck(false);
      setRainSensorCheck(false);
      setPowerSteeringCheck(false);
      setAutopilotCheck(false);
      setStereoCheck(false);
      setNewImportationCheck(false);
    }
  };

  const handleAddCar = () => {
    // Add car logic here
    setIsAddCarOpen(!isAddCarModalOpen);
    setAllCheckboxsesCheck(false);
    const values = [
      {
        year: year,
        description: description,
        typeEngine: typeEngine,
        power: power,
        euroEmission: euroEmission,
        transmission: transmission,
        category: category,
        mileage: mileage,
        color: color,
        autoStabilityControlCheck: autoStabilityControlCheck,
        antiblockSystemCheck: antiblockSystemCheck,
        backAirPillowsCheck: backAirPillowsCheck,
        frontAirPillowsCheck: frontAirPillowsCheck,
        lateralAirPillowsCheck: lateralAirPillowsCheck,
        parktronicCheck: parktronicCheck,
        doorsCheck: doorsCheck,
        alloyWheelsCheck: alloyWheelsCheck,
        halogenHeadlightsCheck: halogenHeadlightsCheck,
        protectionCheck: protectionCheck,
        immobilizerCheck: immobilizerCheck,
        bluetoothHandsfreeSystemCheck: bluetoothHandsfreeSystemCheck,
        audioConsumablesCheck: audioConsumablesCheck,
        boardComputerCheck: boardComputerCheck,
        lightSensorCheck: lightSensorCheck,
        electricMirrorsCheck: electricMirrorsCheck,
        electricGlassCheck: electricGlassCheck,
        climatronicCheck: climatronicCheck,
        steeringWheelAdjustmentCheck: steeringWheelAdjustmentCheck,
        rainSensorCheck: rainSensorCheck,
        powerSteeringCheck: powerSteeringCheck,
        autopilotCheck: autopilotCheck,
        newImportationCheck: newImportationCheck,
        stereoCheck: stereoCheck,
      },
    ];

    const newItems = values.map((value) => ({
      year: value.year,
      description: value.description,
      typeEngine: value.typeEngine,
      power: value.power,
      euroEmission: value.euroEmission,
      transmission: value.transmission,
      category: value.category,
      mileage: value.mileage,
      color: value.color,
      autoStabilityControlCheck: value.autoStabilityControlCheck,
      antiblockSystemCheck: value.antiblockSystemCheck,
      backAirPillowsCheck: value.backAirPillowsCheck,
      frontAirPillowsCheck: value.frontAirPillowsCheck,
      lateralAirPillowsCheck: value.lateralAirPillowsCheck,
      parktronicCheck: value.parktronicCheck,
      doorsCheck: value.doorsCheck,
      alloyWheelsCheck: value.alloyWheelsCheck,
      halogenHeadlightsCheck: value.halogenHeadlightsCheck,
      protectionCheck: value.protectionCheck,
      immobilizerCheck: value.immobilizerCheck,
      bluetoothHandsfreeSystemCheck: value.bluetoothHandsfreeSystemCheck,
      audioConsumablesCheck: value.audioConsumablesCheck,
      boardComputerCheck: value.boardComputerCheck,
      lightSensorCheck: value.lightSensorCheck,
      electricMirrorsCheck: value.electricMirrorsCheck,
      electricGlassCheck: value.electricGlassCheck,
      climatronicCheck: value.climatronicCheck,
      steeringWheelAdjustmentCheck: value.steeringWheelAdjustmentCheck,
      rainSensorCheck: value.rainSensorCheck,
      powerSteeringCheck: value.powerSteeringCheck,
      autopilotCheck: value.autopilotCheck,
      newImportationCheck: value.newImportationCheck,
      stereoCheck: value.stereoCheck,
    }));

    const updateElementAtIndex = (index, newElement) => {
      const newArray = [...stateArray];
      newArray[index] = newElement;
      setItems(newArray);
      // setStateArray(newArray);
    };

    fetchAddCar();
  };

  const handleCancelAddingCar = () => {
    setIsAddCarOpen(!isAddCarModalOpen);
  };

  console.log("items", items);

  const fetchAddCar = async () => {
    // Add car data to the server here
    console.log("here", items);

    try {
      const response = axios.post(`${linkUrl()}${endpoints.createCar}`, {
        headers: {
          Bearer: localStorage.getItem("jwt"),
        },
        items,
      });
      const data = await response;

      console.log("data", data);

      if (data.statusText === "fail" || data.statusText === "error") {
        throw Error(data.message);
      } else {
        // store.dispatch(login(data));
        console.log("data", data);
        // setError(false);
        // setMessage(t(data?.statusText));
        setIsAddCarOpen(!isAddCarModalOpen);
      }
    } catch (error) {
      console.log("error", error);
      // setMessage(`${t(error?.message)}`);
      // setError(true);
      // throw Error(error);
    }
  };

  return (
    <Box padding={8}>
      {isAddCarModalOpen && (
        <Layer zIndex={modalZIndex}>
          <ModalAlert
            accessibilityModalLabel="Create new board"
            heading={isMobile ? "" : "Добавяне на автомобил в автооказион"}
            onDismiss={() => handleCancelAddingCar()}
            type="default"
          >
            <Fragment>
              {isMobile && (
                <h3 className="fw-bold text-center pb-3">
                  Добавяне на автомобил в автооказион
                </h3>
              )}
              <div className="row">
                <div className="col-md-4">
                  <Box marginBottom={2}>
                    <Label htmlFor="year">Година</Label>
                    <DatePicker
                      onChange={({ value }) => {
                        setYear(value);
                      }}
                      picker="month"
                      value={year}
                      size={isMobile ? "small" : "medium"}
                      width="100%"
                      placeholder=" "
                    />
                  </Box>
                </div>
                <div className="col-md-4">
                  <Box marginBottom={2}>
                    <SelectList
                      id="typeEngine"
                      label="Тип двигател"
                      onChange={() => setTypeEngine(typeEngine)}
                      size={isMobile ? "md" : "lg"}
                    >
                      {[
                        { label: "Бензин", value: "gasoline" },
                        { label: "Дизел", value: "diesel" },
                        { label: "Хибрид", value: "hybrid" },
                        { label: "Газ", value: "gas" },
                        { label: "Електрически", value: "electric" },
                      ].map(({ label, value }) => (
                        <SelectList.Option
                          key={label}
                          label={label}
                          value={value}
                        />
                      ))}
                    </SelectList>
                  </Box>
                </div>
                <div className="col-md-4">
                  <Box marginBottom={2}>
                    <TextField
                      id="power"
                      label="Мощност"
                      onChange={() => setPower(power)}
                      placeholder=""
                      type="text"
                      // value={power}
                      size={isMobile ? "sm" : "lg"}
                    />
                  </Box>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <Box marginBottom={2}>
                    <SelectList
                      id="euroEmission"
                      label="Евростандарт"
                      onChange={() => setEuroEmission(euroEmission)}
                      size={isMobile ? "md" : "lg"}
                    >
                      {[
                        { label: "Евро 1", value: "euro1" },
                        { label: "Евро 2", value: "euro2" },
                        { label: "Евро 3", value: "euro3" },
                        { label: "Евро 4", value: "euro4" },
                        { label: "Евро 5", value: "euro5" },
                        { label: "Евро 6", value: "euro6" },
                      ].map(({ label, value }) => (
                        <SelectList.Option
                          key={label}
                          label={label}
                          value={value}
                        />
                      ))}
                    </SelectList>
                  </Box>
                </div>
                <div className="col-md-4">
                  <Box marginBottom={2}>
                    <SelectList
                      id="transmission"
                      label="Скоростна кутия"
                      onChange={() => setTransmission(transmission)}
                      size={isMobile ? "md" : "lg"}
                    >
                      {[
                        { label: "Ръчна", value: "manual" },
                        { label: "Автоматична", value: "automatic" },
                      ].map(({ label, value }) => (
                        <SelectList.Option
                          key={label}
                          label={label}
                          value={value}
                        />
                      ))}
                    </SelectList>
                  </Box>
                </div>
                <div className="col-md-4">
                  <Box marginBottom={2}>
                    <SelectList
                      id="category"
                      label="Категория"
                      onChange={() => setCategory(category)}
                      size={isMobile ? "md" : "lg"}
                    >
                      {[
                        { label: "Кабриолет", value: "convertible" },
                        { label: "Купе", value: "coupe" },
                        { label: "Кросувър", value: "crossover" },
                        { label: "Хибрид", value: "hybrid" },
                        { label: "Луксозен", value: "luxury" },
                        { label: "Седан", value: "sedan" },
                        { label: "Спортен", value: "sports car" },
                        { label: "СУВ", value: "SUV" },
                        { label: "Товарен автомобил/Пикап", value: "truck" },
                        { label: "Ван/Миниван", value: "van/minivan" },
                        { label: "Хетчбек", value: "hatchback" },
                      ].map(({ label, value }) => (
                        <SelectList.Option
                          key={label}
                          label={label}
                          value={value}
                        />
                      ))}
                    </SelectList>
                  </Box>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <Box
                    alignItems="start"
                    display="flex"
                    height="100%"
                    justifyContent="start"
                  >
                    <Box width="100%">
                      <TextArea
                        id="description"
                        label="Описание"
                        onChange={(e) => {
                          setDescription(e.value);
                        }}
                        placeholder=""
                        value={description}
                      />
                    </Box>
                  </Box>
                </div>
                <div className="col-md-3">
                  <Box marginBottom={2}>
                    <TextField
                      id="mileage"
                      label="Пробег"
                      onChange={() => setМileage(mileage)}
                      placeholder=""
                      type="number"
                      // value={mileage}
                      size={isMobile ? "sm" : "lg"}
                    />
                  </Box>
                </div>
                <div className="col-md-3">
                  <Box marginBottom={2}>
                    <TextField
                      id="color"
                      label="Цвят"
                      onChange={() => setColor(color)}
                      placeholder=""
                      type="text"
                      size={isMobile ? "sm" : "lg"}
                    />
                  </Box>
                </div>
              </div>
              <div className="row pt-3 align-items-baseline">
                <div className="col-md-6 flex-1">
                  <h6 className="fw-bold mb-0">Безопасност</h6>
                </div>
                <div className="col-md-6 flex-1">
                  <Flex
                    alignItems="center"
                    gap={4}
                    height="100%"
                    justifyContent="end"
                    width="100%"
                  >
                    <Checkbox
                      checked={allCheckBoxesCheck}
                      id="allCheckbox"
                      label="Избери всички"
                      onChange={({ checked }) => {
                        handleAllCheckboxses(checked);
                        setAllCheckboxsesCheck(checked);
                      }}
                      size={isMobile ? "sm" : "md"}
                    />
                  </Flex>
                </div>
              </div>
              <div className="row">
                <Flex
                  alignItems="center"
                  gap={4}
                  height="100%"
                  justifyContent="start"
                  width="100%"
                >
                  <Checkbox
                    checked={autoStabilityControlCheck}
                    id="autoStabilityControlCheck"
                    label="Автоматичен контрол на стабилността"
                    onChange={({ checked }) =>
                      setAutoStabilityControlCheck(checked)
                    }
                    size={isMobile ? "sm" : "md"}
                  />
                </Flex>
                <Flex
                  alignItems="center"
                  gap={4}
                  height="100%"
                  justifyContent="start"
                  width="100%"
                >
                  <Checkbox
                    checked={antiblockSystemCheck}
                    id="antiblockSystemCheck"
                    label="Антиблокираща система"
                    onChange={({ checked }) => setAntiBlockSystemCheck(checked)}
                    size={isMobile ? "sm" : "md"}
                  />
                </Flex>
                <Flex
                  alignItems="center"
                  gap={4}
                  height="100%"
                  justifyContent="start"
                  width="100%"
                >
                  <Checkbox
                    checked={backAirPillowsCheck}
                    id="backAirPillowsCheck"
                    label="Въздушни възглавници - Задни"
                    onChange={({ checked }) => setBackAirPillowsCheck(checked)}
                    size={isMobile ? "sm" : "md"}
                  />
                </Flex>
                <Flex
                  alignItems="center"
                  gap={4}
                  height="100%"
                  justifyContent="start"
                  width="100%"
                >
                  <Checkbox
                    checked={frontAirPillowsCheck}
                    id="frontAirPillowsCheck"
                    label="Въздушни възглавници - Предни"
                    onChange={({ checked }) => setFrontAirPillowsCheck(checked)}
                    size={isMobile ? "sm" : "md"}
                  />
                </Flex>
                <Flex
                  alignItems="center"
                  gap={4}
                  height="100%"
                  justifyContent="start"
                  width="100%"
                >
                  <Checkbox
                    checked={lateralAirPillowsCheck}
                    id="lateralAirPillowsCheck"
                    label="Въздушни възглавници - Странични"
                    onChange={({ checked }) =>
                      setLateralAirPillowsCheck(checked)
                    }
                    size={isMobile ? "sm" : "md"}
                  />
                </Flex>
                <Flex
                  alignItems="center"
                  gap={4}
                  height="100%"
                  justifyContent="start"
                  width="100%"
                >
                  <Checkbox
                    checked={parktronicCheck}
                    id="checkbox"
                    label="Парктроник"
                    onChange={({ checked }) => setParktronicCheck(checked)}
                    size={isMobile ? "sm" : "md"}
                  />
                </Flex>
              </div>
              <h6 className="fw-bold pt-3 mb-0">Екстериор</h6>
              <div className="row">
                <Flex
                  alignItems="center"
                  gap={4}
                  height="100%"
                  justifyContent="start"
                  width="100%"
                >
                  <Checkbox
                    checked={doorsCheck}
                    id="doorsCheck"
                    label="2(3) Врати"
                    onChange={({ checked }) => setDoorsCheck(checked)}
                    size={isMobile ? "sm" : "md"}
                  />
                </Flex>
                <Flex
                  alignItems="center"
                  gap={4}
                  height="100%"
                  justifyContent="start"
                  width="100%"
                >
                  <Checkbox
                    checked={alloyWheelsCheck}
                    id="alloyWheelsCheck"
                    label="Лети джанти"
                    onChange={({ checked }) => setAlloyWheelsCheck(checked)}
                    size={isMobile ? "sm" : "md"}
                  />
                </Flex>
                <Flex
                  alignItems="center"
                  gap={4}
                  height="100%"
                  justifyContent="start"
                  width="100%"
                >
                  <Checkbox
                    checked={halogenHeadlightsCheck}
                    id="halogenHeadlightsCheck"
                    label="Халогенни фарове"
                    onChange={({ checked }) =>
                      setHalogenHeadlightsCheck(checked)
                    }
                    size={isMobile ? "sm" : "md"}
                  />
                </Flex>
                <Flex
                  alignItems="center"
                  gap={4}
                  height="100%"
                  justifyContent="start"
                  width="100%"
                >
                  <Checkbox
                    checked={protectionCheck}
                    id="protection"
                    label="Защита"
                    onChange={({ checked }) => setProtectionCheck(checked)}
                    size={isMobile ? "sm" : "md"}
                  />
                </Flex>
                <Flex
                  alignItems="center"
                  gap={4}
                  height="100%"
                  justifyContent="start"
                  width="100%"
                >
                  <Checkbox
                    checked={immobilizerCheck}
                    id="immobilizerCheck"
                    label="Имобилайзер"
                    onChange={({ checked }) => setImmobilizerCheck(checked)}
                    size={isMobile ? "sm" : "md"}
                  />
                </Flex>
                <Flex
                  alignItems="center"
                  gap={4}
                  height="100%"
                  justifyContent="start"
                  width="100%"
                >
                  <Checkbox
                    checked={centralLockingCheck}
                    id="centralLockingCheck"
                    label="Централно заключване"
                    onChange={({ checked }) => setCentralLockingCheck(checked)}
                    size={isMobile ? "sm" : "md"}
                  />
                </Flex>
              </div>
              <h6 className="fw-bold pt-3 mb-0">Комфорт</h6>
              <div className="row">
                <Flex
                  alignItems="center"
                  gap={4}
                  height="100%"
                  justifyContent="start"
                  width="100%"
                >
                  <Checkbox
                    id="bluetoothHandsfreeSystemCheck"
                    checked={bluetoothHandsfreeSystemCheck}
                    label="Bluetooth \ handsfree система"
                    onChange={({ checked }) =>
                      setBluetoothHandsfreeSystemCheck(checked)
                    }
                    size={isMobile ? "sm" : "md"}
                  />
                </Flex>
                <Flex
                  alignItems="center"
                  gap={4}
                  height="100%"
                  justifyContent="start"
                  width="100%"
                >
                  <Checkbox
                    checked={audioConsumablesCheck}
                    id="audioConsumablesCheck"
                    label="USB, audio\video, IN\AUX изводи"
                    onChange={({ checked }) =>
                      setAudioConsumablesCheck(checked)
                    }
                    size={isMobile ? "sm" : "md"}
                  />
                </Flex>
                <Flex
                  alignItems="center"
                  gap={4}
                  height="100%"
                  justifyContent="start"
                  width="100%"
                >
                  <Checkbox
                    checked={boardComputerCheck}
                    id="boardComputerCheck"
                    label="Бордкомпютър"
                    onChange={({ checked }) => setBoardComputerCheck(checked)}
                    size={isMobile ? "sm" : "md"}
                  />
                </Flex>
                <Flex
                  alignItems="center"
                  gap={4}
                  height="100%"
                  justifyContent="start"
                  width="100%"
                >
                  <Checkbox
                    checked={lightSensorCheck}
                    id="lightSensorCheck"
                    label="Датчик за светлина"
                    onChange={({ checked }) => setLightSensorCheck(checked)}
                    size={isMobile ? "sm" : "md"}
                  />
                </Flex>
                <Flex
                  alignItems="center"
                  gap={4}
                  height="100%"
                  justifyContent="start"
                  width="100%"
                >
                  <Checkbox
                    checked={electricMirrorsCheck}
                    id="electricMirrorsCheck"
                    label="Ел. Огледала"
                    onChange={({ checked }) => setElectricMirrorsCheck(checked)}
                    size={isMobile ? "sm" : "md"}
                  />
                </Flex>
                <Flex
                  alignItems="center"
                  gap={4}
                  height="100%"
                  justifyContent="start"
                  width="100%"
                >
                  <Checkbox
                    checked={electricGlassCheck}
                    id="electricGlassCheck"
                    label="Ел. Стъкла"
                    onChange={({ checked }) => setElectricGlassCheck(checked)}
                    size={isMobile ? "sm" : "md"}
                  />
                </Flex>
                <Flex
                  alignItems="center"
                  gap={4}
                  height="100%"
                  justifyContent="start"
                  width="100%"
                >
                  <Checkbox
                    checked={climatronicCheck}
                    id="climatronicCheck"
                    label="Климатроник"
                    onChange={({ checked }) => setClimatronicCheck(checked)}
                    size={isMobile ? "sm" : "md"}
                  />
                </Flex>
                <Flex
                  alignItems="center"
                  gap={4}
                  height="100%"
                  justifyContent="start"
                  width="100%"
                >
                  <Checkbox
                    checked={steeringWheelAdjustmentCheck}
                    id="steeringWheelAdjustmentCheck"
                    label="Регулиране на волана"
                    onChange={({ checked }) =>
                      setSteeringWheelAdjustmentCheck(checked)
                    }
                    size={isMobile ? "sm" : "md"}
                  />
                </Flex>
                <Flex
                  alignItems="center"
                  gap={4}
                  height="100%"
                  justifyContent="start"
                  width="100%"
                >
                  <Checkbox
                    checked={rainSensorCheck}
                    id="rainSensorCheck"
                    label="Сензор за дъжд"
                    onChange={({ checked }) => setRainSensorCheck(checked)}
                    size={isMobile ? "sm" : "md"}
                  />
                </Flex>
                <Flex
                  alignItems="center"
                  gap={4}
                  height="100%"
                  justifyContent="start"
                  width="100%"
                >
                  <Checkbox
                    checked={powerSteeringCheck}
                    id="powerSteeringCheck"
                    label="Серво усилвател на волана"
                    onChange={({ checked }) => setPowerSteeringCheck(checked)}
                    size={isMobile ? "sm" : "md"}
                  />
                </Flex>
                <Flex
                  alignItems="center"
                  gap={4}
                  height="100%"
                  justifyContent="start"
                  width="100%"
                >
                  <Checkbox
                    checked={autopilotCheck}
                    id="autopilotCheck"
                    label="Система за контрол на скоростта (автопилот)"
                    onChange={({ checked }) => setAutopilotCheck(checked)}
                    size={isMobile ? "sm" : "md"}
                  />
                </Flex>
                <Flex
                  alignItems="center"
                  gap={4}
                  height="100%"
                  justifyContent="start"
                  width="100%"
                >
                  <Checkbox
                    checked={stereoCheck}
                    id="stereoCheck"
                    label="Стерео уредба"
                    onChange={({ checked }) => setStereoCheck(checked)}
                    size={isMobile ? "sm" : "md"}
                  />
                </Flex>
              </div>
              <h6 className="fw-bold pt-3 mb-0">Други</h6>
              <div className="row">
                <Flex
                  alignItems="center"
                  gap={4}
                  height="100%"
                  justifyContent="start"
                  width="100%"
                >
                  <Checkbox
                    checked={newImportationCheck}
                    id="newImportationCheck"
                    label="Нов внос"
                    onChange={({ checked }) => setNewImportationCheck(checked)}
                    size={isMobile ? "sm" : "md"}
                  />
                </Flex>
              </div>
              <div className="row py-3">
                <h6 className="fw-bold">Снимки</h6>
                <Text weight="bold">
                  <UploadImagesComponet />
                </Text>
              </div>
              <div className="row mt-3 pb-4">
                <Box padding={0} marginTop={3} marginBottom={3}>
                  <Button
                    fullWidth
                    type="submit"
                    color="blue"
                    accessibilityLabel="Submit"
                    size={`${isMobile ? "sm" : "lg"}`}
                    text="Добави"
                    onClick={(e) => handleAddCar()}
                  />{" "}
                </Box>
                <Button
                  fullWidth
                  type="button"
                  color="gray"
                  accessibilityLabel="button"
                  size={`${isMobile ? "sm" : "lg"}`}
                  text="Отказ"
                  onClick={(e) => handleCancelAddingCar()}
                />{" "}
              </div>
            </Fragment>
          </ModalAlert>
        </Layer>
      )}
    </Box>
  );
}
