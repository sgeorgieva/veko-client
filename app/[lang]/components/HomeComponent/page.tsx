"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Video, Image } from "gestalt";
import axios from "axios";
import { endpoints, linkUrl } from "../../../../utils/functions";
// @ts-ignore
import VekoCommersialLarge from "../../../../public/video/VEKO_commercial-large.mp4";
import VekoCommersiaSmall from "../../../../public/video/VEKO_commercial-small.mp4";
import KiaShoowroomImage from "../../../../public/images/kia-home-cover.jpg";

import "./homeComponent.scss";
import Posts from "../../posts/page";
import { usePosts } from "../../../context/PostsContext";

export default function HomeComponent({
  isHomePage,
  component,
  pass,
  translations,
  children,
  lang,
}: any) {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { posts, setPosts } = usePosts();
  const initialized = useRef(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [pagesLength, setPagesLength] = useState(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    if (!initialized.current && posts?.length === 0) {
      initialized.current = true;
      fetchPostsData();
    }
  }, []);

  const handleScroll = () => {
    if (window.innerHeight > document.documentElement.scrollTop || isLoading) {
      return;
    } else {
      if (
        Math.abs(
          document.documentElement.scrollHeight -
            document.documentElement.clientHeight -
            document.documentElement.scrollTop
        ) <= 1 &&
        page <= pagesLength
      ) {
        fetchPostsData();
        setShowButton(true);
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
        `${linkUrl()}${endpoints.posts}?page=${page}&language_id=${lang}`,
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
            src={isMobile ? VekoCommersiaSmall : VekoCommersialLarge}
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
            {posts && posts.length > 0 ? (
              <Posts
                lang={lang}
                isMobile={isMobile}
                showButton={showButton}
                posts={posts}
              />
            ) : null}
          </div>
        ) : (
          component
        )}
        {children}
      </div>
    </>
  );
}
