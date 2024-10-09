"use client";

import { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";
import Header from "../header";
import Footer from "../footer";
import { CarProvider } from "@/app/contexts/CarContext";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function LayoutComponent({
  lang,
  font,
  children,
  translations,
  translationsUsedCars,
  translationsFooter,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  return (
    <Provider store={store}>
      <header>
        <Header
          lang={lang}
          className={font}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          translations={translations}
          translationsUsedCars={translationsUsedCars}
        />
      </header>
      <main className={font}>{children}</main>
      <footer>
        <Footer
          lang={lang}
          translationsFooter={translationsFooter}
          translations={translations}
          isMobile={isMobile}
          className={font}
        />
        <CookieConsent
          ariaAcceptLabel="testCookieConsent"
          buttonWrapperClasses={`${
            isMobile ? "button-mobile-cookie-wrapper" : "button-cookie-wrapper"
          }`}
          buttonClasses={`${isMobile ? "button-cookie" : ""}`}
          contentClasses={`${isMobile ? "cookie-content" : ""}`}
          containerClasses={`${
            isMobile ? "cookie-container-mobile" : "cookie-container-wrapper"
          }`}
          location="bottom"
          buttonText="Приемам"
          cookieName="veko-oil-cookie"
          style={{
            display: "flex",
            alignItems: "center",
            background: "#2B373B",
            textAlign: "left",
            padding: "10px 15px",
            opacity: ".95",
            position: "fixed",
          }}
          buttonStyle={{
            background: "#fff",
            color: "#4e503b",
            fontSize: "13px",
            fontWeight: "600",
            textTransform: "uppercase",
            margin: 0,
          }}
          declineButtonClasses="decline-cookie-button"
          expires={150}
          enableDeclineButton
          declineButtonText="ОТКАЗВАМ"
        >
          <p className="mb-0">
            ПРАВА НА ПОТРЕБИТЕЛИТЕ ПО ОБЩИЯ РЕГЛАМЕНТ ЗА ЗАЩИТА НА ЛИЧНИТЕ ДАННИ
            (GDPR) И ИЗПОЛЗВАНЕ НА COOKIES/БИСКВИТКИ.
          </p>
        </CookieConsent>
      </footer>
    </Provider>
  );
}
