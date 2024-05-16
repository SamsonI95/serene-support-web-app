//App
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Component
import Button from "../reusables/button";
import { scrollToTop } from "../Page Component/ScrollToTop";
import ArrowToTop from "../Page Component/ArrowToTop";

const Privacy = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <section>
        <section className="md:hidden px-7">
          {/* Mobile Home Page */}
          <section className="md:flex md:items-center md:justify-between">
            <section>
              <div className="flex justify-center items-center my-10">
                <img src="Assets/Group 350.svg" alt="pp" />
              </div>

              <div className="text-center">
                <h3 className="font-bold text-4xl text-secondary-color">
                  Our Privacy Policy
                </h3>
                <h3 className="text-2xl mb-5">and agreements</h3>
                <p className="text-lg">
                  We are in relentless pursuits of scientific breakthrough and
                  revolutionary{" "}
                </p>
              </div>
              <div className="flex items-center justify-center my-10">
                <Button type="button" variant="primary" size="large">
                  View Agreement
                </Button>
              </div>
            </section>
            <section className="my-6">
              <div className="border shadow-lg rounded-xl px-6 py-6 w-56 m-auto">
                <div className="mb-5">
                  <h3 className="font-medium text-other-secondary-color text-3xl">
                    18 Million
                  </h3>
                  <p className="text-primary-color">Daily Users</p>
                </div>
                <div className="mb-5">
                  <h3 className="font-medium text-other-secondary-color text-3xl">
                    20 Million+
                  </h3>
                  <p className="text-primary-color">Daily Users</p>
                </div>
                <div className="">
                  <h3 className="font-medium text-other-secondary-color text-3xl">
                    2.3 Million
                  </h3>
                  <p className="text-primary-color">Daily Users</p>
                </div>
              </div>
            </section>
            <section className="my-20">
              <h3 className="text-4xl text-secondary-color mb-5">
                Policy & Agreement
              </h3>
              <p className="text-sm w-52 text-nav-text-color">
                We are in relentless pursuits of scientific breakthrough and
                revolutionary medicines that will
              </p>
              <div className="my-10">
                <Button type="button" variant="primary" size="small">
                  View more
                </Button>
              </div>
            </section>
            <section className="flex justify-center">
              <div className="bg-[#F8FBFD] bg-opacity-50 border rounded-xl w-fit p-7 scale-115">
                <h3 className="text-4xl mb-4">Need Help?</h3>
                <p className="text-sm w-64 mb-20">
                  We are in relentless pursuits of scientific breakthrough and{" "}
                </p>
                <div className="grid">
                  <input
                    type="text"
                    placeholder="First Name___"
                    className="w-48 pt-1 pb-2 rounded-lg border indent-3 mb-10"
                  />
                  <input
                    type="text"
                    placeholder="Last Name___"
                    className="w-48 pt-1 pb-2 rounded-lg border indent-3 mb-10"
                  />
                  <input
                    type="phone"
                    placeholder="Phone ___"
                    className="w-48 pt-1 pb-2 rounded-lg border indent-3 mb-10"
                  />
                  <input
                    type="email"
                    placeholder="Email address ___"
                    className="w-48 pt-1 pb-2 rounded-lg border indent-3 mb-10"
                  />
                  <textarea
                    placeholder="Describe your Issue ___"
                    className="w-48  pt-1 pb-2 rounded-lg border indent-2 mb-10"
                  ></textarea>
                </div>
              </div>
            </section>
            <div className="flex justify-center -translate-y-48">
              <img
                src="public/Assets/Group 361.svg"
                alt="lock"
                className="scale-90"
              />
            </div>
            <section className="-translate-x-[2rem]">
              <div className="bg-bcg-color w-[450px] py-36">
                <h3 className=" text-center -translate-x-[6rem] font-semibold text-2xl w-96">
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

        {/* Desktop Home Page */}
        <section className="hidden max-w-[1440px] mx-auto px-24 md:flex items-center justify-between h-fit">
          <section>
            <section className="flex my-5">
              <div className="flex">
                <img src="Assets/g10.svg" alt="health" />
              </div>
              <div className="border w-186 h-180 p-20 bg-[#F6FAFF] shadow-xl">
                <h3 className="font-bold text-6xl text-secondary-color">
                  Our Privacy Policy
                </h3>
                <h3 className="text-5xl mb-5">and agreements</h3>
                <p className="text-lg my-20 w-97">
                  We are in relentless pursuits of scientific breakthrough and
                  revolutionary medicines that will create a healthier world for
                  everyone. We are in relentless
                </p>
                <div className="my-10">
                  <Button type="button" variant="primary" size="large">
                    View Agreement
                  </Button>
                </div>
              </div>
            </section>
            <section className="-translate-y-48 ">
              <div className="border flex justify-center bg-[#F6FAFF] shadow-2xl rounded-xl p-6 w-145 space-x-10">
                <div className="">
                  <h3 className="font-medium text-other-secondary-color text-3xl">
                    18 Million
                  </h3>
                  <p className="text-primary-color">Daily Users</p>
                </div>
                <div className="">
                  <h3 className="font-medium text-other-secondary-color text-3xl">
                    20 Million+
                  </h3>
                  <p className="text-primary-color">Daily Users</p>
                </div>
                <div className="">
                  <h3 className="font-medium text-other-secondary-color text-3xl">
                    2.3 Million
                  </h3>
                  <p className="text-primary-color">Daily Users</p>
                </div>
              </div>
            </section>
            <section>
              <div className="text-justify flex flex-col justify-center items-center">
                <h3 className="text-6xl text-secondary-color mb-20">
                  Policy & Agreement
                </h3>
                <p className="text-sm w-186 text-nav-text-color">
                  We are in relentless pursuits of scientific breakthrough and
                  revolutionary medicines that will create a healthier world for
                  everyone. We are in relentless pursuits of scientific
                  breakthrough and revolutionary medicines that will create a
                  healthier world for everyone. We are in relentless pursuits of
                  scientific breakthrough and revolutionary medicines that will
                  create a healthier world for everyone. We are in relentless
                  pursuits of scientific breakthrough and revolutionary
                  medicines that will create a healthier world for everyone.
                </p>
                <div className="my-10">
                  <Button type="button" variant="primary" size="small">
                    View more
                  </Button>
                </div>
              </div>
            </section>
            <section className="mb-20">
              <div>
                <h3 className="text-6xl mb-10 text-secondary-color">
                  Need Help?
                </h3>
                <p className="text-lg w-140 mb-20">
                  We are in relentless pursuits of scientific breakthrough and
                  revolutionary medicines that will create a healthier world for
                  everyone. We
                </p>
              </div>
              <div className="grid grid-cols-3 gap-5">
                <div className="grid grid-cols-2">
                  <input
                    type="text"
                    placeholder="First Name___"
                    className="w-48 pt-1 pb-2 rounded-lg border indent-3 mb-10"
                  />
                  <input
                    type="text"
                    placeholder="Last Name___"
                    className="w-52 pt-1 pb-2 rounded-lg border indent-3 mb-10 translate-x-3"
                  />
                  <input
                    type="phone"
                    placeholder="Phone ___"
                    className="w-97 pt-1 pb-2 rounded-lg border indent-3 mb-10 col-span-2"
                  />
                  <input
                    type="email"
                    placeholder="Email address ___"
                    className="w-97 pt-1 pb-2 rounded-lg border indent-3 mb-10"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Describe your Issue ___"
                    className="w-143 h-44 pt-1 pb-2 rounded-lg border indent-2 mb-10 translate-x-40"
                  ></textarea>
                </div>
              </div>
            </section>
          </section>
        </section>
        <section className="hidden lg:block w-full">
          <div className="bg-bcg-color py-48 px-48">
            <h3 className=" text-center font-semibold text-5xl ">
              Get latest News by subscribing to our Newsletter
            </h3>
            <div className="flex translate-y-10 justify-center">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-white text-xl indent-5 rounded-l-lg rounded-r-none w-80 h-20"
              />
              <Button type="button" variant="subscribe" size="sub-button">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
        <ArrowToTop />
      </section>
    </>
  );
};

export default Privacy;
