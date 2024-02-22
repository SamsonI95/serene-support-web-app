//App
import React, { useState } from "react";

//Component
import Button from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import StarRating from "../reusables/StarRating";

const TherapistCard2 = ({
  image,
  image2,
  name,
  role,
  ratingNumber,
  content,
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
    <div className="relative h-fit overflow-hidden shadow-md bg-white mb-4 rounded-md">
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
          <Button
            type="button"
            variant="hollow"
            size="small"
            onClick={toggleModal}
          >
            About
          </Button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center z-10">
          <div className="bg-white px-5 py-4 mt-10 mb-10 rounded-lg">
            <button onClick={toggleModal} className="float-right">
              <FontAwesomeIcon icon={faTimes} className="text-3xl" />
            </button>
            <div className="flex items-center">
              <img
                src={image2}
                alt={name}
                className="rounded-xl scale-75 -translate-y-5"
              />
              <div className="-translate-y-5">
                <h3 className="font-bold text-xl">{name}</h3>
                <p className="w-[250px]">{role}</p>
                <div className="">
                  {/* Assuming you have a StarRating component */}
                  <StarRating ratingNumber={ratingNumber} />
                  <span className="text-xs text-yellow-400 relative top-0">{`(${ratingNumber})`}</span>
                </div>
                <p className="text-xs my-3">{session}</p>
              </div>
              <div className="-translate-y-5">
                <h4 className="mt-5 text-xs text-center">Session Type</h4>
                <div>
                  <ul className="flex flex-col mt-3 text-sm">
                    {sessionType.map((type, index) => (
                      <li
                        className="bg-[#ECF1FA] text-center border rounded-xl px-3 py-1 mb-4"
                        key={index}
                      >
                        {type.item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-10 mr-5 translate-x-10 -translate-y-10">
              <div className="text-left -mt-6">
                <h3 className="font-bold text-xl pl-6 mb-5">Biography:</h3>
                <ul className="mb-5 list-inside">
                  {biography.map((item, index) => (
                    <li
                      key={index}
                      className="mb-5 text-xs relative before:inline-block before:h-4 before:w-4 before:mr-2 before:bg-[#A6BFEB] before:rounded-full before:content-['']"
                    >
                      {item.item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-left">
                <h3 className="font-bold text-xl pl-6 mb-5">Education:</h3>
                <ul className="mb-5 list-inside">
                  {education.map((item, index) => (
                    <li
                      key={index}
                      className="mb-5 text-xs w-[420px] relative before:inline-block before:h-4 before:w-4 before:mr-2 before:bg-[#A6BFEB] before:rounded-full before:content-['']"
                    >
                      {item.item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-center -translate-y-10npm ">
              <Button type="button" variant="primary" size="small">
                Book a Session
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TherapistCard2;
