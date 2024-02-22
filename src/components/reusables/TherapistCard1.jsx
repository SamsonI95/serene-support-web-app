//App
import React, { useState } from "react";

//Component
import Button from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import StarRating from "../reusables/StarRating";

const TherapistCard1 = ({
  image,
  name,
  role,
  ratingNumber,
  session,
  sessionType,
  biography,
  education,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <button onClick={toggleModal}>
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

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-10">
          <div className="bg-white px-5 py-10 mx-5">
            <button onClick={toggleModal} className="float-right">
              <FontAwesomeIcon icon={faTimes} className="text-3xl" />
            </button>
            <div className="flex space-x-2">
              <img src={image} alt={name} />
              <div className="text-left">
                <h3 className="font-bold text-xl">{name}</h3>
                <p>{role}</p>
                <div className="flex items-center mt-2">
                  {/* Assuming you have a StarRating component */}
                  <StarRating ratingNumber={ratingNumber} />
                  <span className="text-xs text-yellow-400 relative top-0">{`(${ratingNumber})`}</span>
                </div>
                <p className="text-xs my-3">{session}</p>
                <div>
                  <h4 className="mt-5 text-xs">Session Type</h4>
                  <div>
                    <ul className="flex space-x-2 mt-3 text-sm">
                      {sessionType.map((type, index) => (
                        <li className="bg-[#ECF1FA] border rounded-xl px-3 py-1" key={index}>{type.item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-left mt-10">
              <h3 className="font-bold text-xl pl-6 mb-5">Biography:</h3>
              <ul className="mb-5 list-inside">
                {biography.map((item, index) => (
                  <li key={index} className="mb-5 relative before:inline-block before:h-4 before:w-4 before:mr-2 before:bg-[#A6BFEB] before:rounded-full before:content-['']">{item.item}</li>
                ))}
              </ul>
            </div>
            <div className="text-left mb-10">
              <h3 className="font-bold text-xl pl-6 mb-5">Education:</h3>
              <ul className="mb-5 list-inside">
                {education.map((item, index) => (
                  <li key={index} className="mb-5 w-[420px] relative before:inline-block before:h-4 before:w-4 before:mr-2 before:bg-[#A6BFEB] before:rounded-full before:content-['']">{item.item}</li>
                ))}
              </ul>
            </div>
            <div>
              <Button type="button" variant="primary" size="small">
                Book a Session
              </Button>
            </div>
          </div>
        </div>
      )}
    </button>
  );
};

export default TherapistCard1;
