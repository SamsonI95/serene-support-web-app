import { useState, useEffect } from "react";

//Component
import { IoIosArrowDropupCircle } from "react-icons/io";

const ArrowToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const arrowToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        // Adjust threshold as needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={arrowToTop}
      className={`fixed text-2xl bottom-10 right-10 z-10 rounded-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <IoIosArrowDropupCircle />
    </button>
  );
};

export default ArrowToTop;
