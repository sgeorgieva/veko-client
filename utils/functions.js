"use client";

import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

export default function detectVersion() {
  const [_isMobile, setMobile] = useState();

  useEffect(() => {
    setMobile(isMobile);
  }, [setMobile]);

  return _isMobile;
}

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

export const linkUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return process.env.NEXT_PUBLIC_BACKEND_LOCALHOST_SITE_URL;
  } else {
    return process.env.NEXT_PUBLIC_SITE_BACKEND_URL;
  }
};

export const renderMonthContent = (month, shortMonth, longMonth, day) => {
  const fullYear = new Date(day).getFullYear();
  const tooltipText = `Tooltip for month: ${longMonth} ${fullYear}`;

  return <span title={tooltipText}>{shortMonth}</span>;
};

export const endpoints = {
  login: "login", //POST
  contact: "contact", //POST
  posts: "posts", //GET
  postId: "posts/", // GET
  createPost: "posts/create", // POST
  updatePost: "posts/", // POST /updata
  deletePost: "posts/", // DELETE
  cars: "used-cars", // GET
  carId: "used-cars/", // GET
  createCar: "used-cars/cars", // POST
  updateCar: "used-cars/edit/", // PUT
  deleteCar: "used-cars/", // DELETE
  autocenters: "auto-centers/create", //POST
  search: "search", //GET
};

// module.exports = {
//   endpoints,
// };
