//App
import React from "react";
import { Link } from "react-router-dom";

//Component
import Button from "../reusables/button";

const SignupPanel = () => {
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
                <div>
                  <label
                    className="block text-gray-700 text-lg font-bold mb-2"
                    htmlFor="password"
                  >
                    Conmfirm Password
                  </label>
                  <input
                    type="password"
                    className="w-[330px] h-[40px] border-[#464646] border rounded-xl mb-5 indent-4"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center mt-20">
                <Button type="button" variant="primary" size="signin">
                  Create Account
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
                  Already have an account?{" "}
                  <Link to="/signin" className="text-primary-color font-bold">
                    Sign In
                  </Link>{" "}
                </p>
              </div>
            </section>
            <section>
              <div className="flex justify-center my-8">
                <h3 className="font-bold text-5xl mr-2">Partner</h3>
                <p className="text-5xl text-primary-color"> with Us</p>
              </div>

              <div>
                <img
                  src="Assets\people.svg"
                  alt="people"
                  className="rounded-xl w-[481px] px-0"
                />
              </div>
            </section>
            <section>
              <h3 className="my-9 font-bold text-2xl">
                Join our growing list of valuable partners today!
              </h3>
              <div className="bg-[#F1F6FF] w-[480px] -translate-x-[29px] flex justify-center py-10">
                <img src="Assets\shakehands.svg" alt="shake" />
              </div>
              <div className="bg-primary-color text-center py-3 rounded-xl my-8">
                <h3 className="text-white">
                  PLEASE COMPLETE THE PARTNERSHIP FORM BELOW
                </h3>
              </div>
              <div className="flex flex-col justify-center mb-10">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-[400px] h-[50px] rounded-xl mb-8 indent-4 bg-gray-100 border border-gray-300"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-[400px] h-[50px] rounded-xl mb-8 indent-4 bg-gray-100 border border-gray-300"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-[400px] h-[50px] rounded-xl mb-8 indent-4 bg-gray-100 border border-gray-300"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-[400px] h-[50px] rounded-xl mb-8 indent-4 bg-gray-100 border border-gray-300"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-[400px] h-[50px] rounded-xl mb-8 indent-4 bg-gray-100 border border-gray-300"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="w-[400px] h-[50px] rounded-xl mb-8 indent-4 bg-gray-100 border border-gray-300"
                />
              </div>
              <div className="mb-8">
                <Button type="button" variant="primary" size="medium">
                  Submit
                </Button>
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
      </section>
    </>
  );
};

export default SignupPanel;
