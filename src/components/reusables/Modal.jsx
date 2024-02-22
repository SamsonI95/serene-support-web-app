//App
import React, { useState } from "react";

//Component
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
    
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <section>
        <section className="md:hidden px-7">
          {/* Mobile Home Page */}
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white">
              <button onClick={toggleModal}>{name}</button>
              <div>
                <button onClick={toggleModal}>
                  <FontAwesomeIcon icon={faTimes} />
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
                    <div>
                      <h4>Session Type</h4>
                      <div>
                        <ul>
                          {sessionType.map((type, index) => (
                            <li key={index}>{type.item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3>Biorgaphy:</h3>
                <ul className="mb-5">
                  {biography.map((item, index) => (
                    <li key={index}>{item.item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Education:</h3>
                <ul className="mb-5">
                  {education.map((item, index) => (
                    <li key={index}>{item.item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Modal;
