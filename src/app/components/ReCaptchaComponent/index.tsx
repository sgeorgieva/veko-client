import { useEffect, useState } from "react";
import { ReCaptcha } from "next-recaptcha-v3";
import { validateToken } from "./utils";

export const ReCaptchaComponent  = () => {
  const [token, setToken] = useState<string>(null);

  useEffect(() => {
    if (token) {
      // Validate token and make some actions if it's a bot
      validateToken(token);
    }
  }, [token]);

  return (
    <>
      <ReCaptcha 
        onValidate={setToken} 
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} 
        action="page_view" 
      />
      <h1>Hello</h1>
    </>
  );
};