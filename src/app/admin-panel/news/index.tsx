"use client";

import { useState } from "react";
import NewsPerSingleComponent from "../../../app/components/NewsPerSingleComponent";
import AddNewsModal from "./AddNewsModal";
import EditNewsModal from "./EditNewsModal";
import DeleteNewsModal from "./DeleteNewsModal";

import "./adminPanelNews.scss";
export default function AdminPanelNewsComponent({
  isAddNewsModalOpen,
  setIsNewsModalOpen,
}: any) {
  const [isEditNewsModalOpen, setIsEditNewsModalOpen] = useState(false);
  const [isDeleteNewsModalOpen, setIsDeleteNewsModalOpen] = useState(false);

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
          isAddNewsModalOpen={isAddNewsModalOpen}
          setIsNewsModalOpen={setIsNewsModalOpen}
        />
      )}
      {isEditNewsModalOpen && (
        <EditNewsModal
          isEditNewsModalOpen={isEditNewsModalOpen}
          setIsEditNewsModalOpen={setIsEditNewsModalOpen}
        />
      )}
      {isDeleteNewsModalOpen && (
        <DeleteNewsModal
          isDeleteNewsModalOpen={isDeleteNewsModalOpen}
          setIsDeleteNewsModalOpen={setIsDeleteNewsModalOpen}
        />
      )}
    </>
  );
}
