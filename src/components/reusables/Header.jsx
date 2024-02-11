import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <div className="bg-white shadow-md">
        <section className=" max-w-[1440px] mx-auto px-7 flex items-center justify-between p-4 md:px-20">
          <div className="flex items-center relative">
            <img
              src="Assets/logo.png"
              alt="company-logo"
              className="-left-24 w-auto md:w-full md:-left-5"
            />
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
