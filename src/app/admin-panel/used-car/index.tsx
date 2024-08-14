"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "gestalt";
import { endpoints, linkUrl } from "../../../../utils/functions";
import UsedCarPerSingleComponent from "../../../app/components/UsedCarPerSingleComponent";
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

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  async function fetchCarsData() {
    // You can await here
    try {
      const response = await axios.get(`${linkUrl()}${endpoints.cars}?page=4`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Replace with your actual authorization token
        },
      });
      if (response.status === 200) {
        // console.log(
        //   "RECORDS",
        //   JSON.parse(response?.data?.records?.data[0].attributes)
        // );
        // console.log("HEREEEEEEE", JSON.parse(response?.data?.records));
        setItems(response?.data?.records?.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCarsData();
  }, []);

  // console.log("items", items);

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

  const handleEditCarData = () => {
    console.log("here2");
    if (carInfo) {
      setIsEditCarModalOpen(true);
    }
  };

  const handleDeleteCar = (id: number) => {
    setIsDeleteCarModalOpen(!isDeleteCarModalOpen);
    setDeleteId(id);
  };

  console.log(
    "isEditCarModalOpen",
    isEditCarModalOpen && carInfo && carInfo.length > 0
  );

  return (
    <>
      <div className="row d-flex">
        {items && items.length > 0 ? (
          items.map((item) => {
            return (
              <div className="col-md-4">
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
          fetchCarsData={fetchCarsData}
          id={deleteId}
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
