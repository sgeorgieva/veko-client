"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Image } from "gestalt";
import axios from "axios";
import { endpoints, linkUrl } from "../../../../../utils/functions";
import Loader from "../../Loader";
import HomeComponent from "../../HomeComponent/page";
import UsedCarPerSingleComponent from "../../UsedCarPerSingleComponent";
import CroppedKiaImage from "../../../../../public/images/cropped-kia-motors.png";

import "./usedCarComponent.scss";

export default function UsedCarComponent({ title }: { title: string }) {
  const [isMobile, setIsMobile] = useState(false);
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [pagesLength, setPagesLength] = useState(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    if (!initialized.current && cars && cars.length === 0) {
      initialized.current = true;
      fetchCarsData();
    }
  }, [cars]);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      fetchCarsData();
    }
  }, [cars]);

  const handleScroll = () => {
    if (window.innerHeight > document.documentElement.scrollTop || isLoading) {
      return;
    } else {
      if (page <= pagesLength) {
        fetchCarsData();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  async function fetchCarsData() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${linkUrl()}${endpoints.cars}?page=${page}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Replace with your actual authorization token
          },
        }
      );
      if (response.status === 200) {
        setCars((prevItems) => [
          ...prevItems,
          ...response?.data?.records?.data,
        ]);
        setPagesLength(response.data?.records?.last_page);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

console.log('cc', cars)
  return (
    <Suspense fallback={<Loader />}>
      <HomeComponent
        isHomePage={false}
        component={
          <div
            className={`used-car-wrapper mt-3 ${
              isMobile ? 'used-car-wrapper-mobile' : ''
            }`}
          >
            <div className='title-contact'>
              <h1 className='pageHeader mb-4'>{title}</h1>
              <Image
                alt='kia-cropped-image'
                src={CroppedKiaImage.src}
                className='test'
              />
            </div>
            <hr />
            <div className='description-contact pageContent'>
              <div className='d-flex row align-items-center mx-auto w-80'>
                {cars &&
                  cars.map((car) => (
                    <div className='col-md-4' key={car?.id}>
                      <UsedCarPerSingleComponent
                        model={car?.model}
                        image={car?.image}
                        carId={car?.id}
                        cars={cars}
                        isEdit={false}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        }
      />
    </Suspense>
  )
}
