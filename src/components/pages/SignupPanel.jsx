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
            </section>
        </section>
      </section>
    </>
  );
};

export default SignupPanel;
