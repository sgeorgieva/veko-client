import { Fragment, useState } from "react";
import {
  BannerSlim,
  Box,
  Button,
  Checkbox,
  CompositeZIndex,
  FixedZIndex,
  Flex,
  Label,
  Layer,
  ModalAlert,
  SegmentedControl,
  SelectList,
  Text,
  TextArea,
  TextField,
} from "gestalt";
import axios from "axios";
import { DatePicker } from "gestalt-datepicker";
import { bg } from "date-fns/locale";
import { linkUrl, endpoints } from "../../../../../utils/functions";
import UploadImagesComponet from "../../../../app/components/UploadImagesComponent";

import "./addCarModal.scss";

export default function AddCarModal({
  isAddCarModalOpen,
  setIsAddCarOpen,
  isMobile,
  handleFetchCarsData,
}: any) {
  const HEADER_ZINDEX = new FixedZIndex(10);
  const modalZIndex = new CompositeZIndex([HEADER_ZINDEX]);
  let newItems = null;
  const mapOptions = { 0: ["year", "month"] };
  const itemsCalendar = ["Month & Year"];
  const [itemIndex, setItemIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [year, setYear] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [typeEngine, setTypeEngine] = useState("gasoline");
  const [power, setPower] = useState("");
  const [euroEmission, setEuroEmission] = useState("euro1");
  const [transmission, setTransmission] = useState("manual");
  const [category, setCategory] = useState("convertible");
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

  const [isValidForm, setIsValidForm] = useState(true);
  const [messageValidation, setMessageValidation] = useState("");
  const [hasYearValidationError, setHasYearValidationError] = useState(false);
  const [hasModelValidationError, setHasModelValidationError] = useState(false);
  const [hasDescriptionValidationError, setHasDescriptionValidationError] =
    useState(false);
  const [hasPowerValidationError, setHasPowerValidationError] = useState(false);
  const [hasMileageValidationError, setHasMileageValidationError] =
    useState(false);
  const [hasColorValidationError, setHasColorValidationError] = useState(false);
  const [hasImagesValidationError, setHasImagesValidationError] =
    useState(false);

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
    setAllCheckboxsesCheck(false);
    validateForm();

    if (
      !hasYearValidationError &&
      !hasModelValidationError &&
      !hasPowerValidationError &&
      !hasDescriptionValidationError &&
      !hasMileageValidationError &&
      !hasColorValidationError
    ) {
      setIsValidForm(true);
      const values = [
        {
          year: year,
          model: model,
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
          centralLockingCheck: centralLockingCheck,
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

      newItems = values.map((value) => ({
        year: value.year,
        model: value.model,
        description: value.description,
        typeEngine: value.typeEngine,
        power: value.power,
        euroEmission: value.euroEmission,
        transmission: value.transmission,
        category: value.category,
        mileage: value.mileage,
        color: value.color,
        attributes: {
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
          centralLockingCheck: centralLockingCheck,
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
        },
        images: images,
      }));
    }

    if (images[0].file !== undefined) {
      fetchAddCar();
    }
  };

  const handleCancelAddingCar = () => {
    setIsAddCarOpen(!isAddCarModalOpen);
  };

  const fetchAddCar = async () => {
    const formData = new FormData();
    formData.append("year", newItems[0].year);
    formData.append("model", newItems[0].model);
    formData.append("typeEngine", newItems[0].typeEngine);
    formData.append("power", newItems[0].power);
    formData.append("euroEmission", newItems[0].euroEmission);
    formData.append("transmission", newItems[0].transmission);
    formData.append("category", newItems[0].category);
    formData.append("description", newItems[0].description);
    formData.append("mileage", newItems[0].mileage);
    formData.append("color", newItems[0].color);
    images.map((image) => formData.append("images[]", image.file));
    formData.append("attributes", JSON.stringify(newItems[0].attributes));

    try {
      const response = await axios.post(
        `${linkUrl()}${endpoints.createCar}`,
        formData,
        {
          headers: {
            Accept: "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Replace with your actual authorization token
          },
        }
      );
      if (response.status === 200) {
        setIsAddCarOpen(false);
        handleFetchCarsData();
      }
    } catch (error) {
      console.error(error);
      setIsAddCarOpen(false);
    }
  };

  const handleYearChange = (value) => {
    setYear(value);
  };

  const handleModelChange = (event) => {
    setModel(event.value);
  };

  const handlePowerChange = (event) => {
    setPower(event.value);
  };

  const handleTypeEngine = (event) => {
    setTypeEngine(event.value);
  };

  const handleEuroEmission = (event) => {
    setEuroEmission(event.value);
  };

  const handleTransmission = (event) => {
    setTransmission(event.value);
  };

  const handleМileage = (event) => {
    setМileage(event.value);
  };

  const handleCategory = (event) => {
    setCategory(event.value);
  };

  const handleColor = (event) => {
    setColor(event.value);
  };

  const validateForm = () => {
    if (!year) {
      setHasYearValidationError(true);
      setIsValidForm(false);
    } else {
      setHasYearValidationError(false);
    }

    if (!model) {
      setHasModelValidationError(true);
      setIsValidForm(false);
    } else {
      setHasModelValidationError(false);
    }

    if (!power) {
      setHasPowerValidationError(true);
      setIsValidForm(false);
    } else {
      setHasPowerValidationError(false);
    }

    if (!description) {
      setHasDescriptionValidationError(true);
      setIsValidForm(false);
    } else {
      setHasDescriptionValidationError(false);
    }

    if (!mileage) {
      setHasMileageValidationError(true);
      setIsValidForm(false);
    } else {
      setHasMileageValidationError(false);
    }

    if (!color) {
      setHasColorValidationError(true);
      setIsValidForm(false);
    } else {
      setHasColorValidationError(false);
    }

    if (!images) {
      setHasImagesValidationError(true);
      setIsValidForm(false);
    } else {
      setHasImagesValidationError(false);
    }

    setMessageValidation("Моля, попълнете празните полета");
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
                {!isValidForm && (
                  <Box
                    alignItems="center"
                    display="flex"
                    height="100%"
                    justifyContent="center"
                    padding={3}
                  >
                    <Flex
                      direction="column"
                      gap={{ column: 3, row: 0 }}
                      width="100%"
                    >
                      <BannerSlim
                        iconAccessibilityLabel="Info"
                        message={messageValidation}
                        onDismiss={() => setIsValidForm(!isValidForm)}
                        type="error"
                      />
                    </Flex>
                  </Box>
                )}
                <div className="col-md-4">
                  <Box marginBottom={2}>
                    <Label htmlFor="year">Година</Label>
                    <div className="datepicker">
                      <Flex
                        alignItems="start"
                        height="100%"
                        justifyContent="center"
                        width="100%"
                      >
                        <Box padding={2}>
                          <Flex direction="column" gap={4} width="100%">
                            <SegmentedControl
                              items={itemsCalendar}
                              onChange={({ activeIndex }) =>
                                setItemIndex(activeIndex)
                              }
                              selectedItemIndex={itemIndex}
                            />
                            <DatePicker
                              idealDirection="bottom"
                              id="selectLists"
                              onChange={({ value }) => handleYearChange(value)}
                              selectLists={mapOptions[itemIndex.toString()]}
                              value={year}
                              localeData={bg}
                              errorMessage={
                                !hasYearValidationError
                                  ? undefined
                                  : "Моля, въведете година"
                              }
                            />
                          </Flex>
                        </Box>
                      </Flex>
                    </div>
                  </Box>
                </div>
                <div className="col-md-4">
                  <Box marginBottom={2}>
                    <TextField
                      id="model"
                      label="Модел"
                      onChange={(event) => {
                        handleModelChange(event);
                      }}
                      placeholder=""
                      type="text"
                      name="model"
                      value={model}
                      size={isMobile ? "sm" : "lg"}
                      errorMessage={
                        !hasModelValidationError
                          ? undefined
                          : "Моля, въведете модел"
                      }
                    />
                  </Box>
                </div>
                <div className="col-md-4">
                  <Box marginBottom={2}>
                    <SelectList
                      id="typeEngine"
                      label="Тип двигател"
                      onChange={(event, value) =>
                        handleTypeEngine(event, value)
                      }
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
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <Box marginBottom={2}>
                      <TextField
                        id="power"
                        label="Мощност"
                        onChange={(event, value) =>
                          handlePowerChange(event, value)
                        }
                        placeholder=""
                        type="number"
                        name="power"
                        value={power}
                        size={isMobile ? "sm" : "lg"}
                        errorMessage={
                          !hasPowerValidationError
                            ? undefined
                            : "Моля, въведете мощност"
                        }
                      />
                    </Box>
                  </div>
                  <div className="col-md-4">
                    <Box marginBottom={2}>
                      <SelectList
                        id="euroEmission"
                        label="Евростандарт"
                        onChange={(event, value) =>
                          handleEuroEmission(event, value)
                        }
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
                  </div>
                  <div className="col-md-4">
                    <Box marginBottom={2}>
                      <SelectList
                        id="transmission"
                        label="Скоростна кутия"
                        onChange={(event, value) =>
                          handleTransmission(event, value)
                        }
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
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <Box marginBottom={2}>
                    <SelectList
                      id="category"
                      label="Категория"
                      onChange={(event, value) => handleCategory(event, value)}
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
                </div>
                <div className="col-md-4">
                  <Box marginBottom={2}>
                    <TextField
                      id="mileage"
                      name="mileage"
                      label="Пробег"
                      onChange={(event, value) => handleМileage(event, value)}
                      placeholder=""
                      type="number"
                      value={mileage}
                      size={isMobile ? "sm" : "lg"}
                      errorMessage={
                        !hasMileageValidationError
                          ? undefined
                          : "Моля, въведете пробег"
                      }
                    />
                  </Box>
                </div>
                <div className="col-md-4">
                  <Box marginBottom={2}>
                    <TextField
                      id="color"
                      label="Цвят"
                      onChange={(event, value) => handleColor(event, value)}
                      placeholder=""
                      type="text"
                      size={isMobile ? "sm" : "lg"}
                      errorMessage={
                        !hasColorValidationError
                          ? undefined
                          : "Моля, въведете цвят"
                      }
                    />
                  </Box>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <Box
                    alignItems="start"
                    display="flex"
                    height="100%"
                    justifyContent="start"
                  >
                    <Box width="100%">
                      <TextArea
                        id="description"
                        name="description"
                        label="Описание"
                        onChange={(e) => {
                          setDescription(e.value);
                        }}
                        placeholder=""
                        value={description}
                        errorMessage={
                          !hasDescriptionValidationError
                            ? undefined
                            : "Моля, въведете описание"
                        }
                      />
                    </Box>
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
                <Label className="fw-bold">Снимки</Label>
                <Text>
                  <UploadImagesComponet images={images} setImages={setImages} />
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
