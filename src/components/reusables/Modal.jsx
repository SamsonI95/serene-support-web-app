//App
import React from "react";

//component
import Button from "../reusables/button";
import StarRating from "../reusables/StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";



const Modal = ({
  image,
  name,
  profession,
  ratingNumber,
  sessionsDone,
  sessionType,
  biography,
  education,
}) => {
  return (
    <>
      <div>
        {/*Mobvile popup*/}
        <section>
          <section className="md:hidden px-7">
            {/* Mobile Home Page */}
            <section className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm md:flex md:items-center md:justify-between">
              <div className="bg-white p-4">
                <button className="block text-black focus:outline-none float-end">
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="w-10 h-10 text-white mb-10 left-7"
                  />
                </button>
                <div>
                  <img src={image} alt={name} />
                  <div>
                    <h3>{name}</h3>
                    <p>{profession}</p>
                    <div className="flex items-center mt-2">
                      <StarRating ratingNumber={ratingNumber} />
                      <span className="text-xs text-yellow-400 relative top-0">{`(${ratingNumber})`}</span>
                    </div>
                    <p>{sessionsDone}</p>
                    <h4>Session Type:</h4>
                    <ul>
                      {sessionType.map((item, index) => (
                        <li key={index}>{item.list}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h3>Biorgaphy:</h3>
                  <ul>
                    {biography.map((item, index) => (
                      <li key={index}>{item.list}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Education:</h3>
                  <ul>
                    {education.map((item, index) => (
                      <li key={index}>{item.list}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Button type="button" variant="primary" size="small">
                    Get Package
                  </Button>
                </div>
              </div>
            </section>
          </section>
        </section>
      </div>
    </>
  );
};

export default Modal;
