import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <div className="bg-white shadow-md lg:opacity-65">
        <section className=" mx-auto px-7 flex items-center justify-between p-4 md:px-20">
          <div className="flex items-center relative">
            <Link to="/home">
              <img
                src="Assets/logo.png"
                alt="company-logo"
                className="-left-24 w-auto md:w-full md:-left-5"
              />
            </Link>
          </div>
          <div className="relative right-10">
            <NavBar />
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
