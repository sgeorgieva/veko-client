"use client";

import { useEffect, useRef, useState } from "react";
import {
  Box,
  Video,
  Divider,
  Flex,
  Heading,
  Text,
  Image,
  IconButton,
  Spinner,
} from "gestalt";
import axios from "axios";
import { endpoints, linkUrl, scrollToTop } from "../../../../utils/functions";
import { usePathname } from "next/navigation";
import Link from "next/link";
// @ts-ignore
import VekoCommersial from "../../../../public/video/VEKO_commercial.mp4";
import KiaShoowroomImage from "../../../../public/images/kia-home-cover.jpg";

import "./homeComponent.scss";
import Posts from "../../posts/page";
// import { useRouter } from "next/router";

export default function HomeComponent({
  isHomePage,
  component,
  pass,
  translations,
  children,
}: any) {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [posts, setPosts] = useState([]);
  const initialized = useRef(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [pagesLength, setPagesLength] = useState(null);
  const pathname = usePathname();
  // const router = useRouter();

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      fetchPostsData();
    }
  }, [posts]);

  const handleScroll = () => {
    if (window.innerHeight > document.documentElement.scrollTop || isLoading) {
      return;
    } else {
      if (page <= pagesLength) {
        fetchPostsData();
        // setShowButton(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  async function fetchPostsData() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${linkUrl()}${endpoints.posts}?page=${page}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Replace with your actual authorization token
          },
        }
      );
      if (response.status === 200) {
        setPosts((prevItems) => [...prevItems, ...response?.data?.posts?.data]);
        setPagesLength(response.data?.posts?.last_page);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  // useEffect(() => {
  //   window.addEventListener("scroll", scrollFunction);

  //   return () => {
  //     window.removeEventListener("scroll", scrollFunction);
  //   };
  // }, []);

  // function scrollFunction() {
  //   const mybutton = document.getElementsByTagName("button")[3];

  //   if (
  //     document.body.scrollTop > 20 ||
  //     document.documentElement.scrollTop > 20
  //   ) {
  //     mybutton.style.display = "block";
  //   } else {
  //     mybutton.style.display = "none";
  //   }
  // }

  // console.log('pathname', pathname)

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
            <div className="goToTop-btn">
              {/* <button type="button" onClick={scrollToTop}> */}
              {/* <IconButton
                accessibilityLabel="go to top button"
                size={`${isMobile ? "sm" : "xl"}`}
                icon="chevron-up-circle"
                onClick={scrollToTop}
              /> */}
              {/* </button> */}
            </div>
            <div className="col-sm-12 col-md-7">
              <h1>{pass}</h1>
              <p className="line-height">{translations.home.paragraph}</p>
              <ul className="ms-1">
                <li className="mb-1">{translations.home.bullet_one}</li>
                <li className="mb-1">{translations.home.bullet_two}</li>
                <li className="mb-1">{translations.home.bullet_three}</li>
                <li className="mb-1">{translations.home.bullet_four}</li>
                <li className="mb-1">{translations.home.bullet_five}</li>
                <li className="mb-1">{translations.home.bullet_six}</li>
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
            {posts && <Posts posts={posts} />}
          </div>
        ) : (
          component
        )}
        {children}
      </div>
    </>
  );
}
