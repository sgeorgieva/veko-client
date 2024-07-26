"use client";

import { Suspense, useState } from "react";
import { BannerSlim, Box, Button, Label, TextArea, TextField } from "gestalt";
import { DatePicker } from "gestalt-datepicker";
import { TimePicker } from "antd";
import { bg } from "date-fns/locale";
import dayjs from "dayjs";
import HomeComponent from "../../HomeComponent";
import Loader from "../../Loader";

import "./carCentersComponent.scss";
const generateDatesWithoutSundays = (start, end) => {
  const dates = [];
  let currentDate = new Date(start);
  while (currentDate <= end) {
      if (currentDate.getDay() !== 0) { // 0 is Sunday
          dates.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
};

export default function CarCentersComponent() {
  const [city, setCity] = useState("");
  const [names, setNames] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [engine, setEngine] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState(null);
  // const [startDate, setStartDate] = useState(null);
  const [time, setTime] = useState("");
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
  const [hasTimeValidationError, setHasTimeValidationError] = useState(false);
  const [hasVinNumberValidationError, setHasVinNumberValidationError] =
    useState(false);
  const [isValidForm, setIsValidForm] = useState(true);
  const [messageValidation, setMessageValidation] = useState("");
  const format = "HH:mm";

  const [startDate, setStartDate] = useState(null);
  const start = new Date();
  const end = new Date(start.getFullYear(), start.getMonth() + 12, 0); // Next month
  const availableDates = generateDatesWithoutSundays(start, end);
  const [currentHours, setCurrentHours] = useState();

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

    // Validate time
    if (!time) {
      setIsValidForm(false);
      setHasTimeValidationError(true);
    } else {
      setHasTimeValidationError(false);
    }

    // console.log('time', time);
    // console.log('hasTimeValidationError', hasTimeValidationError);
    
    // Validate vin number
    if (!vinNumber) {
      setIsValidForm(false);
      setHasVinNumberValidationError(true);
    } else {
      setHasVinNumberValidationError(false);
    }

    setMessageValidation("Моля, попълнете празните полета");
  };

  const handleSubmit = async () => {
    validateForm();
    console.log("here in validate form");
  };

  return (
    <Suspense fallback={<Loader />}>
      <HomeComponent
        isHomePage={false}
        component={
          <>
            {!isValidForm && (
              <Box alignItems="center" display="flex" height="100%" padding={8}>
                <BannerSlim
                  iconAccessibilityLabel="Information"
                  message={messageValidation}
                  onDismiss={() => setIsValidForm(!isValidForm)}
                  type="error"
                />
              </Box>
            )}
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
                    <div className="row align-items-center">
                      <div className="col-md-8">
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          includeDates={availableDates}
                          label="Дата"
                          placeholderText={`${new Date()}`}
                          localeData={bg}
                          idealDirection="down"
                          minDate={new Date()}
                          id="example-errorMessage"
                          errorMessage={
                            !hasDateValidationError
                              ? undefined
                              : "Моля, изберете дата"
                            }
                          />
                      </div>
                      <div className="col-md-4">
                        <Label htmlFor="time">Час</Label>
                        <TimePicker
                          className={hasTimeValidationError ? 'error-input' : ''}
                          status={hasTimeValidationError ? 'error' : 'success'}
                          disabledHours={(hour) => {
                            console.log('hour', hour);
                            if (startDate && startDate?.value.getDay() === 6) {
                              console.log('here hour 1');
                              
                              return [0, 1, 2, 3, 4, 5, 6, 7, 8, 15, 16, 17, 18, 19, 20, 21, 22, 23];
                            } else if (startDate && startDate?.value.getDay() === 6 && hour === 14) {
                              console.log('here hour 2');
                              setCurrentHours(hour);
                              return [0];
                            } 
                            else {
                              console.log('here hour 3');
                              setCurrentHours(hour);
                              return [0, 1, 2, 3, 4, 5, 6, 7, 18, 19, 20, 21, 22, 23]
                            }
                          }}
                          minuteStep={15}
                          secondStep={10}
                          disabledMinutes={ 
                            (time) => {
                              console.log('currentHours', currentHours);
                              
                              if (startDate && startDate?.value.getDay() !== 6 && time === 17) {
                                // console.log('here', startDate?.value.getDay());
                                return [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
                              } else if (startDate && startDate?.value.getDay() !== 6 && time == '08') {
                                console.log('here2', startDate?.value.getDay());
                                return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
                              } else if (startDate && startDate?.value.getDay() === 6 && currentHours === 14) {
                                console.log('here3');
                                
                                return [15, 30, 45];
                                // console.log('here3', startDate?.value.getDay());
                                // return [9, 10, 11, 12, 13, 14];
                              } else {
                                return [];
                              }
                            }
                          }
                          placeholder="00:00"
                          value={time}
                          onChange={({ value }) => setTime(value)}
                          defaultValue={dayjs("12:08", format)}
                          format={format}
                          size="large"
                        />
                        {hasTimeValidationError && 
                          <div className="hjj zI7 iyn Hsu">
                            <div className="tBJ dyH iFc dR0 sOY zDA IZT swG">
                              <span className="MFi" id="example-errorMessage-error">
                                <div role="alert" className="zI7 iyn Hsu">
                                  <div className="KS5 hs0 un8 tkf A6h">
                                    <div className="xuA">
                                      <svg aria-hidden="true" aria-label="" className="X7a gUZ U9O kVc" height="16" role="img" viewBox="0 0 24 24" width="16">
                                        <path d="M23.6 18.5 14.63 2.53a3 3 0 0 0-5.24 0L.4 18.5A3.02 3.02 0 0 0 3 23h18a3 3 0 0 0 2.6-4.5m-7.54-1.06a1.5 1.5 0 0 1 0 2.12 1.5 1.5 0 0 1-2.12 0L12 17.62l-1.95 1.94a1.5 1.5 0 0 1-2.12 0 1.5 1.5 0 0 1 0-2.12l1.94-1.94-1.94-1.94a1.5 1.5 0 0 1 0-2.12 1.5 1.5 0 0 1 2.12 0L12 13.38l1.94-1.94a1.5 1.5 0 0 1 2.12 0 1.5 1.5 0 0 1 0 2.12l-1.94 1.94z"></path>
                                      </svg>
                                    </div>
                                    <div className="xuA">Моля, изберете час</div>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        }
                      </div>
                    </div>
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
