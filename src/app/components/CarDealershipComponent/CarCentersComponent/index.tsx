"use client";

import { Suspense, useState } from "react";
import { BannerSlim, Box, Button, TextArea, TextField } from "gestalt";
import { DatePicker } from "gestalt-datepicker";
import { bg } from "date-fns/locale";

import "./carCentersComponent.scss";
import Loader from "../../Loader";
import HomeComponent from "../../HomeComponent";

export default function CarCentersComponent() {
  const [city, setCity] = useState("");
  const [names, setNames] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [engine, setEngine] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState(new Date());
  const [vinNumber, setVinNumber] = useState("");

  const [hasCityValidationError, setHasCityValidationError] = useState(false);
  const [hasNamesValidationError, setHasNamesValidationError] = useState(false);
  const [hasPhoneValidationError, setHasPhoneValidationError] = useState(false);
  const [hasEmailValidationError, setHasEmailValidationError] = useState(false);
  const [hasModelValidationError, setHasModelValidationError] = useState(false);
  const [hasYearValidationError, setHasYearValidationError] = useState(false);
  const [hasEngineValidationError, setHasEngineValidationError] =
    useState(false);
  const [hasMessageValidationError, setHasMessageValidationError] =
    useState(false);
  const [hasDateValidationError, setHasDateValidationError] = useState(false);
  const [hasVinNumberValidationError, setHasVinNumberValidationError] =
    useState(false);
  const [isValidForm, setIsValidForm] = useState(true);
  const [messageValidation, setMessageValidation] = useState("");

  const validateForm = () => {
    // Validate city
    if (!city) {
      setHasCityValidationError(true);
      setIsValidForm(false);
    } else {
      setHasCityValidationError(false);
    }

    // Validate names
    if (!names) {
      setHasNamesValidationError(true);
      setIsValidForm(false);
    } else {
      setHasNamesValidationError(false);
    }

    // Validate phone
    if (!phone) {
      setIsValidForm(false);
      setHasPhoneValidationError(true);
    } else {
      setHasPhoneValidationError(false);
    }

    // Validate email
    if (!email) {
      setIsValidForm(false);
      setHasEmailValidationError(true);
    } else {
      setHasEmailValidationError(false);
    }

    // Validate model
    if (!model) {
      setIsValidForm(false);
      setHasModelValidationError(true);
    } else {
      setHasModelValidationError(false);
    }

    // Validate year
    if (!year) {
      setIsValidForm(false);
      setHasYearValidationError(true);
    } else {
      setHasYearValidationError(false);
    }

    // Validate engine
    if (!engine) {
      setIsValidForm(false);
      setHasEngineValidationError(true);
    } else {
      setHasEngineValidationError(false);
    }

    // Validate message
    if (!message) {
      setIsValidForm(false);
      setHasMessageValidationError(true);
    } else {
      setHasMessageValidationError(false);
    }
    // Validate date
    if (!date) {
      setIsValidForm(false);
      setHasDateValidationError(true);
    } else {
      setHasDateValidationError(false);
    }
    // Validate vin number
    if (!vinNumber) {
      setIsValidForm(false);
      setHasVinNumberValidationError(true);
    } else {
      setHasVinNumberValidationError(false);
    }

    // if () {

    // } else {

    // }
    
    setMessageValidation("Моля, попълнете празните полета");
  };

  const handleSubmit = async () => {
    validateForm();
    console.log("here");
  };

  return (
    <Suspense fallback={<Loader />}>
      <HomeComponent
        isHomePage={false}
        component={
          <>
            {!isValidForm && 
              <Box alignItems="center" display="flex" height="100%" padding={8}>
                <BannerSlim
                  iconAccessibilityLabel="Information"
                  message={messageValidation}
                  onDismiss={() => setIsValidForm(!isValidForm)}
                  type="error"
                />
              </Box>
            }
            <div className="contact-wrapper">
              <div className="title-contact">
                <h1 className="pageHeader mb-4">Автоцентрове</h1>
              </div>
              <div className="description-contact pageContent">
                <div className="row mb-3">
                  <h5>
                    Запази своя час за обслужване, като попълниш следната форма:
                  </h5>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <Box marginBottom={6}>
                      <TextField
                        id="city"
                        name="city"
                        label="Град"
                        onChange={({ value }) => {
                          setCity(value);
                        }}
                        type="text"
                        value={city}
                        errorMessage={
                          !hasCityValidationError
                            ? undefined
                            : "Моля, въведете град"
                        }
                      />
                    </Box>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <Box marginBottom={6}>
                      <TextField
                        id="names"
                        name="names"
                        label="Име и Фамилия"
                        onChange={({ value }) => {
                          setNames(value);
                        }}
                        type="text"
                        value={names}
                        errorMessage={
                          !hasNamesValidationError
                            ? undefined
                            : "Моля, въведете име и фамилия"
                        }
                      />
                    </Box>
                  </div>
                  <div className="col-md-4">
                    <Box marginBottom={6}>
                      <TextField
                        id="email"
                        name="email"
                        label="Имейл"
                        onChange={({ value }) => {
                          setEmail(value);
                        }}
                        type="email"
                        value={email}
                        errorMessage={
                          !hasEmailValidationError
                            ? undefined
                            : "Моля, въведете имейл"
                        }
                      />
                    </Box>
                  </div>
                  <div className="col-md-4">
                    <Box marginBottom={6}>
                      <TextField
                        id="phone"
                        name="phone"
                        label="Телефон"
                        onChange={({ value }) => {
                          setPhone(value);
                        }}
                        type="text"
                        value={phone}
                        errorMessage={
                          !hasPhoneValidationError
                            ? undefined
                            : "Моля, въведете телефон"
                        }
                      />
                    </Box>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <Box marginBottom={6}>
                      <TextField
                        id="model"
                        name="model"
                        label="Модел"
                        onChange={({ value }) => {
                          setModel(value);
                        }}
                        type="text"
                        value={model}
                        errorMessage={
                          !hasModelValidationError
                            ? undefined
                            : "Моля, въведете модел"
                        }
                      />
                    </Box>
                  </div>
                  <div className="col-md-4">
                    <Box marginBottom={6}>
                      <TextField
                        id="year"
                        type="text"
                        name="year"
                        label="Година"
                        onChange={({ value }) => {
                          setYear(value);
                        }}
                        value={year}
                        errorMessage={
                          !hasYearValidationError
                            ? undefined
                            : "Моля, въведете година"
                        }
                      />
                    </Box>
                  </div>
                  <div className="col-md-4">
                    <Box marginBottom={6}>
                      <TextField
                        id="engine"
                        name="engine"
                        label="Вид двигател"
                        onChange={({ value }) => {
                          setEngine(value);
                        }}
                        type="text"
                        value={engine}
                        errorMessage={
                          !hasEngineValidationError
                            ? undefined
                            : "Моля, въведете вид двигател"
                        }
                      />
                    </Box>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <Box marginBottom={6}>
                      <TextArea
                        id="message"
                        name="message"
                        label="Съобщение"
                        onChange={({ value }) => setMessage(value)}
                        value={message}
                        errorMessage={
                          !hasMessageValidationError
                            ? undefined
                            : "Моля, въведете съобщение"
                        }
                      />
                    </Box>
                  </div>
                  <div className="col-md-4">
                    <DatePicker
                      label="Дата и час"
                      placeholder=""
                      localeData={bg}
                      idealDirection="down"
                      minDate={new Date()}
                      value={date}
                      id="example-errorMessage"
                      onChange={({ value }) => setDate(value)}
                      errorMessage={
                        !hasDateValidationError
                          ? undefined
                          : "Моля, изберете дата и час"
                      }
                    />
                  </div>
                  <div className="col-md-4">
                    <Box marginBottom={6}>
                      <div className="pb-2">
                        <TextField
                          id="vin_number"
                          name="vin_number"
                          label="VIN номер"
                          onChange={({ value }) => {
                            setVinNumber(value);
                          }}
                          type="text"
                          value={vinNumber}
                          helperText="Това е идентификационният номер на вашият автомобил."
                          errorMessage={
                            !hasVinNumberValidationError
                              ? undefined
                              : "Моля, въведете VIN номер"
                          }
                        />
                      </div>
                    </Box>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-end">
                    <Button
                      type="button"
                      text="Продължи"
                      color="blue"
                      size="lg"
                      onClick={handleSubmit}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      />
    </Suspense>
  );
}
