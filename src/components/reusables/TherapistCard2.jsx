import React from "react";
import Button from "../reusables/button";
import StarRating from "../reusables/StarRating"; // Adjust the import path

const TherapistCard2 = ({ image, name, ratingNumber, content }) => {
  return (
    <div className="relative max-w-lg h-fit overflow-hidden shadow-md bg-white mb-4 rounded-md">
      <img src={image} alt={name} className="w-full object-cover" />
      <div className=" text-black bottom-0 left-0 right-0 p-4 bg-white">
        <h2 className="text-2xl  font-semibold">{name}</h2>
        <div className="flex items-center mb-5">
          <StarRating ratingNumber={ratingNumber} />
          <span className="text-xs text-yellow-400 relative top-0">{`(${ratingNumber})`}</span>
        </div>
        <p className="mb-5">{content}</p>
        <div className="flex items-center space-x-12">
          <Button type="button" variant="primary-small" size="small">
            Book Appointment
          </Button>
          <Button type="button" variant="hollow" size="small">
            About
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TherapistCard2;
