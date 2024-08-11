"use client";

import { useCallback, useEffect, useState } from "react";
import { useReCaptcha } from "next-recaptcha-v3";
import { BannerSlim, Box, Button, Flex, TextArea, TextField } from "gestalt";

import "./contactFormComponent.scss";
import { endpoints, linkUrl } from "../../../../utils/functions";
import axios from "axios";

export default function ContactFormComponent() {
  const [names, setNames] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [message, setMesage] = useState("");
  const [hasNameError, setHasNameError] = useState(false);
  const [hasPhoneError, setHasPhoneError] = useState(false);
  const [hasEmailError, setHasEmailError] = useState(false);
  const [hasCityError, setHasCityError] = useState(false);
  const [hasMessageError, setHasMessageError] = useState(false);
  const [hasNameValidationError, setHasNameValidationError] = useState(false);
  const [hasEmailValidationError, setHasEmailValidationError] = useState(false);
  const [hasPhoneValidationError, setHasPhoneValidationError] = useState(false);
  const [hasCityValidationError, setHasCityValidationError] = useState(false);
  const [hasMessageValidationError, setHasMessageValidationError] =
    useState(false);
  const [messageValidation, setMessageValidation] = useState("");
  const [isValidForm, setIsValidForm] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  const validateForm = () => {
    if (!names) {
      setHasNameError(true);
    } else {
      setHasNameError(false);
    }

    if (!phone) {
      setHasPhoneError(true);
    } else {
      setHasNameError(false);
    }

    if (!email) {
      setHasEmailError(true);
    } else {
      setHasEmailError(false);
    }

    if (!city) {
      setHasCityError(true);
    } else {
      setHasCityError(false);
    }

    if (!message) {
      setHasMessageError(true);
    } else {
      setHasMessageError(false);
    }

    setHasNameValidationError(
      names.trim() === "" || (message.length < 3 && message.length > 32)
    );
    setHasPhoneValidationError(phone.trim() === "" || message.length < 10);
    setHasCityValidationError(
      city.trim() === "" || (message.length < 3 && message.length > 32)
    );
    setHasEmailValidationError(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/));
    setHasMessageValidationError(
      message.trim() === "" || (message.length < 10 && message.length > 3000)
    );

    if (
      hasNameError ||
      hasEmailError ||
      hasMessageError ||
      hasCityError ||
      hasPhoneError ||
      hasNameValidationError ||
      hasEmailValidationError ||
      hasPhoneValidationError ||
      hasCityValidationError ||
      hasMessageValidationError
    ) {
      setIsValidForm(false);
      setMessageValidation("Моля, попълнете празните полета");
    } else {
      setIsValidForm(true);
    }
  };

  function handleSubmit(e: any) {
    e.preventDefault();
    validateForm();
    console.log("HERE IN handleSubmit");

    if (
      !hasNameError &&
      !hasEmailError &&
      !hasMessageError &&
      !hasCityError &&
      !hasPhoneError &&
      !hasNameValidationError &&
      !hasEmailValidationError &&
      !hasPhoneValidationError &&
      !hasCityValidationError &&
      !hasMessageValidationError
    ) {
      // Send form data to server
      console.log("Form submitted", { names, email, message });
      const response = axios
        .post(`${linkUrl()}${endpoints.contact}`, {
          names: names,
          phone: phone,
          email: email,
          city: city,
          message: message,
        })
        .then((data) => {
          data.status === 200 && setIsValidForm(true);
          setMesage(data?.data.message);
        })
        .catch((error) => {
          console.log("err", error);

          if (error.response.status.startsWith("4")) {
            console.log("heres");

            setIsValidForm(false);
            setMessageValidation("Моля, попълнете празните полета");
          } else {
            setIsValidForm(true);
            setMessageValidation(
              "Има проблем с връзката със сървъра. Моля, опитайте пак."
            );
          }
        });
    }
  }

  return (
    <form className={`${isMobile ? "" : "mb-5"}`} onSubmit={handleSubmit}>
      <Flex
        alignItems="baseline"
        gap={4}
        height="100%"
        justifyContent="end"
        alignContent="end"
        direction="column"
        width="100%"
      >
        {!isValidForm && (
          <Box width="100%" padding={0} margin={1}>
            <BannerSlim
              iconAccessibilityLabel="Information"
              message={messageValidation}
              onDismiss={() => setIsValidForm(!isValidForm)}
              type="error"
            />
          </Box>
        )}
        <Box width={`${isMobile ? "350px" : "550px"}`}>
          <TextField
            size={`${isMobile ? "sm" : "lg"}`}
            names="names"
            id="names"
            label="Име"
            onChange={({ value }) => {
              setNames(value);
            }}
            type="text"
            value={names}
            errorMessage={
              !hasNameError || !hasNameValidationError
                ? undefined
                : "Името трябва да съдържа между 3 и 32 символа"
            }
          />
        </Box>
        <Box width={`${isMobile ? "350px" : "550px"}`}>
          <TextField
            names="phone"
            size={`${isMobile ? "sm" : "lg"}`}
            id="phone"
            label="Телефон"
            onChange={({ value }) => {
              setPhone(value);
            }}
            type="text"
            value={phone}
            errorMessage={
              !hasPhoneError || !hasPhoneValidationError
                ? undefined
                : "Телефонът за връзка е невалиден"
            }
          />
        </Box>
        <Box width={`${isMobile ? "350px" : "550px"}`}>
          <TextField
            id="city"
            names="city"
            size={`${isMobile ? "sm" : "lg"}`}
            label="Град"
            onChange={({ value }) => {
              setCity(value);
            }}
            type="text"
            value={city}
            errorMessage={
              !hasCityError || !hasCityValidationError
                ? undefined
                : "Името на града е невалидно"
            }
          />
        </Box>
        <Box width={`${isMobile ? "350px" : "550px"}`}>
          <TextField
            autoComplete="email"
            id="email"
            size={`${isMobile ? "sm" : "lg"}`}
            label="Имейл"
            onChange={({ value }) => {
              setEmail(value);
            }}
            type="text"
            value={email}
            errorMessage={
              !hasEmailError || !hasEmailValidationError
                ? undefined
                : "E-mail адресът е невалиден"
            }
          />
        </Box>
        <Box width={`${isMobile ? "350px" : "550px"}`}>
          <TextArea
            id="message"
            label="Съобщение"
            onChange={({ value }) => setMesage(value)}
            value={message}
            errorMessage={
              !hasMessageError || !hasMessageValidationError
                ? undefined
                : "Съобщението трябва да съдържа между 10 и 3000 символа"
            }
          />
        </Box>
        <div className="text-end">
          <Flex
            alignItems="end"
            direction="row"
            justifyContent="end"
            alignContent="end"
          >
            <Box maxWidth={`${isMobile ? "100" : "550"}`} right={true}>
              <Button
                fullWidth={isMobile ? false : true}
                type="submit"
                color="blue"
                accessibilityLabel="Submit"
                size={`${isMobile ? "sm" : "lg"}`}
                text="Изпрати"
                onClick={(e) => handleSubmit(e)}
              />{" "}
              {successMessage && <p>{successMessage}</p>}
            </Box>
          </Flex>
        </div>
      </Flex>
    </form>
  );
}
