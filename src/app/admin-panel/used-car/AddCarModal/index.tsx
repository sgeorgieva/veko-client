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
  TextArea,
  TextField,
} from "gestalt";
import { DatePicker } from "antd";

import "./addCarModal.scss";

export default function AddCarModal({
  isAddCarModalOpen,
  setIsAddCarOpen,
  isMobile,
}: any) {
  const HEADER_ZINDEX = new FixedZIndex(10);
  const modalZIndex = new CompositeZIndex([HEADER_ZINDEX]);
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
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
  const [comfortCheck, setComfortCheck] = useState(false);
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
      setComfortCheck(true);
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
      setComfortCheck(false);
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
  };

  const handleCancelAddingCar = () => {
    setIsAddCarOpen(!isAddCarModalOpen);
  };

  return (
    <Box padding={8}>
      {isAddCarModalOpen && (
        <Layer zIndex={modalZIndex}>
          <ModalAlert
            accessibilityModalLabel="Create new board"
            primaryAction={{
              accessibilityLabel: "cancel item",
              label: "Отказ",
              onClick: () => handleCancelAddingCar(),
              role: "button",
            }}
            secondaryAction={{
              accessibilityLabel: "add item",
              label: "Добави",
              onClick: () => handleAddCar(),
              role: "button",
            }}
            heading="Добавяне на автомобил в автооказион"
            onDismiss={() => handleCancelAddingCar()}
            type="default"
          >
            <Fragment>
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
                      size="large"
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
                      onChange={() => {}}
                      size="lg"
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
                      onChange={() => {}}
                      placeholder=""
                      type="text"
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
                      onChange={() => {}}
                      size="lg"
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
                      onChange={() => {}}
                      size="lg"
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
                      onChange={() => {}}
                      size="lg"
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
                        label="Допълнителни описание"
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
                      onChange={() => {}}
                      placeholder=""
                      type="text"
                    />
                  </Box>
                </div>
                <div className="col-md-3">
                  <Box marginBottom={2}>
                    <TextField
                      id="color"
                      label="Цвят"
                      onChange={() => {}}
                      placeholder=""
                      type="text"
                    />
                  </Box>
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-md-6">
                  <h6 className="fw-bold mb-0">Безопасност</h6>
                </div>
                <div className="col-md-6">
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
                    checked={comfortCheck}
                    id="comfortCheck"
                    label="Bluetooth \ handsfree система"
                    onChange={({ checked }) => setComfortCheck(checked)}
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
                  />
                </Flex>
              </div>
            </Fragment>
          </ModalAlert>
        </Layer>
      )}
    </Box>
  );
}
