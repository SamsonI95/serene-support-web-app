// Button.js
import React from "react";

const Button = ({ children, onClick, type, variant, size }) => {
  // Determine the button style based on the variant prop
  const getButtonStyle = () => {
    switch (variant) {
      case "primary-small":
        return "text-sm bg-primary-color text-white hover:bg-white hover:text-primary-color hover:border-primary-color border-solid border"
      case "primary":
        return "bg-primary-color text-white hover:bg-white hover:text-primary-color hover:border-primary-color border-solid border";
      case "secondary":
        return "bg-gray-300 hover:bg-gray-400 text-gray-800";
      case "hollow":
        return "bg-white hover:bg-secondary-color hover:text-white text-primary-color border-primary-color border-solid border"
        case "hollow-small":
        return "text-sm bg-white hover:bg-secondary-color hover:text-white text-primary-color border-primary-color border-solid border"  
      // Add more variants as needed
      case "subscribe":
        return "bg-primary-color text-white"; 
      default:
        return "bg-gray-500 hover:bg-gray-700 text-white";
    }
  };

  const getButtonSize = () => {
    switch (size) {
      case "xsmall":
        return "h-16 w-30 px-2 py-1 text-lg rounded-2xl"
      case "small":
        return "h-16 w-36 px-2 py-1 text-lg rounded-2xl";
      case "small2":
        return "h-16 w-36 px-2 py-1 text-xs rounded-2xl";
      case "medium":
        return "h-16 w-40 px-4 py-2 text-base rounded-2xl";
        case "semi-medium":
        return "h-16 w-45 px-4 py-2 text-base rounded-2xl";
      case "large":
        return "px-6 py-3 text-lg";
      case "sub-button":
        return "px-4  text-lg rounded-l-none rounded-r-lg";
      // Add more sizes as needed
      default:
        return "px-4 py-2 text-base";
    }
  };

  return (
    <button
      className={`rounded focus:outline-none ${getButtonSize()} ${getButtonStyle()}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
