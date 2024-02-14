//App
import React from "react";

//Component
import Button from "../reusables/button";

const PriceCard = ({ title, price, time, detail }) => {
  return (
    <div className="bg-white shadow-md px-6 py-12 mb-6 rounded-lg  w-81 mx-auto text-center hover:bg-services-color">
      <h4 className="mb-8">{title}</h4>
      <div className="flex items-center justify-center mb-8">
        <h3 className="font-bold text-2xl">{price}</h3>
        <h5 className="text-xs">{time}</h5>
      </div>
      <ul className="mb-5">
        {detail.map((item, index) => (
          <li key={index} className="mb-5">{item.item}</li>
        ))}
      </ul>
      <div>
        <Button type="button" variant="primary" size="small">
          Get Package
        </Button>
      </div>
    </div>
  );
};

export default PriceCard;
