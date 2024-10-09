"use client";

import { createContext, useState, useContext } from "react";

const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [car, setCar] = useState({});

  return (
    <CarContext.Provider value={{ car, setCar }}>
      {children}
    </CarContext.Provider>
  );
};

export const useCarContext = () => useContext(CarContext);
