import React from "react";
import { Link } from "react-router-dom";

import Button from "./button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const handleClick = () => {
    // Handle button click
  };

  return (
    <footer className="bg-secondary-color p-4 md:p-6 fixed bottom-0 w-full h-max">
      <div className="flex items-center justify-between">
        {/* Mobile Footer */}
        <div className="md:hidden">
          <section className="flex mt-16">
            <Link to="/home" className="-mx-2">
              <img
                src="public/Assets/logowhite.png"
                alt="logo-icon"
                className="scale-75"
              />
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-primary-color relative -right-24"
            >
              <Button
                onClick={handleClick}
                type="button"
                variant="primary"
                size="small2"
                className="scale-75"
              >
                Explore our privacy
              </Button>
            </Link>
          </section>
          <section className="mt-10 text-sm flex mx-5 justify-between">
            <div>
              <h3 className="text-white text-xl mb-5">What we do</h3>
              <ul className="text-white">
                <li className="mb-5">
                  <Link
                    to="/home"
                    className="text-white hover:text-primary-color"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-5">
                  <Link
                    to="/services"
                    className="text-white hover:text-primary-color"
                  >
                    Services
                  </Link>
                </li>
                <li className="mb-5">
                  <Link
                    to="/booking"
                    className="text-white hover:text-primary-color"
                  >
                    Booking
                  </Link>
                </li>
                <li className="mb-5">
                  <Link
                    to="/community"
                    className="text-white hover:text-primary-color"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div className="-mr-12">
              <h3 className="text-white text-xl mb-5">Get our App</h3>
              <ul className="text-white">
                <li className="mb-5">
                  <Link to="/" className="text-white hover:text-primary-color">
                    Android
                  </Link>
                </li>
                <li className="mb-5">
                  <Link
                    to="/services"
                    className="text-white hover:text-primary-color"
                  >
                    iPhone
                  </Link>
                </li>
              </ul>
            </div>
          </section>
          <section className="mt-10 text-sm flex mx-5 justify-between">
            <div>
              <h3 className="text-white text-xl mb-5">Help</h3>
              <ul className="text-white">
                <li className="mb-5">
                  <Link to="/" className="text-white hover:text-primary-color">
                    Get Help
                  </Link>
                </li>
                <li className="mb-5">
                  <Link
                    to="/services"
                    className="text-white hover:text-primary-color"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="-mr-24">
              <h3 className="text-white text-xl mb-5">Transparency</h3>
              <ul className="text-white">
                <li className="mb-5">
                  <Link to="/" className="text-white hover:text-primary-color">
                    Cookie Policy
                  </Link>
                </li>
                <li className="mb-5">
                  <Link
                    to="/services"
                    className="text-white hover:text-primary-color"
                  >
                    Information Security Policy
                  </Link>
                </li>
              </ul>
            </div>
          </section>
          <section className="flex mt-10 mx-5">
            <div className="text-white text-3xl">
              <FontAwesomeIcon icon={faFacebookSquare} className="mr-2" />
              <FontAwesomeIcon icon={faInstagramSquare} className="mr-2" />
              <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
              <FontAwesomeIcon icon={faSquareXTwitter} className="mr-2" />
            </div>
            <div className="translate-x-36">
              <input type="text" className="rounded-2xl w-28 h-8" />
            </div>
          </section>
          <section>
            <div className="w-96 h-1 bg-white translate-x-5 mt-16"></div>
          </section>
          <section className="flex mt-16 justify-between">
            <div className="flex text-white translate-x-5">
              <h3>2023</h3>
              <h4 className="font-light translate-x-1">SerenSupport</h4>
            </div>
            <div className="text-white translate-x-7">
              <h3>Terms of Service</h3>
            </div>
          </section>
        </div>

        {/* Desktop Footer */}
        <div className="hidden md:flex space-x-5 mt-10 mb-20 px-16">
          <section>
            <Link to="/home">
              <img
                src="public/Assets/logowhite.png"
                alt="logo-icon"
                className="scale-75"
              />
            </Link>
            <div className="translate-x-7 mt-28">
              <Link
                to="/contact"
                className="text-white hover:text-primary-color"
              >
                <Button
                  onClick={handleClick}
                  type="button"
                  variant="primary"
                  size="small2"
                  className="scale-75"
                >
                  Explore our privacy
                </Button>
              </Link>
            </div>
          </section>
          <section className="flex mb-12 translate-x-1/2">
            <div className="mr-20 mb-12">
              <h3 className="text-white text-xl mb-5">What we do</h3>
              <ul className="text-white">
                <li className="mb-5">
                  <Link
                    to="/home"
                    className="text-white hover:text-primary-color"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-5">
                  <Link
                    to="/services"
                    className="text-white hover:text-primary-color"
                  >
                    Services
                  </Link>
                </li>
                <li className="mb-5">
                  <Link
                    to="/booking"
                    className="text-white hover:text-primary-color"
                  >
                    Booking
                  </Link>
                </li>
                <li className="mb-5">
                  <Link
                    to="/community"
                    className="text-white hover:text-primary-color"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mr-20 mb-12">
              <h3 className="text-white text-xl mb-5">Get our App</h3>
              <ul className="text-white">
                <li className="mb-5">
                  <Link to="/" className="text-white hover:text-primary-color">
                    Android
                  </Link>
                </li>
                <li className="mb-5">
                  <Link
                    to="/services"
                    className="text-white hover:text-primary-color"
                  >
                    iPhone
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mr-20 mb-12">
              <h3 className="text-white text-xl mb-5">Help</h3>
              <ul className="text-white">
                <li className="mb-5">
                  <Link to="/" className="text-white hover:text-primary-color">
                    Get Help
                  </Link>
                </li>
                <li className="mb-5">
                  <Link
                    to="/services"
                    className="text-white hover:text-primary-color"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-white text-xl mb-5">Transparency</h3>
              <ul className="text-white">
                <li className="mb-5">
                  <Link to="/" className="text-white hover:text-primary-color">
                    Cookie Policy
                  </Link>
                </li>
                <li className="mb-5">
                  <Link
                    to="/services"
                    className="text-white hover:text-primary-color"
                  >
                    Information Security Policy
                  </Link>
                </li>
              </ul>
            </div>
          </section> 
          <section className="absolute bottom-24">
            <div className="w-1400 h-1 bg-white"></div>
          </section>
          <section className="flex translate-x-4 space-x-40 absolute mb-5 bottom-0">
            <div className="flex text-white">
              <h3>2023</h3>
              <h4 className="font-light">SerenSupport</h4>
            </div>
            <div className="text-white">
              <h3>Terms of Service</h3>
            </div>
            <div className="text-white text-3xl">
              <FontAwesomeIcon icon={faFacebookSquare} className="mr-2" />
              <FontAwesomeIcon icon={faInstagramSquare} className="mr-2" />
              <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
              <FontAwesomeIcon icon={faSquareXTwitter} className="mr-2" />
            </div>
            <div className="translate-x-85">
              <input type="text" className="rounded-2xl w-28 h-8" />
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
