'use client'

import { useEffect, useState } from 'react';
import CookieConsent from 'react-cookie-consent';
import { GoogleAnalytics } from '@next/third-parties/google';
import localFont from 'next/font/local'
import { usePathname } from 'next/navigation';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import { LoadingProvider } from './context/LoadingContext';
import Header from './components/header';
import Footer from './components/footer';

import "./globals.scss";
import Loader from './components/Loader';

const sfProFont = localFont({ 
  src: './sf-pro-display-medium.woff2',
  variable: '--font-sf-pro-display-medium',
  // display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); 
  const [className, setClassName] = useState('image-background');
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  return (
    <LoadingProvider>
      <Loader />
      <ReCaptchaProvider reCaptchaKey="6Le2XAoqAAAAABcR1RYwjuilen0Q8OvlkxhTGyLr">
        <html lang="en" className={sfProFont.className}>
          <head>
            <script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`} async defer></script>
          </head>
          <body className={sfProFont.className}>
            <Header className={sfProFont.className} isOpen={isOpen} setIsOpen={setIsOpen} />
            <main className={sfProFont.className}>{children}</main>
            <Footer className={sfProFont.className} />
            <CookieConsent
              ariaAcceptLabel="testCookieConsent"
              buttonWrapperClasses={`${isMobile ? "button-mobile-cookie-wrapper" : "button-cookie-wrapper"}`}
              buttonClasses={`${isMobile ? "button-cookie" : ""}`}
              contentClasses={`${isMobile ? "cookie-content" : ""}`}
              containerClasses={`${isMobile ? "cookie-container-mobile" : "cookie-container-wrapper"}`}
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
                ПРАВА НА ПОТРЕБИТЕЛИТЕ ПО ОБЩИЯ РЕГЛАМЕНТ
                ЗА ЗАЩИТА НА ЛИЧНИТЕ ДАННИ (GDPR) И ИЗПОЛЗВАНЕ НА COOKIES/БИСКВИТКИ.
              </p>
            </CookieConsent>
          </body>
          <GoogleAnalytics gaId="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" />
        </html>
      </ReCaptchaProvider>
    </LoadingProvider>
  );
}
