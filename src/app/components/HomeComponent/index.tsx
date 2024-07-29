"use client";

import { useEffect, useState } from "react";
import { Box, Video } from "gestalt";
import Image from "next/image";
// @ts-ignore
import VekoCommersial from "../../../../public/video/VEKO_commercial.mp4";
import KiaShoowroomImage from "../../../../public/images/kia-home-cover.jpg";

import "./homeComponent.scss";

export default function HomeComponent({ isHomePage, component }: any) {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      console.log("page loaded");
      // do something else

      // var frameObj = document.querySelectorAll("body > iframe")[0].textContent;
      // frameObj = frameObj?.querySelectorAll('navbar navbar-default navbar-fixed-top');
      // console.log('frameObj', frameObj);

      // frame.parentNode.removeChild(frame);
    };
    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <>
      <Box
        alignItems="center"
        display="flex"
        height="100%"
        justifyContent="center"
      >
        <Box width={1920}>
          <Video
            loop
            aspectRatio={16 / 9}
            onControlsPause={() => setPlaying(false)}
            onControlsPlay={() => setPlaying(true)}
            onEnded={() => setPlaying(true)}
            onLoadStart={() => setPlaying(true)}
            onPlay={() => setPlaying(true)}
            onPlayError={({ error }) => error && setPlaying(false)}
            onVolumeChange={(e) => setVolume(e.volume)}
            playing={playing}
            src={VekoCommersial}
            volume={volume}
            type="video/mp4"
            objectFit="contain"
          />
        </Box>
      </Box>
      <div className="d-flex flex-column container mx-auto py-5">
        {isHomePage ? (
          <div className="row">
            <div className="col-sm-12 col-md-7">
              <p>
                Основната дейност на &ldquo;ВЕКО ОЙЛ&ldquo; ЕООД е свързана с
                продажбата на автомобили, сервизни услуги и резервни части за
                2-те представлявани марки Subaru и KIA. Ние предлагаме на
                клиентите си пълната гама услуги, необходими за поддръжката на
                автомобила:
              </p>
              <ul className="ms-1">
                <li>
                  гъвкави схеми за финансов и оперативен лизинг и застраховки;
                </li>
                <li>оценка на употребявани автомобили;</li>
                <li>продажба на употребявани автомобили;</li>
                <li>пълно сервизно обслужване (full service);</li>
                <li>гаранционно обслужване;</li>
                <li>индивидуални схеми за следгаранционно обслужване.</li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-5 pb-3">
              <Image
                priority
                src={KiaShoowroomImage}
                alt=""
                className={`${
                  isMobile ? "kia-mobile-logo-image" : "kia-home-image"
                }`}
              />
            </div>
            <hr />
            <h4>Актуални новини</h4>
          </div>
        ) : (
          component
        )}
      </div>
    </>
  );
}
