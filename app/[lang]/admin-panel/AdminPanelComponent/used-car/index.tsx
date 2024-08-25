"use client";

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Spinner } from "gestalt";
import { endpoints, linkUrl } from "../../../../../utils/functions";
import UsedCarPerSingleComponent from "../../../components/UsedCarPerSingleComponent";
import AddCarModal from "./AddCarModal";
import EditCarModal from "./EditCarModal";
import DeleteCarModal from "./DeleteCarModal";

import "./adminPanelUsedCar.scss";

export default function AdminPanelUsedCarComponent({
  isAddCarModalOpen,
  setIsAddCarOpen,
  lang,
}: any) {
  const [isEditCarModalOpen, setIsEditCarModalOpen] = useState(false);
  const [isDeleteCarModalOpen, setIsDeleteCarModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [items, setItems] = useState([]);
  const [deleteId, setDeleteId] = useState(0);
  const [carInfo, setCarInfo] = useState("");
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
    if (!initialized.current) {
      initialized.current = true;
      fetchCarsData();
    }
  }, [items]);

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

  const fetchSingleCar = async (id) => {
    try {
      const response = await axios.get(
        `${linkUrl()}${endpoints.carId}${id}?language_id=${lang}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Replace with your actual authorization token
          },
        }
      );
      if (response.status === 200) {
        setCarInfo(response.data.record);
        handleEditCarData();
      }
    } catch (error) {
      console.error(error);
    }
  };

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
        setItems((prevItems) => [
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

  const fetchDeleteCarData = async (id: number) => {
    try {
      const response = await axios.delete(
        `${linkUrl()}${endpoints.deleteCar}${id}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Replace with your actual authorization token
          },
        }
      );
      if (response.status === 200) {
        setIsDeleteCarModalOpen(!isDeleteCarModalOpen);
        fetchCarsData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFetchCarsData = () => {
    fetchCarsData();
  };

  const handleEditCarData = () => {
    setIsEditCarModalOpen(true);
  };

  const handleDeleteCar = (id: number) => {
    setIsDeleteCarModalOpen(!isDeleteCarModalOpen);
    setDeleteId(id);
  };

  return (
    <>
      <div className="row d-flex">
        {items && items.length > 0 ? (
          items.map((item) => {
            return (
              <div className="col-md-3">
                <UsedCarPerSingleComponent
                  key={item.id}
                  isMobile={isMobile}
                  isEdit={true}
                  handleEditCarData={() => fetchSingleCar(item.id)}
                  setIsDeleteCarModalOpen={setIsDeleteCarModalOpen}
                  model={item.model}
                  id={item.id}
                  carInfo={carInfo}
                  setCarInfo={setCarInfo}
                  image={item?.images[0]?.name}
                  handleDeleteCar={() => handleDeleteCar(item.id)}
                />
              </div>
            );
          })
        ) : (
          <Spinner show color="default" />
        )}
      </div>
      {isAddCarModalOpen && (
        <AddCarModal
          isMobile={isMobile}
          isAddCarModalOpen={isAddCarModalOpen}
          setIsAddCarOpen={setIsAddCarOpen}
          fetchCarsData={fetchCarsData}
          lang={lang}
        />
      )}
      {isEditCarModalOpen && (
        <EditCarModal
          isMobile={isMobile}
          isEditCarModalOpen={isEditCarModalOpen}
          setIsEditCarModalOpen={setIsEditCarModalOpen}
          setIsDeleteCarModalOpen={setIsDeleteCarModalOpen}
          handleFetchCarsData={handleFetchCarsData}
          carInfo={carInfo}
          lang={lang}
        />
      )}
      {isDeleteCarModalOpen && (
        <DeleteCarModal
          isMobile={isMobile}
          isDeleteCarModalOpen={isDeleteCarModalOpen}
          setIsDeleteCarModalOpen={setIsDeleteCarModalOpen}
          id={deleteId}
          handleDeleteCar={() => fetchDeleteCarData(deleteId)}
        />
      )}
    </>
  );
}
