import React, { useState } from "react";
import StarRating from "../reusables/StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const DoctorModal = ({ therapistData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <section>
        <section className="md:hidden px-7">
          {/* Mobile Home Page */}
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white">
              <button onClick={toggleModal}>{therapistData.name}</button>
              <div>
                <button onClick={toggleModal}><FontAwesomeIcon icon={faTimes}/></button>
                <div>
                  <img src={image} alt={therapistData.name} />
                  <div>
                    <h3>{therapistData.name}</h3>
                    <p>{therapistData.role}</p>
                    <div className="flex items-center mt-2">
                      <StarRating ratingNumber={rating} />
                      <span className="text-xs text-yellow-400 relative top-0">{`(${rating})`}</span>
                    </div>
                    <p>{therapistData.session}</p>
                    <div>
                      <h4>Session Type</h4>
                      <div>
                        {therapistData.sessionType.map((item) => (
                          <h5 key={item.item} className="mb-5">
                            {item.item}
                          </h5>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                  <h3>Biorgaphy:</h3>
                  <ul className="mb-5">
                    {therapistData.biography.map((item) => (
                        <li key={item.item} className="mb-5">
                        {item.item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Education:</h3>
                  <ul className="mb-5">
                    {therapistData.education.map((item) => (
                      <li key={item.item} className="mb-5">
                        {item.item}
                      </li>
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

export default DoctorModal;
