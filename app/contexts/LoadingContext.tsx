// contexts/LoadingContext.js
"use client";

import React, { createContext, useContext, useState } from "react";
import HomeComponent from "../[lang]/components/HomeComponent/page";
import LayoutComponent from "../[lang]/components/LayoutComponent";

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
