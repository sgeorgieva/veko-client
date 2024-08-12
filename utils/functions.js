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
  autocenters: "auto-centers/create", //POST
};

// module.exports = {
//   endpoints,
// };
