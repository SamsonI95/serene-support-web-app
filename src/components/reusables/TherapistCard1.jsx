import React from "react";
import StarRating from "../reusables/StarRating";

const TherapistCard1 = ({ image, name, ratingNumber, therapistData }) => {
  return (
    <div className="relative max-w-xs overflow-hidden shadow-md bg-white mb-4 rounded-md">
      <img src={image} alt={name} className="w-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-40 text-white">
        <h2 className="text-sm font-semibold">{name}</h2>
        <div className="flex items-center mt-2">
          <StarRating ratingNumber={ratingNumber} />
          <span className="text-xs text-yellow-400 relative top-0">{`(${ratingNumber})`}</span>
        </div>
      </div>
    </div>
  );
};

export default TherapistCard1;
