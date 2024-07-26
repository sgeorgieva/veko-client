'use client';

import { useCallback, useState } from 'react';
import { useForm } from "react-hook-form";
import { useReCaptcha } from 'next-recaptcha-v3';
import { BannerSlim, Box, Button, Flex, TextArea, TextField } from 'gestalt';

import './contactFormComponent.scss';

export default function ContactFormComponent() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [message, setMesage] = useState('');
  const [hasNameError, setHasNameError] = useState(false);
  const [hasPhoneError, setHasPhoneError] = useState(false);
  const [hasEmailError, setHasEmailError] = useState(false);
  const [hasCityError, setHasCityError] = useState(false);
  const [hasMessageError, setHasMessageError] = useState(false);
  const [hasNameValidationError, setHasNameValidationError] = useState(false);
  const [hasEmailValidationError, setHasEmailValidationError] = useState(false);
  const [hasPhoneValidationError, setHasPhoneValidationError] = useState(false);
  const [hasCityValidationError, setHasCityValidationError] = useState(false);
  const [hasMessageValidationError, setHasMessageValidationError] = useState(false);

  const [messageValidation, setMessageValidation] = useState('');
  const [isValidForm, setIsValidForm] = useState(true);
  const {
    // handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    if (!name) {
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

    setHasNameValidationError(name.trim() === '' || message.length < 3 && message.length > 32);
    setHasPhoneValidationError(phone.trim() === '' || message.length < 10);
    setHasCityValidationError(city.trim() === '' || message.length < 3 && message.length > 32);
    setHasEmailValidationError(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/));
    setHasMessageValidationError(message.trim() === '' || (message.length < 10 && message.length > 3000));

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
  }

  function handleSubmit(e, data: any) {
    e.preventDefault();
    validateForm();
    console.log('HERE IN handleSubmit');

    if (!hasNameError && !hasEmailError && !hasMessageError) {
      // Send form data to server
      console.log('Form submitted', { name, email, message });
    }
  }

    // Import 'executeRecaptcha' using 'useReCaptcha' hook
    // const { executeRecaptcha } = useReCaptcha();

    // const handleSubmit = useCallback(
    
    //   async (e) => {
    //     e.preventDefault();
  
    //     // Generate ReCaptcha token
    //     const token = await executeRecaptcha("/contact");
  
    //     // Attach generated token to your API requests and validate it on the server
    //     fetch("/api/form-submit", {
    //       method: "POST",
    //       body: {
    //         data: { name, email, message },
    //         token,
    //       },
    //     });
    //   },
    //   [executeRecaptcha,  name, email, message],
    // );

  return (
    <form className="mb-5" onSubmit={handleSubmit}>
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
        <Box width={550}>
          <TextField
            name="name"
            id="name"
            label="Име"
            onChange={({ value }) => {
              setName(value);
            }}
            type="text"
            value={name}
            errorMessage={
              !hasNameError || !hasNameValidationError
                ? undefined
                : "Името трябва да съдържа между 3 и 32 символа"
            }
          />
        </Box>
        <Box width={550}>
          <TextField
            name="phone"
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
        <Box width={550}>
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
              !hasCityError || !hasCityValidationError
                ? undefined
                : "Името на града е невалидно"
            }
          />
        </Box>
        <Box width={550}>
          <TextField
            autoComplete="email"
            id="email"
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
        <Box width={550}>
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
        {/* <ReCaptchaComponent /> */}
        <div className="text-end">
          <Flex
            alignItems="end"
            direction="row"
            justifyContent="end"
            alignContent="end"
          >
            <Box width={550} right={true}>
              <Button
                fullWidth
                type="submit"
                color="blue"
                accessibilityLabel="Submit"
                size="lg"
                text={`${isSubmitting ? "Изпращане" : "Изпрати"}`}
                // onClick={(e) => handleSubmit(e)}
              />{" "}
              {successMessage && <p>{successMessage}</p>}
            </Box>
          </Flex>
        </div>
      </Flex>
    </form>
  );
}