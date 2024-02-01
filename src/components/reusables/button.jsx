// Button.js
import React from "react";

const Button = ({ children, onClick, type, variant, size }) => {
  // Determine the button style based on the variant prop
  const getButtonStyle = () => {
    switch (variant) {
      case "primary":
        return "bg-primary-color text-white ";
      case "secondary":
        return "bg-gray-300 hover:bg-gray-400 text-gray-800";
      // Add more variants as needed
      default:
        return "bg-gray-500 hover:bg-gray-700 text-white";
    }
  };

  const getButtonSize = () => {
    switch (size) {
      case "small":
        return "h-16 w-36 px-2 py-1 text-lg rounded-2xl";
      case "medium":
        return "px-4 py-2 text-base";
      case "large":
        return "px-6 py-3 text-lg";
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
