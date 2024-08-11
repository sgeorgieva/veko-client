"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <UsedCarPerSingleComponent
            isMobile={isMobile}
            isEdit={true}
            setIsEditCarModalOpen={setIsEditCarModalOpen}
            setIsDeleteCarModalOpen={setIsDeleteCarModalOpen}
          />
        </div>
      </div>
      {isAddCarModalOpen && (
        <AddCarModal
          isMobile={isMobile}
          isAddCarModalOpen={isAddCarModalOpen}
          setIsAddCarOpen={setIsAddCarOpen}
        />
      )}
      {isEditCarModalOpen && (
        <EditCarModal
          isMobile={isMobile}
          isEditCarModalOpen={isEditCarModalOpen}
          setIsEditCarModalOpen={setIsEditCarModalOpen}
          setIsDeleteCarModalOpen={setIsDeleteCarModalOpen}
        />
      )}
      {isDeleteCarModalOpen && (
        <DeleteCarModal
          isMobile={isMobile}
          isDeleteCarModalOpen={isDeleteCarModalOpen}
          setIsDeleteCarModalOpen={setIsDeleteCarModalOpen}
        />
      )}
    </>
  );
}
