import { useState } from "react";
import axios from "axios";
import { endpoints, linkUrl } from "@/utils/functions";

export const useApiContacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [messageValidation, setMessageValidation] = useState("");

  const fetchContacts = async (names, phone, email, city, message, setIsValidForm) => {
      axios
      .post(`${linkUrl()}${endpoints.contact}`, {
        names: names,
        phone: phone,
        email: email,
        city: city,
        message: message,
      })
      .then((data) => {
        data.status === 200 && setIsValidForm(true);
        setSuccessMessage(data?.data.message);
      })
      .catch((error) => {
        if (error.response.status.startsWith("4")) {
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

  return { fetchContacts, setMessageValidation, messageValidation, successMessage };
}

