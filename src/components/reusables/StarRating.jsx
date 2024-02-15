// YourStarRating.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ ratingNumber }) => {
  const renderStars = () => {
    const stars = [];
    const roundedRating = Math.round(ratingNumber); // Round to the nearest whole number

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={i <= roundedRating ? faStar : ['far', 'star']} // Solid star if i is less than or equal to the rating, otherwise, regular (outlined) star
          className="text-yellow-400 text-sm"
        />
      );
    }

    return stars;
  };

  return <div className="flex">{renderStars()}</div>;
};

export default StarRating;
