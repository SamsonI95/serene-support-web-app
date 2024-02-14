import React from "react";

const CardStyyle2 = ({ content, image, name, role }) => {
  return (
    <div className="bg-white shadow-md p-6 mb-6 rounded-lg  w-81">
      <div className="mb-5">
        <h3 className="text-higlight-text-color">{content}</h3>
      </div>
      <div className="flex space-x-6">
        <div>
          <img src={image} alt="name" className="rounded-full" />
        </div>
        <div className="translate-y-4">
          <p className="mb-2 font-bold">{name}</p>
          <h4>{role}</h4>
        </div>
      </div>
    </div>
  );
};

export default CardStyyle2;
