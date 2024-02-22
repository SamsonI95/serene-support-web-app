//App
import React, { useState } from "react";
import StarRating from "../reusables/StarRating";

//Component
import Modal from "./Modal";

//Data
import { mdata } from "../Data types/ModalData";

const TherapistCard1 = ({ image, name, ratingNumber }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (therapistData) => {
    // Pass individual therapist data
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <button onClick={handleOpenModal}>
      <div className="relative max-w-xs overflow-hidden shadow-md bg-white mb-4 rounded-md">
        <img src={image} alt={name} className="w-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-40 text-white">
          <h2 className="text-sm font-semibold">{name}</h2>
          <div className="flex items-center mt-2">
            <StarRating ratingNumber={ratingNumber} />
            <span className="text-xs text-yellow-400 relative top-0">{`(${ratingNumber})`}</span>
          </div>
        </div>
        {isModalOpen && (
          <Modal therapistData={mdata[0]} onClose={handleCloseModal} />
        )}
      </div>
    </button>
  );
};

export default TherapistCard1;
