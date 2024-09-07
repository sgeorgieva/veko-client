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
  return process.env.NEXT_PUBLIC_SITE_BACKEND_URL;
};

export const renderMonthContent = (month, shortMonth, longMonth, day) => {
  const fullYear = new Date(day).getFullYear();
  const tooltipText = `Tooltip for month: ${longMonth} ${fullYear}`;

  return <span title={tooltipText}>{shortMonth}</span>;
};

export const generateTypeEngineContent = (typeEngine, lang) => {
  if (lang === 'bg') {
    switch (typeEngine) {
      case "gasoline":
        return "Бензин";
      case "diesel":
        return "Дизел";
      case "hybrid":
        return "Хибрид";
      case "electric":
        return "Електрически";
      case "gas":
        return "Газ";
      default:
        return "Бензин";
    }
  } else if (lang === "en") {
    return typeEngine.charAt(0).toUpperCase() + typeEngine.slice(1);
  }
}
export const generateEuroStandard = (euroStandard, lang) => {
  if (lang === 'bg') {
    switch (euroStandard) {
      case "euro1":
        return "Евро 1";
      case "euro2":
        return "Евро 2";
      case "euro3":
        return "Евро 3";
      case "euro4":
        return "Евро 4";
      case "euro5":
        return "Евро 5"
      case "euro6":
        return "Евро 6";
      default:
        return "Евро 1";
    }
  } else {
    let result = euroStandard.replace(/(\d+)/g, function (_, num){
      console.log(num);
      return ' ' + num + ' ';
    });
    result = result.trim();

    return result.charAt(0).toUpperCase() + result.slice(1);
  }
}

export const generateTransmissionContent = (transmission, lang) => {
  if (lang === "bg") {
    switch (transmission) {
      case "manual":
        return "Ръчна";
      case "automatic":
        return "Автоматична";
      default:
        return "Ръчна";
    }
  } else {
    return transmission.charAt(0).toUpperCase() + transmission.slice(1);
  }
}

export const generateCategoryContent = (category, lang) => {
  if (lang === "bg") {
    switch (category) {
      case "convertible":
        return "Кабриолет";
      case "coupe":
        return "Купе";
      case "crossover":
        return "Кросувър";
      case "hybrid":
        return "Хибрид";
      case "luxury":
        return "Луксозен";
      case "sedan":
        return "Седан";
      case "sports car":
        return "Спортен";
      case "SUV":
        return "СУВ";
      case "truck":
        return "Товарен автомобил/Пикап";
      case "van/minivan":
        return "Ван/Миниван";
      case "hatchback":
        return "Хетчбек";
      default:
        return "Кабриолет";
    }
  } else {
    if (category === "van/minivan") {
      return "Van/Minivan";
    } else {
      return category.charAt(0).toUpperCase() + category.slice(1);
    
    }
  }
}

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
