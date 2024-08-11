"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BannerSlim,
  Box,
  Button,
  Checkbox,
  CompositeZIndex,
  FixedZIndex,
  Flex,
  Layer,
  ModalAlert,
  TextField,
} from "gestalt";
import { useRouter } from "next/navigation";
import axios from "axios";
import { linkUrl, endpoints } from "../../../../utils/functions";
import VekoLogoImage from "../../../../public/images/veko-oil-logo.png";

import "./login.scss";

export default function Login({
  closeModal,
  setIslogin,
  setOpenLoginMenu,
  isMobile,
}: any) {
  const [showComponent, setShowComponent] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasUsernameError, setHasUsernameError] = useState(false);
  const [hasPasswordError, setPasswordError] = useState(false);
  const [isValidForm, setIsValidForm] = useState(true);
  const [messageValidation, setMessageValidation] = useState("");
  const HEADER_ZINDEX = new FixedZIndex(10);
  const zIndex = new CompositeZIndex([HEADER_ZINDEX]);
  const router = useRouter();

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
  };

  const handleLogin = () => {
    validateForm();
    login();
  };

  const login = async () => {
    try {
      const response = axios.post(`${linkUrl()}${endpoints.login}`, {
        username: username,
        password: password,
      });
      // const response = await fetch(`${linkUrl()}${endpoints.login}`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     username: username,
      //     password: password,
      //   }),
      // });
      const data = await response;

      console.log("data", data);

      if (data.statusText === "fail" || data.statusText === "error") {
        throw Error(data.message);
      } else {
        // store.dispatch(login(data));
        console.log("data", data);
        // setError(false);
        // setMessage(t(data?.statusText));
        localStorage.setItem("jwt", data?.token);
        closeModal();
        setIslogin(true);
        setOpenLoginMenu(false);
        router.push("/admin-panel");
        // sessionStorage.setItem("jwt", data?.accessToken);
      }
    } catch (error) {
      console.log("error", error);
      // setMessage(`${t(error?.message)}`);
      // setError(true);
      // throw Error(error);
    }
  };

  return (
    <div className="login-modal">
      {showComponent ? (
        <Layer zIndex={zIndex}>
          <ModalAlert
            paddingB={0}
            accessibilityModalLabel=""
            heading="Добре дошли в Veko"
            onDismiss={() => {
              setShowComponent(!showComponent);
              closeModal();
            }}
          >
            <>
              <Flex alignItems="center" justifyContent="center">
                <Image
                  width={35}
                  height={35}
                  src={VekoLogoImage}
                  alt="veko-oil-image-logo"
                />
              </Flex>
              {!isValidForm && (
                <Flex alignItems="center" justifyContent="center">
                  <Box width="100%" paddingY={3} marginTop={0} marginBottom={0}>
                    <BannerSlim
                      type="error"
                      iconAccessibilityLabel="Information"
                      message={messageValidation}
                      onDismiss={() => setIsValidForm(!isValidForm)}
                    />
                  </Box>
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
              <Checkbox
                checked={false}
                helperText="Captcha"
                id="secret"
                label="CAPTCHA"
                name="languages"
                onChange={() => {}}
              />
              <Box padding={0} marginTop={3} marginBottom={0}>
                <Button
                  fullWidth
                  type="submit"
                  color="blue"
                  accessibilityLabel="Submit"
                  size={`${isMobile ? "sm" : "lg"}`}
                  text="Вход"
                  onClick={(e) => handleLogin()}
                />{" "}
              </Box>
            </>
          </ModalAlert>
        </Layer>
      ) : null}
    </div>
  );
}
