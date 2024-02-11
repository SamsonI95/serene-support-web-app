import React from "react";

const CardStyyle1 = ({ image, title, subtitle1, subtitle2 }) => {
  return (
    <div className="bg-white shadow-md p-6 mb-6 rounded-lg  w-81">
      <div className="flex items-center justify-center mb-4">
        <img
          className="w-69 h-59 object-cover mb-4 rounded-lg"
          src={image}
          alt={title}
        />
      </div>
      <div className="text-lg font-bold mb-2">{title}</div>
      <div className="text-gray-600 mb-2">{subtitle1}</div>
      <div className="text-gray-600">{subtitle2}</div>
    </div>
  );
};

export default CardStyyle1;
