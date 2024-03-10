import React from "react";

const ServicesList = ({ title, content, click }) => {
  return (
    <>
      <div className="mt-4">
        <li className="list-none items-center justify-center">
          <div>
            <div className="flex items-center">
              {" "}
              <img src="Assets/list-button.png" alt="List Marker" />
            </div>
            <div className="relative left-10 -top-6">
              <h4 className="font-bold text-xl md:text-sm mb-4">{title}</h4>
              <p className="mb-4 w-80">{content}</p>
              <h5 className="text-sm md:text-xs mb-4 hover:text-primary-color cursor-pointer">
                {click}
              </h5>
            </div>
          </div>
        </li>
      </div>
    </>
  );
};

export default ServicesList;
