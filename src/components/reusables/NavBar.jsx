import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./button";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClick = () => {
    // Handle button click
  };

  return (
    <>
      {/*Desktop Navigation*/}
      <section className="hidden md:flex space-x-10 no-underline text-nav-text-color text-2xl  mt-4 relative -right-36">
        <Link to="/index" className="hover:text-primary-color ">
          Home
        </Link>
        <Link to="/services" className="hover:text-primary-color">
          Services
        </Link>
        <Link to="/therapists" className="hover:text-primary-color">
          Therapists
        </Link>
        <Link to="/privacy" className="hover:text-primary-color">
          Privacy
        </Link>
        <Link to="/community" className="hover:text-primary-color">
          Community
        </Link>
        {/* Small Primary Button */}
        <Button
          onClick={handleClick}
          type="button"
          variant="primary"
          size="small"
        >
          Sign In
        </Button>
      </section>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={handleToggleMobileMenu}
          className="block text-black focus:outline-none"
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="black"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            <div>
           
            </div>
            <div className="fixed top-0 right-0 h-5/6 w-72 bg-secondary-color p-4">
              <Link
                to="/index"
                className="block text-white py-2 hover:text-primary-color"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="block text-white py-2 hover:text-primary-color"
              >
                Services
              </Link>
              <Link
                to="/therapists"
                className="block text-white py-2 hover:text-primary-color"
              >
                Therapists
              </Link>
              <Link
                to="/privacy"
                className="block text-white py-2 hover:text-primary-color"
              >
                Privacy
              </Link>
              <Link
                to="/community"
                className="block text-white py-2 hover:text-primary-color"
              >
                Community
              </Link>
              <Button
                onClick={handleClick}
                type="button"
                variant="primary"
                size="small"
              >
                Sign In
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default NavBar;
