"use client";

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Spinner } from "gestalt";
import { endpoints, linkUrl } from "../../../../utils/functions";
import UsedCarPerSingleComponent from "../../components/UsedCarPerSingleComponent";
import AddCarModal from "./AddCarModal";
import DeleteCarModal from "./DeleteCarModal";
import EditCarModal from "./EditCarModal";

import "./adminPanelUsedCar.scss";

export default function AdminPanelUsedCarComponent({
  isAddCarModalOpen,
  setIsAddCarOpen,
}: any) {
  const [isEditCarModalOpen, setIsEditCarModalOpen] = useState(false);
  const [isDeleteCarModalOpen, setIsDeleteCarModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [items, setItems] = useState([]);
  const [deleteId, setDeleteId] = useState(0);
  const [carInfo, setCarInfo] = useState("");
  const initialized = useRef(false);

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    if (!initialized.current && items && items.length === 0) {
      initialized.current = true;
      fetchCarsData();
    }
  }, [items]);

  async function fetchCarsData() {
    try {
      const response = await axios.get(`${linkUrl()}${endpoints.cars}?page=1`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      if (response.status === 200) {
        setItems(response?.data?.records?.data);
      }
    } catch (error) {
      console.error(error);
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
                  handleEditCarData={handleEditCarData}
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
