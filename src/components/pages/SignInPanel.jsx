//App
import React from "react";
import { Link } from "react-router-dom";

//Component
import Button from "../reusables/button";

const SignInPanel = () => {
  return (
    <>
      <section>
        <section className="md:hidden px-7">
          {/*Mbile SignIn Page*/}
          <section className="md:flex md:items-center md:justify-between">
            <section>
              <div className="flex flex-col items-center">
                <div className="mt-5">
                  <img src="Assets\Group 250.png" alt="user" />
                </div>
                <div className="text-center my-10">
                  <h3 className="text-secondary-color font-medium text-2xl">
                    Welcome
                  </h3>
                  <p className="text-secondary-color font-bold text-3xl">
                    Log in to your Account
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div>
                  <label
                    className="block text-gray-700 text-lg font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-[330px] h-[40px] border-[#464646] border rounded-xl mb-5 indent-4"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-lg font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-[330px] h-[40px] border-[#464646] border rounded-xl mb-5 indent-4"
                  />
                </div>
              </div>
              <div className="float-right relative right-12">
                <p className="text-primary-color font-bold">Forgot Password</p>
              </div>
              <div className="flex flex-col items-center mt-20">
                <Button type="button" variant="primary" size="signin">
                  Sign In
                </Button>
                <p className="my-8">OR</p>
                <Button type="button" variant="white" size="signin">
                  <img
                    src="Assets\icons8-google-48 1.svg"
                    alt="google"
                    className="mr-3"
                  />
                  Continue with Google
                </Button>
              </div>
              <div className="flex justify-center mt-7 mb-10">
                <p>
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-primary-color font-bold">
                    Create an Account
                  </Link>{" "}
                </p>
              </div>
            </section>
            <section className="-translate-x-12">
              <div className="bg-bcg-color w-140 py-36 px-36">
                <h3 className=" text-center -translate-x-20 font-semibold text-2xl w-96">
                  Get latest News by subscribing to our Newsletter
                </h3>
                <div className="flex translate-y-10 justify-center">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="bg-white indent-5 rounded-l-lg rounded-r-none w-48 h-11"
                  />
                  <Button type="button" variant="subscribe" size="sub-button">
                    Subscribe
                  </Button>
                </div>
              </div>
            </section>
          </section>
        </section>

        {/* Desktop SignIn Page */}
        <section className="hidden max-w-[1440px] mx-auto px-24 md:flex items-center justify-between h-fit"></section>
      </section>
    </>
  );
};

export default SignInPanel;
