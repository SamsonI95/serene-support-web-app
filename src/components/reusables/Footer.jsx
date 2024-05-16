import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

  const [ locale, setLocale ] = useState("en");

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLocale(selectedLanguage);
    let loc = "http://localhost:5173/";
    window.location.replace(
      loc + "?lng=" + e.taregt.value
    )
  };

  return (
    <footer className="bg-secondary-color p-4 md:p-6 bottom-0 h-fit">
      <div className="flex items-center ">
        {/* Mobile Footer */}
        <div className="md:hidden">
          <section className="flex mt-16">
            <Link to="/home" className="-mx-2">
              <img
                src="Assets/logowhite.png"
                alt="logo-icon"
                className="scale-75"
              />
            </Link>
            <Link
              to="/privacy"
              className="text-white hover:text-primary-color relative -right-[2.5rem]"
            >
              <Button
                onClick={handleClick}
                type="button"
                variant="primary"
                size="small2"
                className="scale-75 relative -right-[10px]"
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
                    to="/therapists"
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
            <div className="-translate-x-6">
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
            <div className="translate-x-7">
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
            <div className="translate-x-[7rem]">
              <label htmlFor="languageSelector" className="sr-only">
                {t("Select Language")}
              </label>
              <select
                id="languageSelector"
                className="rounded-2xl w-28 h-8 indent-2.5 cursor-pointer"
                value={locale}
                onChange={handleLanguageChange}
              >
                <option>Select</option>
                <option value="zh">Chinese</option>
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">French</option>
                <option value="gb">German</option>
                {/* Add more language options as needed */}
              </select>
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
            <div className="text-white translate-x-4">
              <h3>Terms of Service</h3>
            </div>
          </section>
        </div>

        {/* Desktop Footer */}
        <div className="hidden w-fit md:block items-center justify-center m-auto space-x-5">
          <section className="relative top-16 w-fit">
            <Link to="/home">
              <img
                src="Assets/logowhite.png"
                alt="logo-icon"
                className="scale-75"
              />
            </Link>
            <div className="translate-x-7 mt-28">
              <Link
                to="/privacy"
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
          <section className="inline-flex translate-x-1/3 relative -top-36">
            <div className="mr-36 mb-8">
              <h3 className="text-white text-xl mb-10">What we do</h3>
              <ul className="text-white">
                <li className="mb-8">
                  <Link
                    to="/home"
                    className="text-white hover:text-primary-color"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-8">
                  <Link
                    to="/therapists"
                    className="text-white hover:text-primary-color"
                  >
                    Therapists
                  </Link>
                </li>
                <li className="mb-8">
                  <Link
                    to="/therapists"
                    className="text-white hover:text-primary-color"
                  >
                    Booking
                  </Link>
                </li>
                <li>
                  <Link
                    to="/community"
                    className="text-white hover:text-primary-color"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mr-36 mb-8">
              <h3 className="text-white text-xl mb-10">Get our App</h3>
              <ul className="text-white">
                <li className="mb-8">
                  <Link to="/" className="text-white hover:text-primary-color">
                    Android
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-white hover:text-primary-color"
                  >
                    iPhone
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mr-36 mb-8">
              <h3 className="text-white text-xl mb-10">Help</h3>
              <ul className="text-white">
                <li className="mb-8">
                  <Link to="/" className="text-white hover:text-primary-color">
                    Get Help
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-white hover:text-primary-color"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-xl mb-10">Transparency</h3>
              <ul className="text-white">
                <li className="mb-8">
                  <Link to="/" className="text-white hover:text-primary-color">
                    Cookie Policy
                  </Link>
                </li>
                <li>
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
          <section>
            <div className="w-1240 h-1 bg-white mb-12"></div>
          </section>
          <section className="flex justify-evenly bottom-0">
            <div className="flex text-white space-x-5">
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
            <div>
              <input type="text" className="rounded-2xl w-28 h-8" />
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
