import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { endpoints, linkUrl } from "@/utils/functions";

export const useApiLogin = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [messageValidation, setMessageValidation] = useState("");

  const login = async (username, password, closeModal) => {
    try {
      const response = axios.post(`${linkUrl()}${endpoints.login}`, {
        username: username,
        password: password,
      });
      const data = await response;

      if (
        data?.data?.statusText === "fail" ||
        data?.data?.statusText === "error"
      ) {
        localStorage.setItem("isLogin", false);
        throw Error(data?.message);
      } else {
        // setMessage(t(data?.statusText));
        localStorage.setItem("jwt", data?.data?.token);
        localStorage.setItem("isLogin", "true");
        localStorage.setItem("activeTabIndex", '0');
        closeModal();
        setIsLogin(true);
        router.refresh();
        setShowToast(true);
      }
    } catch (error) {
      if (
        error?.response?.status === 400 ||
        error?.response?.status === 404 ||
        error?.status === 401
      ) {
        setMessageValidation(error?.response?.data?.message);
      } else {
        setMessageValidation(
          `Има проблем с връзката със сървъра.\n  Моля, опитайте пак.`
        );
      }
    }
  };

  return { login, isLogin, setIsLogin, messageValidation, setMessageValidation };
};
