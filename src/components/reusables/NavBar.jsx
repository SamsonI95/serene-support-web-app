//App
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

//Component
import Button from "./button";
import Authentication from "./Authentication";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

//Server
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    // Handle button click
    navigate("/signup");
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/*Desktop Navigation*/}
      <section className="hidden md:flex no-underline text-nav-text-color text-2xl w-max  mt-4 relative">
        <div className="relative top-4 right-20 space-x-10">
          <Link
            to="/home"
            className="hover:text-primary-color focus:text-primary-color active:text-primary-color"
          >
            Home
          </Link>
          <Link
            to="/therapists"
            className="hover:text-primary-color focus:text-primary-color active:text-primary-color"
          >
            Therapists
          </Link>
          <Link
            to="/privacy"
            className="hover:text-primary-color focus:text-primary-color active:text-primary-color"
          >
            Privacy
          </Link>
          <Link
            to="/community"
            className="hover:text-primary-color focus:text-primary-color active:text-primary-color"
          >
            Community
          </Link>
        </div>
        {/* Small Primary Button */}
        <Authentication />
      </section>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={handleToggleMobileMenu}
          className="block text-black focus:outline-none"
        >
          <FontAwesomeIcon icon={faBars} className="w-10 h-10" />
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            <div></div>
            <div className="fixed top-0 right-0 h-[700px] w-72 bg-secondary-color p-4 z-10 }">
              <button
                onClick={handleToggleMobileMenu}
                className="block text-black focus:outline-none float-end"
              >
                <FontAwesomeIcon
                  icon={faTimes}
                  className="w-10 h-10 text-white mb-10 left-7"
                />
              </button>
              <div className="translate-x-5 translate-y-5">
                <Authentication/>
                <Link
                  to="/home"
                  className="block text-white py-2 hover:text-primary-color mt-20 mb-10"
                  onClick={handleToggleMobileMenu}
                >
                  Home
                </Link>
                <Link
                  to="/therapists"
                  className="block text-white py-2 hover:text-primary-color  mb-10"
                  onClick={handleToggleMobileMenu}
                >
                  Therapists
                </Link>
                <Link
                  to="/privacy"
                  className="block text-white py-2 hover:text-primary-color  mb-10"
                  onClick={handleToggleMobileMenu}
                >
                  Privacy
                </Link>
                <Link
                  to="/community"
                  className="block text-white py-2 hover:text-primary-color  mb-20"
                  onClick={handleToggleMobileMenu}
                >
                  Community
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default NavBar;
