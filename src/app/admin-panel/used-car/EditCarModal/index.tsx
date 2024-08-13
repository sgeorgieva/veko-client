import { useState } from "react";
import {
  Box,
  Button,
  FixedZIndex,
  Flex,
  Image,
  Layer,
  Mask,
  OverlayPanel,
  TextArea,
  TextField,
  Checkbox,
  SelectList,
  Label,
  Text,
} from "gestalt";
import { DatePicker } from "antd";
import UploadImagesComponent from "../../../../app/components/UploadImagesComponent";

import "./editCarModal.scss";
export default function EditCarModal({
  isEditCarModalOpen,
  setIsEditCarModalOpen,
  setIsDeleteCarModalOpen,
  isMobile,
}: any) {
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

  const handleCloseOnOutsideClick = () => {
    setIsEditCarModalOpen(false);
  };

  const handleAddCar = () => {
    // Add car logic here
    setIsEditCarModalOpen(!isEditCarModalOpen);
    setAllCheckboxsesCheck(false);
  };

  const handleCancelAddingCar = () => {
    setIsEditCarModalOpen(!setIsEditCarModalOpen);
  };

  return (
    <Box padding={6}>
      {isEditCarModalOpen && (
        <Layer zIndex={new FixedZIndex(11)}>
          <OverlayPanel
            size={isMobile ? "sm" : "lg"}
            accessibilityDismissButtonLabel="Close edit News overlay panel"
            accessibilityLabel="Edit news"
            closeOnOutsideClick={() => handleCloseOnOutsideClick}
            footer={
              <Flex>
                <Flex.Item flex="grow">
                  <Button
                    color="red"
                    onClick={() => {
                      setIsDeleteCarModalOpen(true);
                      setIsEditCarModalOpen(false);
                    }}
                    size={isMobile ? "sm" : "lg"}
                    text="Изтрий"
                  />
                </Flex.Item>
                <Flex gap={{ column: 0, row: 2 }}>
                  <Button
                    onClick={() => setIsEditCarModalOpen(false)}
                    size={isMobile ? "sm" : "lg"}
                    text="Отказ"
                  />
                  <Button
                    color="blue"
                    onClick={() => setIsEditCarModalOpen(false)}
                    size={isMobile ? "sm" : "lg"}
                    text="Редактирай"
                    type="submit"
                  />
                </Flex>
              </Flex>
            }
            onDismiss={() => setIsEditCarModalOpen(false)}
            heading={isMobile ? "" : "Редактиране на автомобил Audi A3 2.0"}
          >
            {isMobile && (
              <h3 className="fw-bold text-center pb-3">
                Редактиране на автомобил Audi A3 2.0
              </h3>
            )}
            <Box height={400} id="popover-overlaypanel" paddingX={8}>
              <Box paddingX={2} rounding={4} width={200}>
                <Mask rounding={4}>
                  <Image
                    alt="Tropic greens: The taste of Petrol and Porcelain | Interior design, Vintage Sets and Unique Pieces agave"
                    color="rgb(231, 186, 176)"
                    naturalHeight={751}
                    naturalWidth={564}
                    src="https://i.ibb.co/7bQQYkX/stock2.jpg"
                  />
                </Mask>
              </Box>
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
              <Box marginBottom={2}>
                <SelectList
                  id="typeEngine"
                  label="Тип двигател"
                  onChange={() => setTypeEngine(typeEngine)}
                  size={isMobile ? "md" : "lg"}
                  value={typeEngine}
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
              <Box marginBottom={2}>
                <TextField
                  id="power"
                  label="Мощност"
                  onChange={() => setPower(power)}
                  placeholder=""
                  type="text"
                  value={power}
                  size={isMobile ? "sm" : "lg"}
                />
              </Box>
              <Box marginBottom={2}>
                <SelectList
                  id="euroEmission"
                  label="Евростандарт"
                  onChange={() => setEuroEmission(euroEmission)}
                  size={isMobile ? "md" : "lg"}
                  value={euroEmission}
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
              <Box marginBottom={2}>
                <SelectList
                  id="transmission"
                  label="Скоростна кутия"
                  onChange={() => setTransmission(transmission)}
                  size={isMobile ? "md" : "lg"}
                  value={transmission}
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
              <Box marginBottom={2}>
                <SelectList
                  id="category"
                  label="Категория"
                  onChange={() => setCategory(category)}
                  size={isMobile ? "md" : "lg"}
                  value={category}
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
              <Box alignItems="start" justifyContent="start">
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
              <Box marginBottom={2}>
                <TextField
                  id="mileage"
                  label="Пробег"
                  onChange={() => setМileage(mileage)}
                  placeholder=""
                  type="text"
                  value={mileage}
                  size={isMobile ? "sm" : "lg"}
                />
              </Box>
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
                  <UploadImagesComponent />
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
            </Box>
          </OverlayPanel>
        </Layer>
      )}
    </Box>
  );
}
