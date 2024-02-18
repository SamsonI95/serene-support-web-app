import React from "react";

const NewsCard = ({ image, title, content }) => {
  return (
    <div className="relative p-9 w-[330px] shadow-md bg-white mb-10 rounded-md">
      <div className="rounded-md">
        <img src={image} alt={title} />
      </div>
      <h3 className="font-bold text-2xl mt-8 mb-3">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default NewsCard;
