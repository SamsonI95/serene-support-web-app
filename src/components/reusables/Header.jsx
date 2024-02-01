import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <div className="bg-white shadow-md">
        <section className="flex items-center justify-between p-4 md:px-40">
          <div className="flex items-center">
            <img src="Assets/logo.png" alt="company-logo" className="mr-4" />
          </div>
          <NavBar />
        </section>
      </div>
    </>
  );
};

export default Header;
