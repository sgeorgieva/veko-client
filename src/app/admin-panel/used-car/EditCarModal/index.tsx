import { useEffect, useState } from "react";
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
  SegmentedControl,
  BannerSlim,
} from "gestalt";
import axios from "axios";
import { DatePicker } from "gestalt-datepicker";
import { bg } from "date-fns/locale";
import { endpoints, linkUrl } from "../../../../../utils/functions";
import UploadImagesComponent from "../../../../app/components/UploadImagesComponent";

import "./editCarModal.scss";
export default function EditCarModal({
  isEditCarModalOpen,
  setIsEditCarModalOpen,
  setIsDeleteCarModalOpen,
  isMobile,
  handleFetchCarsData,
  carInfo,
}: any) {
  let newItems = null;
  const mapOptions = { 0: ["year", "month"] };
  const itemsCalendar = ["Month & Year"];
  const [itemIndex, setItemIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [year, setYear] = useState(carInfo.year);
  const [model, setModel] = useState(carInfo?.model);
  const [description, setDescription] = useState(carInfo?.description);
  const [typeEngine, setTypeEngine] = useState(carInfo?.typeEngine);
  const [power, setPower] = useState(carInfo?.power);
  const [euroEmission, setEuroEmission] = useState(carInfo?.euroEmission);
  const [transmission, setTransmission] = useState(carInfo?.transmission);
  const [category, setCategory] = useState(carInfo?.category);
  const [mileage, setМileage] = useState(carInfo?.mileage);
  const [color, setColor] = useState(carInfo?.color);
  const [autoStabilityControlCheck, setAutoStabilityControlCheck] = useState(
    JSON.parse(carInfo?.attributes)?.autoStabilityControlCheck
  );
  const [antiblockSystemCheck, setAntiBlockSystemCheck] = useState(
    JSON.parse(carInfo?.attributes)?.antiblockSystemCheck
  );
  const [backAirPillowsCheck, setBackAirPillowsCheck] = useState(
    JSON.parse(carInfo?.attributes)?.backAirPillowsCheck
  );
  const [frontAirPillowsCheck, setFrontAirPillowsCheck] = useState(
    JSON.parse(carInfo?.attributes)?.frontAirPillowsCheck
  );
  const [lateralAirPillowsCheck, setLateralAirPillowsCheck] = useState(
    JSON.parse(carInfo?.attributes)?.lateralAirPillowsCheck
  );
  const [parktronicCheck, setParktronicCheck] = useState(
    JSON.parse(carInfo?.attributes)?.parktronicCheck
  );
  const [doorsCheck, setDoorsCheck] = useState(
    JSON.parse(carInfo?.attributes)?.doorsCheck
  );
  const [alloyWheelsCheck, setAlloyWheelsCheck] = useState(
    JSON.parse(carInfo?.attributes)?.alloyWheelsCheck
  );
  const [halogenHeadlightsCheck, setHalogenHeadlightsCheck] = useState(
    JSON.parse(carInfo?.attributes)?.halogenHeadlightsCheck
  );
  const [protectionCheck, setProtectionCheck] = useState(
    JSON.parse(carInfo?.attributes)?.protectionCheck
  );
  const [immobilizerCheck, setImmobilizerCheck] = useState(
    JSON.parse(carInfo?.attributes)?.immobilizerCheck
  );
  const [centralLockingCheck, setCentralLockingCheck] = useState(
    JSON.parse(carInfo?.attributes)?.centralLockingCheck
  );
  const [bluetoothHandsfreeSystemCheck, setBluetoothHandsfreeSystemCheck] =
    useState(JSON.parse(carInfo?.attributes)?.bluetoothHandsfreeSystemCheck);
  const [audioConsumablesCheck, setAudioConsumablesCheck] = useState(
    JSON.parse(carInfo?.attributes)?.audioConsumablesCheck
  );
  const [boardComputerCheck, setBoardComputerCheck] = useState(
    JSON.parse(carInfo?.attributes)?.boardComputerCheck
  );
  const [lightSensorCheck, setLightSensorCheck] = useState(
    JSON.parse(carInfo?.attributes)?.lightSensorCheck
  );
  const [electricMirrorsCheck, setElectricMirrorsCheck] = useState(
    JSON.parse(carInfo?.attributes)?.electricMirrorsCheck
  );
  const [electricGlassCheck, setElectricGlassCheck] = useState(
    JSON.parse(carInfo?.attributes)?.electricGlassCheck
  );
  const [climatronicCheck, setClimatronicCheck] = useState(
    JSON.parse(carInfo?.attributes)?.climatronicCheck
  );
  const [steeringWheelAdjustmentCheck, setSteeringWheelAdjustmentCheck] =
    useState(JSON.parse(carInfo?.attributes)?.steeringWheelAdjustmentCheck);
  const [rainSensorCheck, setRainSensorCheck] = useState(
    JSON.parse(carInfo?.attributes)?.rainSensorCheck
  );
  const [powerSteeringCheck, setPowerSteeringCheck] = useState(
    JSON.parse(carInfo?.attributes)?.powerSteeringCheck
  );
  const [autopilotCheck, setAutopilotCheck] = useState(
    JSON.parse(carInfo?.attributes)?.autopilotCheck
  );
  const [newImportationCheck, setNewImportationCheck] = useState(
    JSON.parse(carInfo?.attributes)?.newImportationCheck
  );
  const [stereoCheck, setStereoCheck] = useState(
    JSON.parse(carInfo?.attributes)?.stereoCheck
  );
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

  useEffect(() => {
    let count = 0;

    for (const [key, value] of Object.entries(JSON.parse(carInfo.attributes))) {
      value === true ? (count += 1) : false;
    }

    setAllCheckboxsesCheck(
      count === Object.values(JSON.parse(carInfo.attributes)).length
    );
  }, [carInfo]);

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

  const fetchEditCar = async (id: number) => {
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
        `${linkUrl()}${endpoints.updateCar}${id}`,
        formData,
        {
          headers: {
            Accept: "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Replace with your actual authorization token
          },
        }
      );
      if (response.status === 200) {
        setIsEditCarModalOpen(false);
        handleFetchCarsData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseOnOutsideClick = () => {
    setIsEditCarModalOpen(false);
  };

  const handleEditCar = (e: any) => {
    validateForm();

    if (
      !hasYearValidationError &&
      !hasModelValidationError &&
      !hasPowerValidationError &&
      !hasDescriptionValidationError &&
      !hasMileageValidationError &&
      !hasColorValidationError &&
      !hasImagesValidationError
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
          centralLockingCheck: value.centralLockingCheck,
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
      fetchEditCar(carInfo?.id);
    }
  };

  const handleCancelAddingCar = () => {
    setIsEditCarModalOpen(!setIsEditCarModalOpen);
  };

  const handleYearChange = (value: string) => {
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

    if (
      !model ||
      !year ||
      !power ||
      !description ||
      !mileage ||
      !color ||
      !images
    ) {
      setIsValidForm(false);
      setMessageValidation("Моля, попълнете празните полета");
    }
  };

  return (
    <Box padding={6}>
      {isEditCarModalOpen && (
        <Layer zIndex={new FixedZIndex(11)}>
          <OverlayPanel
            size={isMobile ? "sm" : "lg"}
            accessibilityDismissButtonLabel="Close edit cars overlay panel"
            accessibilityLabel="Edit cars"
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
                    onClick={(e) => handleEditCar(e)}
                    size={isMobile ? "sm" : "lg"}
                    text="Редактирай"
                    type="submit"
                  />
                </Flex>
              </Flex>
            }
            onDismiss={() => setIsEditCarModalOpen(false)}
            heading={
              isMobile ? "" : `Редактиране на автомобил ${carInfo.model}`
            }
          >
            {isMobile && (
              <h3 className="fw-bold text-center pb-3">
                Редактиране на автомобил {carInfo.model}
              </h3>
            )}
            {messageValidation && (
              <Box
                alignItems="center"
                display="flex"
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
                          idealDirection="top"
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
              <Box marginBottom={2}>
                <SelectList
                  id="typeEngine"
                  label="Тип двигател"
                  onChange={(event, value) => handleTypeEngine(event, value)}
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
                  onChange={(event, value) => handlePowerChange(event, value)}
                  placeholder=""
                  type="text"
                  value={power}
                  size={isMobile ? "sm" : "lg"}
                  errorMessage={
                    !hasPowerValidationError
                      ? undefined
                      : "Моля, въведете мощност"
                  }
                />
              </Box>
              <Box marginBottom={2}>
                <SelectList
                  id="euroEmission"
                  label="Евростандарт"
                  onChange={(event, value) => handleEuroEmission(event, value)}
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
                  onChange={(event, value) => handleTransmission(event, value)}
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
              <Box marginBottom={2}>
                <TextField
                  id="mileage"
                  label="Пробег"
                  onChange={(event, value) => handleМileage(event, value)}
                  placeholder=""
                  type="text"
                  value={mileage}
                  size={isMobile ? "sm" : "lg"}
                  errorMessage={
                    !hasMileageValidationError
                      ? undefined
                      : "Моля, въведете пробег"
                  }
                />
              </Box>
              <Box marginBottom={2}>
                <TextField
                  id="color"
                  label="Цвят"
                  onChange={(event, value) => handleColor(event, value)}
                  placeholder=""
                  type="text"
                  size={isMobile ? "sm" : "lg"}
                  value={color}
                  errorMessage={
                    !hasColorValidationError ? undefined : "Моля, въведете цвят"
                  }
                />
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
                    errorMessage={
                      !hasDescriptionValidationError
                        ? undefined
                        : "Моля, въведете описание"
                    }
                  />
                </Box>
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
                  <UploadImagesComponent
                    images={images}
                    setImages={setImages}
                  />
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
                    text="Редактирай"
                    onClick={(e) => handleEditCar(e)}
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
