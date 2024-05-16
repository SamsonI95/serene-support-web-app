import { useState, useEffect } from "react";

const ArrowToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const arrowToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        // Adjust threshold as needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("arrow", toggleVisibility);

    return () => {
      window.removeEventListener("arrow", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={arrowToTop}
      className={`fixed bottom-10 right-10 z-10 rounded-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      Up
    </button>
  );
};

export default ArrowToTop;
