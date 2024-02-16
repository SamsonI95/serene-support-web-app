import React from "react";
import TherapistCard1 from "../reusables/TherapistCard1";

const DoctorCardModal = () => {
  const [modalData] = React.useState([]);

  if (!modalData) {
    return <p>Loading...</p>; // Placeholder while loading data
  }

  return (
    <div>
      {modalData.map((therapistData) => (
        <TherapistCard1
          key={therapistData.name}
          therapistData={therapistData}
        />
      ))}
    </div>
  );
};

export default DoctorCardModal;
