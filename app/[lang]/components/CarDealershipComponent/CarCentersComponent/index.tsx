'use client'

import React, { Suspense, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import {
  BannerSlim,
  Box,
  Button,
  Flex,
  Label,
  SegmentedControl,
  SelectList,
  TextArea,
  TextField
} from 'gestalt'
import { DatePicker } from 'gestalt-datepicker'
import { TimePicker } from 'antd'
import { bg } from 'date-fns/locale'
import dayjs from 'dayjs'
import { pdf, PDFViewer } from '@react-pdf/renderer'
import HomeComponent from '../../HomeComponent/page'
import Loader from '../../Loader'
import MyDocument from './appoitments'

import './carCentersComponent.scss'
import axios from 'axios'
import { endpoints, linkUrl } from '../../../../../utils/functions'

const generateDatesWithoutSundays = (start, end) => {
  const dates = []
  let currentDate = new Date(start)
  while (currentDate <= end) {
    if (currentDate.getDay() !== 0) {
      // 0 is Sunday
      dates.push(new Date(currentDate))
    }
    currentDate.setDate(currentDate.getDate() + 1)
  }
  return dates
}

export default function CarCentersComponent({
  translations,
  title
}: {
  title: string
  translations: any
}) {
  const [items, setItems] = useState([])
  const [city, setCity] = useState('')
  const [names, setNames] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState(new Date())
  const [engine, setEngine] = useState('gasoline')
  const [message, setMessage] = useState('')
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState('')
  const [vinNumber, setVinNumber] = useState('')
  const mapOptions = { 0: ['year', 'month'] }
  const itemsCalendar = ['Month & Year']
  const [itemIndex, setItemIndex] = useState(0)

  const [hasCityValidationError, setHasCityValidationError] = useState(false)
  const [hasNamesValidationError, setHasNamesValidationError] = useState(false)
  const [hasPhoneValidationError, setHasPhoneValidationError] = useState(false)
  const [hasEmailValidationError, setHasEmailValidationError] = useState(false)
  const [hasModelValidationError, setHasModelValidationError] = useState(false)
  const [hasYearValidationError, setHasYearValidationError] = useState(false)
  const [hasEngineValidationError, setHasEngineValidationError] =
    useState(false)
  const [hasMessageValidationError, setHasMessageValidationError] =
    useState(false)
  const [hasDateValidationError, setHasDateValidationError] = useState(false)
  const [hasTimeValidationError, setHasTimeValidationError] = useState(false)
  const [hasVinNumberValidationError, setHasVinNumberValidationError] =
    useState(false)
  const [isValidForm, setIsValidForm] = useState(true)
  const [messageValidation, setMessageValidation] = useState('')
  const format = 'HH:mm'

  const [startDate, setStartDate] = useState(null)
  const start = new Date()
  const end = new Date(start.getFullYear(), start.getMonth() + 12, 0) // Next month
  const availableDates = generateDatesWithoutSundays(start, end)
  const [currentHours, setCurrentHours] = useState()
  const [isMobile, setIsMobile] = useState(false)
  const [loading, setLoading] = useState(false)
  const [fileName, setFileName] = useState('')
  const [file, setFile] = useState(null)

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true)
    }
  }, [])

  const handlePdf = async (name, pdfDocumentComponent, items) => {
    setFileName(name)
    setLoading(false)
    let blobConvertFile = null
    let fileBlob = null

    if (Object.keys(items).length > 0) {
      blobConvertFile = await pdf(pdfDocumentComponent).toBlob()
    }

    if (blobConvertFile !== null) {
      fileBlob = await new File([blobConvertFile], `VEKO-OIL-appointment.pdf`, {
        type: 'application/pdf'
      })
      setFile(fileBlob)
    }
  }

  useEffect(() => {
    async function fetchPdfData() {
      if (file) {
        const formData = new FormData()
        formData.append('city', items[0].city)
        formData.append('date', items[0].date)
        formData.append('email', items[0].email)
        formData.append('engine', items[0].engine)
        formData.append('message', items[0].message)
        formData.append('model', items[0].model)
        formData.append('names', items[0].names)
        formData.append('phone', items[0].phone)
        formData.append('time', items[0].time)
        formData.append('vinNnumber', items[0].vinNumber)
        formData.append('year', items[0].year)
        formData.append('file', file)

        try {
          const response = await axios.post(
            `${linkUrl()}${endpoints.autocenters}`,
            formData,
            {
              headers: {
                Accept: 'application/json'
              }
            }
          )
          if (response.status === 200) {
            // setIsNewsModalOpen(false);
            console.log('response', response)
          }
        } catch (error) {
          console.error(error)
        }
      }
    }

    fetchPdfData()
  }, [file])

  const validateForm = () => {
    // Validate city
    if (!city) {
      setHasCityValidationError(true)
      setIsValidForm(false)
    } else {
      setHasCityValidationError(false)
    }

    // Validate names
    if (!names) {
      setHasNamesValidationError(true)
      setIsValidForm(false)
    } else {
      setHasNamesValidationError(false)
    }

    // Validate phone
    if (!phone) {
      setIsValidForm(false)
      setHasPhoneValidationError(true)
    } else {
      setHasPhoneValidationError(false)
    }

    // Validate email
    if (!email) {
      setIsValidForm(false)
      setHasEmailValidationError(true)
    } else {
      setHasEmailValidationError(false)
    }

    // Validate model
    if (!model) {
      setIsValidForm(false)
      setHasModelValidationError(true)
    } else {
      setHasModelValidationError(false)
    }

    // Validate year
    if (!year) {
      setIsValidForm(false)
      setHasYearValidationError(true)
    } else {
      setHasYearValidationError(false)
    }

    // Validate engine
    if (!engine) {
      setIsValidForm(false)
      setHasEngineValidationError(true)
    } else {
      setHasEngineValidationError(false)
    }

    // Validate message
    if (!message) {
      setIsValidForm(false)
      setHasMessageValidationError(true)
    } else {
      setHasMessageValidationError(false)
    }
    // Validate date
    if (!date) {
      setIsValidForm(false)
      setHasDateValidationError(true)
    } else {
      setHasDateValidationError(false)
    }

    // Validate time
    if (!time) {
      setIsValidForm(false)
      setHasTimeValidationError(true)
    } else {
      setHasTimeValidationError(false)
    }

    // Validate vin number
    if (!vinNumber) {
      setIsValidForm(false)
      setHasVinNumberValidationError(true)
    } else {
      setHasVinNumberValidationError(false)
    }

    setMessageValidation(translations.error_message_validation)
  }

  const handleSubmit = async () => {
    validateForm()

    if (
      !hasCityValidationError &&
      !hasPhoneValidationError &&
      !hasEmailValidationError &&
      !hasModelValidationError &&
      !hasYearValidationError &&
      !hasEngineValidationError &&
      !hasDateValidationError &&
      !hasTimeValidationError &&
      !hasVinNumberValidationError
    ) {
      setIsValidForm(true)
      setItems([
        {
          city,
          names,
          phone,
          email,
          model,
          year: dayjs(year).format('YYYY-MM'),
          engine,
          message,
          date: dayjs(date).format('YYYY-MM-DD'),
          time: dayjs(time).format('HH:mm'),
          vinNumber
        }
      ])
      handlePdf(`VEKO-OIL-appointment.pdf`, <MyDocument items={items} />, items)
    } else {
      setIsValidForm(false)
    }
  }

  const handleNamesChange = event => {
    setNames(event.value)
  }

  const handleEmailChange = event => {
    setEmail(event.value)
  }

  const handlePhoneChange = event => {
    setPhone(event.value)
  }

  const handleModelChange = event => {
    setModel(event.value)
  }

  const handleEngineChange = event => {
    setEngine(event.value)
  }

  const handleMessageChange = event => {
    setMessage(event.value)
  }

  const handleYearChange = value => {
    setYear(value)
  }

  const handleTimeChange = time => {
    setTime(time.$d.getTime())
  }

  const handleVinNumberChange = event => {
    setVinNumber(event.value)
  }

  return (
    <Suspense fallback={<Loader />}>
      <HomeComponent
        isHomePage={false}
        component={
          <>
            {messageValidation && (
              <Box
                alignItems='center'
                display='flex'
                height='100%'
                paddingY={8}
              >
                <BannerSlim
                  iconAccessibilityLabel='Information'
                  message={messageValidation}
                  onDismiss={() => setIsValidForm(!isValidForm)}
                  type='error'
                />
              </Box>
            )}
            <div className='contact-wrapper'>
              <div className='title-contact'>
                <h1 className='pageHeader mb-4'>{title}</h1>
              </div>
              <div className='description-contact pageContent'>
                <div className='row mb-3'>
                  {isMobile ? (
                    <h6>{translations.subtitle}</h6>
                  ) : (
                    <h5>{translations.subtitle}</h5>
                  )}
                </div>
                <div className='row'>
                  <div className='col-md-4'>
                    <Box marginBottom={6}>
                      <TextField
                        id='city'
                        name='city'
                        label={`${translations.city}`}
                        onChange={({ value }) => {
                          setCity(value)
                        }}
                        type='text'
                        size={isMobile ? 'md' : 'lg'}
                        value={city}
                        errorMessage={
                          !hasCityValidationError
                            ? undefined
                            : translations.city_validation
                        }
                      />
                    </Box>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-4'>
                    <Box marginBottom={6}>
                      <TextField
                        id='names'
                        name='names'
                        label={`${translations.names}`}
                        onChange={(event, value) => {
                          handleNamesChange(event, value)
                        }}
                        type='text'
                        size={isMobile ? 'md' : 'lg'}
                        value={names}
                        errorMessage={
                          !hasNamesValidationError
                            ? undefined
                            : translations.names_validation
                        }
                      />
                    </Box>
                  </div>
                  <div className='col-md-4'>
                    <Box marginBottom={6}>
                      <TextField
                        id='email'
                        name='email'
                        label={`${translations.email}`}
                        onChange={(event, value) => {
                          handleEmailChange(event, value)
                        }}
                        type='email'
                        size={isMobile ? 'md' : 'lg'}
                        value={email}
                        errorMessage={
                          !hasEmailValidationError
                            ? undefined
                            : translations.email_validation
                        }
                      />
                    </Box>
                  </div>
                  <div className='col-md-4'>
                    <Box marginBottom={6}>
                      <TextField
                        id='phone'
                        name='phone'
                        label={`${translations.phone}`}
                        onChange={(event, value) => {
                          handlePhoneChange(event, value)
                        }}
                        size={isMobile ? 'md' : 'lg'}
                        type='text'
                        value={phone}
                        errorMessage={
                          !hasPhoneValidationError
                            ? undefined
                            : translations.phone_validation
                        }
                      />
                    </Box>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-4'>
                    <Box marginBottom={6}>
                      <TextField
                        id='model'
                        name='model'
                        label={`${translations.model}`}
                        size={isMobile ? 'md' : 'lg'}
                        onChange={(event, value) => {
                          handleModelChange(event, value)
                        }}
                        type='text'
                        value={model}
                        errorMessage={
                          !hasModelValidationError
                            ? undefined
                            : translations.model_validation
                        }
                      />
                    </Box>
                  </div>
                  <div className='col-md-4'>
                    <Box marginBottom={6}>
                      <Label htmlFor='year'>{translations.year}</Label>
                      <div className='datepicker'>
                        <Flex
                          alignItems='start'
                          height='100%'
                          justifyContent='center'
                          width='100%'
                        >
                          <Box padding={2}>
                            <Flex direction='column' gap={4} width='100%'>
                              <SegmentedControl
                                items={itemsCalendar}
                                onChange={({ activeIndex }) =>
                                  setItemIndex(activeIndex)
                                }
                                selectedItemIndex={itemIndex}
                              />
                              <DatePicker
                                idealDirection='right'
                                id='selectLists'
                                onChange={({ value }) =>
                                  handleYearChange(value)
                                }
                                selectLists={mapOptions[itemIndex.toString()]}
                                value={year}
                                localeData={bg}
                                errorMessage={
                                  !hasYearValidationError
                                    ? undefined
                                    : 'Моля, въведете година'
                                }
                              />
                            </Flex>
                          </Box>
                        </Flex>
                      </div>
                    </Box>
                  </div>
                  <div className='col-md-4'>
                    <Box marginBottom={6}>
                      <SelectList
                        id='selectlistexample1'
                        label={`${translations.engine}`}
                        onChange={(event, value) =>
                          handleEngineChange(event, value)
                        }
                        size={isMobile ? 'md' : 'lg'}
                      >
                        {[
                          { label: translations.gasoline, value: 'gasoline' },
                          { label: translations.diesel, value: 'diesel' },
                          { label: translations.hybrid, value: 'hybrid' },
                          { label: translations.gas, value: 'gas' },
                          { label: translations.electric, value: 'electric' }
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
                <div className='row'>
                  <div className='col-md-4'>
                    <Box marginBottom={6}>
                      <TextArea
                        id='message'
                        name='message'
                        label={`${translations.message}`}
                        onChange={(event, value) => {
                          handleMessageChange(event, value)
                        }}
                        value={message}
                      />
                    </Box>
                  </div>
                  <div className='col-md-4'>
                    <div className='row align-items-center'>
                      <div className='col-md-8'>
                        <DatePicker
                          selected={startDate}
                          onChange={date => setStartDate(date)}
                          includeDates={availableDates}
                          placeholderText={`${new Date()}`}
                          localeData={bg}
                          idealDirection='right'
                          minDate={new Date()}
                          id='example-errorMessage'
                          dateFormat='MM/yyyy'
                          startDate={startDate}
                          availableDates={availableDates}
                          hasDateValidationError={hasDateValidationError}
                          setStartDate={setStartDate}
                          bg={bg}
                          label={`${translations.date}`}
                          date={date}
                          value={date}
                          errorMessage={
                            !hasDateValidationError
                              ? undefined
                              : translations.date
                          }
                        />
                      </div>
                      <div className='col-md-4'>
                        <Label htmlFor='time'>{translations.hour}</Label>
                        <TimePicker
                          className={
                            hasTimeValidationError ? 'error-input' : ''
                          }
                          status={hasTimeValidationError ? 'error' : 'success'}
                          disabledHours={hour => {
                            // console.log("hour", hour);
                            if (startDate && startDate?.value.getDay() === 6) {
                              // console.log("here hour 1");

                              return [
                                0, 1, 2, 3, 4, 5, 6, 7, 8, 15, 16, 17, 18, 19,
                                20, 21, 22, 23
                              ]
                            } else if (
                              startDate &&
                              startDate?.value.getDay() === 6 &&
                              hour === 14
                            ) {
                              // console.log("here hour 2");
                              setCurrentHours(hour)
                              return [0]
                            } else {
                              // console.log("here hour 3");
                              setCurrentHours(hour)
                              return [
                                0, 1, 2, 3, 4, 5, 6, 7, 18, 19, 20, 21, 22, 23
                              ]
                            }
                          }}
                          minuteStep={15}
                          secondStep={10}
                          disabledMinutes={time => {
                            // console.log("currentHours", currentHours);

                            if (
                              startDate &&
                              startDate?.value.getDay() !== 6 &&
                              time === 17
                            ) {
                              // console.log('here', startDate?.value.getDay());
                              return [
                                31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
                                43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
                                55, 56, 57, 58, 59
                              ]
                            } else if (
                              startDate &&
                              startDate?.value.getDay() !== 6 &&
                              time == '08'
                            ) {
                              // console.log("here2", startDate?.value.getDay());
                              return [
                                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
                                14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
                                26, 27, 28, 29
                              ]
                            } else if (
                              startDate &&
                              startDate?.value.getDay() === 6 &&
                              currentHours === 14
                            ) {
                              // console.log("here3");

                              return [15, 30, 45]
                              // console.log('here3', startDate?.value.getDay());
                              // return [9, 10, 11, 12, 13, 14];
                            } else {
                              return []
                            }
                          }}
                          placeholder='00:00'
                          onOk={time => {
                            handleTimeChange(time)
                          }}
                          // defaultValue={dayjs("12:08", format)}
                          format={format}
                          size='large'
                        />
                        {hasTimeValidationError && (
                          <div className='hjj zI7 iyn Hsu'>
                            <div className='tBJ dyH iFc dR0 sOY zDA IZT swG'>
                              <span
                                className='MFi'
                                id='example-errorMessage-error'
                              >
                                <div role='alert' className='zI7 iyn Hsu'>
                                  <div className='KS5 hs0 un8 tkf A6h'>
                                    <div className='xuA'>
                                      <svg
                                        aria-hidden='true'
                                        aria-label=''
                                        className='X7a gUZ U9O kVc'
                                        height='16'
                                        role='img'
                                        viewBox='0 0 24 24'
                                        width='16'
                                      >
                                        <path d='M23.6 18.5 14.63 2.53a3 3 0 0 0-5.24 0L.4 18.5A3.02 3.02 0 0 0 3 23h18a3 3 0 0 0 2.6-4.5m-7.54-1.06a1.5 1.5 0 0 1 0 2.12 1.5 1.5 0 0 1-2.12 0L12 17.62l-1.95 1.94a1.5 1.5 0 0 1-2.12 0 1.5 1.5 0 0 1 0-2.12l1.94-1.94-1.94-1.94a1.5 1.5 0 0 1 0-2.12 1.5 1.5 0 0 1 2.12 0L12 13.38l1.94-1.94a1.5 1.5 0 0 1 2.12 0 1.5 1.5 0 0 1 0 2.12l-1.94 1.94z'></path>
                                      </svg>
                                    </div>
                                    <div className='xuA'>
                                      {translations.hour_validation}
                                    </div>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <Box marginBottom={6}>
                      <div className='pb-2'>
                        <TextField
                          id='vin_number'
                          name='vin_number'
                          label={`${translations.vin_number}`}
                          onChange={(event, value) => {
                            handleVinNumberChange(event, value)
                          }}
                          type='text'
                          size={isMobile ? 'md' : 'lg'}
                          value={vinNumber}
                          helperText={`${translations.helperText}`}
                          errorMessage={
                            !hasVinNumberValidationError
                              ? undefined
                              : translations.vin_number_validation
                          }
                        />
                      </div>
                    </Box>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-12 text-end'>
                    <Button
                      type='button'
                      text={`${translations.button_continue}`}
                      color='blue'
                      size={isMobile ? 'md' : 'lg'}
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
  )
}
