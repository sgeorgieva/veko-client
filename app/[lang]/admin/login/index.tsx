"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BannerSlim,
  Box,
  Button,
  CompositeZIndex,
  FixedZIndex,
  Flex,
  Layer,
  ModalAlert,
  TextField,
} from "gestalt";
import VekoLogoImage from "../../../../public/images/veko-oil-logo.png";
import { useApiLogin } from "@/hooks/useApiLogin";

import "./login.scss";

export default function Login({ closeModal, isMobile, setOpenLoginMenu }: any) {
  const [showComponent, setShowComponent] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasUsernameError, setHasUsernameError] = useState(false);
  const [hasPasswordError, setPasswordError] = useState(false);
  const [isValidForm, setIsValidForm] = useState(true);
  const HEADER_ZINDEX = new FixedZIndex(10);
  const zIndex = new CompositeZIndex([HEADER_ZINDEX]);

  const { login, isLogin, messageValidation, setMessageValidation } =
    useApiLogin();

  const handleValidateForm = () => {
    if (!username) {
      setHasUsernameError(true);
      setMessageValidation("Моля, попълнете празните полета");
    } else {
      setHasUsernameError(false);
    }
    if (!password) {
      setPasswordError(true);
      setMessageValidation("Моля, попълнете празните полета");
    } else {
      setPasswordError(false);
    }

    if (username && password) {
      login(username, password, closeModal);
    }

    setIsValidForm(false);
    // setMessageValidation("Моля, попълнете празните полета");
  };

  return (
    <div className="login-modal">
      {showComponent ? (
        <Layer zIndex={zIndex}>
          <ModalAlert
            padding={0}
            accessibilityModalLabel="dismiss logout"
            heading="Добре дошли в Veko"
            onDismiss={() => {
              setShowComponent(!showComponent);
              closeModal();
            }}
          >
            <>
              <Flex alignItems="center" justifyContent="center">
                <Image
                  unoptimized
                  width={35}
                  height={35}
                  src={VekoLogoImage}
                  alt="veko-oil-image-logo"
                />
              </Flex>
              {!isValidForm && (
                <Flex alignItems="center" justifyContent="center">
                  {messageValidation.length > 0 && (
                    <Box
                      width="100%"
                      paddingY={3}
                      marginTop={0}
                      marginBottom={0}
                    >
                      <BannerSlim
                        type="error"
                        iconAccessibilityLabel="Information"
                        message={messageValidation}
                        onDismiss={() => setIsValidForm(!isValidForm)}
                      />
                    </Box>
                  )}
                </Flex>
              )}
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
                  size={isMobile ? "sm" : "lg"}
                  errorMessage={
                    !hasUsernameError
                      ? undefined
                      : "Потребителското име е невалидно"
                  }
                />
              </Box>
              <Box marginBottom={6}>
                <TextField
                  size={isMobile ? "sm" : "lg"}
                  id="password"
                  name="password"
                  label="Парола"
                  onChange={({ value }) => {
                    setPassword(value);
                  }}
                  type="password"
                  value={password}
                  errorMessage={
                    !hasPasswordError ? undefined : "Паролата е невалидна"
                  }
                />
              </Box>
              <Box padding={0} marginTop={3} marginBottom={0}>
                <Button
                  fullWidth
                  type="submit"
                  color="blue"
                  accessibilityLabel="Submit"
                  size={`${isMobile ? "sm" : "lg"}`}
                  text="Вход"
                  onClick={(e) => handleValidateForm()}
                />{" "}
              </Box>
            </>
          </ModalAlert>
        </Layer>
      ) : null}
    </div>
  );
}
