"use client";

import { useEffect, useState } from "react";
import NewsPerSingleComponent from "../../../app/components/NewsPerSingleComponent";
import AddNewsModal from "./AddNewsModal";
import EditNewsModal from "./EditNewsModal";
import DeleteNewsModal from "./DeleteNewsModal";

import "./adminPanelNews.scss";
export default function AdminPanelNewsComponent({
  isAddNewsModalOpen,
  setIsNewsModalOpen,
}: {
  isAddNewsModalOpen: boolean;
  setIsNewsModalOpen: any;
}) {
  const [isEditNewsModalOpen, setIsEditNewsModalOpen] = useState(false);
  const [isDeleteNewsModalOpen, setIsDeleteNewsModalOpen] = useState(false);
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
          <NewsPerSingleComponent
            isEdit={true}
            isEditNewsModalOpen={isEditNewsModalOpen}
            setIsEditNewsModalOpen={setIsEditNewsModalOpen}
            setIsDeleteNewsModalOpen={setIsDeleteNewsModalOpen}
          />
        </div>
      </div>
      {isAddNewsModalOpen && (
        <AddNewsModal
          isMobile={isMobile}
          isAddNewsModalOpen={isAddNewsModalOpen}
          setIsNewsModalOpen={setIsNewsModalOpen}
        />
      )}
      {isEditNewsModalOpen && (
        <EditNewsModal
          isMobile={isMobile}
          isEditNewsModalOpen={isEditNewsModalOpen}
          setIsEditNewsModalOpen={setIsEditNewsModalOpen}
        />
      )}
      {isDeleteNewsModalOpen && (
        <DeleteNewsModal
          isMobile={isMobile}
          isDeleteNewsModalOpen={isDeleteNewsModalOpen}
          setIsDeleteNewsModalOpen={setIsDeleteNewsModalOpen}
        />
      )}
    </>
  );
}
