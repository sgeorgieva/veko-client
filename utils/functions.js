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

export const linkUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return process.env.NEXT_PUBLIC_BACKEND_LOCALHOST_SITE_URL;
  } else {
    return process.env.SITE_URL;
  }
};

export const endpoints = {
  login: "login", //POST
  contact: "contact", //POST
  posts: "posts", //GET
  postId: "posts/{{postsId}}", // GET
  createPost: "posts/create", // POST
  updatePost: "posts/{{postsId}}", // POST /updata
  deletePost: "posts/{{postsId}}", // DELETE
  cars: "used-cars", // GET
  carId: "used-cars/{{carId}}", // GET
  createCar: "used-cars/cars", // POST
  updateCar: "used-cars/edit/{{carId}}", // PUT
  deleteCar: "used-cars/{{carId}}", // DELETE
  autocenters: "auto-centers/create", //POST
};

// module.exports = {
//   endpoints,
// };
