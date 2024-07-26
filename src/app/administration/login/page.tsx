'use client'

import { useState } from "react";
import Image from "next/image";
import {
  BannerSlim,
  Box,
  Checkbox,
  CompositeZIndex,
  FixedZIndex,
  Flex,
  Layer,
  ModalAlert,
  TextField 
} from "gestalt";
import VekoLogoImage from "../../../../public/images/veko-oil-logo.png";

import './login.scss';

export default function Login({ isOpen }: any) {
  const [showComponent, setShowComponent] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hasUsernameError, setHasUsernameError] = useState(false);
  const [hasPasswordError, setPasswordError] = useState(false);
  const [isValidForm, setIsValidForm] = useState(true);
  const [messageValidation, setMessageValidation] = useState("");
  const HEADER_ZINDEX = new FixedZIndex(10);
  const zIndex = new CompositeZIndex([HEADER_ZINDEX]);

  console.log('isOpen', isOpen);
  

  const validateForm = () => {
    if (!username) {
      setHasUsernameError(true);
    } else {
      setHasUsernameError(false);
    }
    if (!password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    setIsValidForm(false);
    setMessageValidation("Моля, попълнете празните полета"); 
  }

  const handleLogin = () => {
    validateForm();
    console.log('here in login');
  };

  return (
    <div className="login-modal">
      {showComponent ? (
        <Layer zIndex={zIndex}>
          <ModalAlert
            accessibilityModalLabel=""
            heading="Добре дошли в Veko"
            onDismiss={() => {
              setShowComponent(!showComponent);
            }}
            primaryAction={{
              accessibilityLabel: "",
              label: "Вход",
              onClick: () => {handleLogin()},
              role: "button",
            }}
          >
            <>
              <Flex alignItems="center" justifyContent="center">
                <Image width={35} height={35} src={VekoLogoImage} alt="veko-oil-image-logo" />
              </Flex>
              {!isValidForm && 
                <Flex alignItems="center" justifyContent="center">
                  <Box width="100%" padding={0} marginTop={3} marginBottom={3}>
                    <BannerSlim
                      type="error"
                      iconAccessibilityLabel="Information"
                      message={messageValidation}
                      onDismiss={() => setIsValidForm(!isValidForm)}
                    />
                  </Box>
                </Flex>
              }
              <Box marginBottom={6}>
                <TextField
                  id="username"
                  name="username"
                  label="Потребителско име"
                  onChange={({ value }) => {
                    setUsername(value);
                  }}
                  type="text"
                  value={username}
                  errorMessage={
                    !hasUsernameError
                      ? undefined
                      : "Потребителското име е невалидно"
                  }
                />
              </Box>
              <Box marginBottom={6}>
                <TextField
                  id="password"
                  name="password"
                  label="Парола"
                  onChange={({ value }) => {
                    setPassword(value);
                  }}
                  type="password"
                  value={password}
                  errorMessage={
                    !hasPasswordError
                      ? undefined
                      : "Паролата е невалидна"
                  }
                />
              </Box>
              <Checkbox
                checked={false}
                helperText="Captcha"
                id="secret"
                label="CAPTCHA"
                name="languages"
                onChange={() => {}}
              />
            </>
          </ModalAlert>
        </Layer>
      ) : null}
    </div>
  );
}