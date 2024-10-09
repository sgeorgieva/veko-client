"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Video, Image, Icon } from "gestalt";
// import axios from "axios";
// import { endpoints, linkUrl } from "../../../../utils/functions";
// @ts-ignore
// import VekoCommersialLarge from "../../../../public/video/VEKO_commercial-large.mp4";
// import VekoCommersiaSmall from "../../../../public/video/VEKO_commercial-small.mp4";
// import Posts from "../../posts/[slug]/_components/PostDescription/page";
// import { usePosts } from "../../../contexts/PostsContext";
import EcologyComponent from "../EcologyComponent";
import VekoBannerImage from "../../../../public/images/veko-banner.png";
// import KiaShoowroomImage from "../../../../public/images/kia-home-cover.jpg";
import ToolsImage from "../../../../public/images/tools.webp";
import MoneyPocketImage from "../../../../public/images/money_pocket.png";
import PeopleImage from "../../../../public/images/people.webp";
import { Jura } from "next/font/google";

const jura = Jura({
  display: "swap",
  variable: "--font-jura",
  subsets: ["latin"],
  weight: "700",
  style: "normal",
});
import Posts from "../../posts/page";
import { useApiPosts } from "@/hooks/useApiPosts";

import "./homeComponent.scss";

export default function HomeComponent({
  isHomePage,
  component,
  translations,
  children,
  lang,
}: any) {
  // const [playing, setPlaying] = useState(false);
  // const [volume, setVolume] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  // const { posts, setPosts } = usePosts();
  const initialized = useRef(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  // const [pagesLength, setPagesLength] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const { fetchPosts, isLoading, posts, pagesLength } = useApiPosts();

  console.log("====================================");
  console.log("posts", posts);
  console.log("====================================");

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    if (!initialized.current && posts?.length === 0) {
      initialized.current = true;
      // fetchPostsData();

      fetchPosts(page, setPage, lang);
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
        // fetchPostsData(lang);
        fetchPosts(page, setPage, lang);
        setShowButton(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  // async function fetchPostsData() {
  //   setIsLoading(true);
  //   setError(null);

  //   try {
  //     const response = await axios.get(
  //       `${linkUrl()}${endpoints.posts}?page=${page}&language_id=${lang}`,
  //       {
  //         headers: {
  //           Accept: "application/json",
  //           Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Replace with your actual authorization token
  //         },
  //       }
  //     );
  //     if (response.status === 200) {
  //       setPosts((prevItems) => [...prevItems, ...response?.data?.posts?.data]);
  //       setPagesLength(response.data?.posts?.last_page);
  //       setPage((prevPage) => prevPage + 1);
  //     }
  //   } catch (error) {
  //     setError(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }

  return (
    <>
      {/* <Box
        alignItems="center"
        display="flex"
        height="100%"
        justifyContent="center"
      >
        <Box width={1920}> */}
      {/* <Video
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
          /> */}
      {/* </Box>
      </Box> */}
      <Image priority src={VekoBannerImage.src} alt="" />
      <div className="d-flex flex-column container mx-auto">
        {isHomePage ? (
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className={`${jura.className} line-height pt-4`}>
                {translations.home.paragraph}
              </h1>
              <h6 className="w-50 mx-auto pt-3">
                {translations.home.additional_text}
              </h6>
            </div>
            <div className="col-md-12 py-5">
              <h2 className="text-center fw-bold">
                {translations.home.slogan}
              </h2>
            </div>
            <div
              className={`col-md-12 py-4 d-flex justify-content-around ${isMobile ? "flex-column" : ""}`}
            >
              <div className="col-md-2 small-image">
                <Image src={ToolsImage.src} />
                <p className="text-center pt-3">
                  {translations.home.description_one}
                </p>
              </div>
              <div className="col-md-2 small-image">
                <Image src={MoneyPocketImage.src} />
                <p className="text-center pt-3">
                  {translations.home.description_two}
                </p>
              </div>
              <div className="col-md-2 small-image">
                <Image src={PeopleImage.src} />
                <p className="text-center pt-3">
                  {translations.home.description_three}
                </p>
              </div>
            </div>
            <EcologyComponent translations={translations} />
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
        {/* {children} */}
      </div>
    </>
  );
}
