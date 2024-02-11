import React from "react";
import Button from "../reusables/button";
import CardStyyle1 from "../reusables/CardStyyle1";
import { HelpData } from "../Data types/CardStyyle1Data";

const Home = () => {
  return (
    <>
      <section>
        <section className="md:hidden px-7">
          {/* Mobile Home Page */}
          <section className="md:flex md:items-center md:justify-between">
            <div className="text-3xl w-80 font-bold text-secondary-color my-10">
              Supporting you to happiness & Wholeness
            </div>
            <div>
              <img
                src="public/Assets/nathan-anderson-J3Xjyg5m8kY-unsplash 1.png"
                alt="smiles"
              />
            </div>
            <div className="text-base text-primary-color my-10">
              Serene Support is carefully designed to connect you with licensed
              therapists who understand your mental health journey. Whether
              you're navigating stress, anxiety, relationship challenges, or
              personal growth, our virtual doctors are always ready to support
              you .
            </div>
            <div className="flex justify-center items-center space-x-12 mb-10">
              <Button type="button" variant="primary" size="small">
                Register
              </Button>
              <Button type="button" variant="hollow" size="medium">
                Book A Therapist
              </Button>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <div className="text-center mb-5">
                Trusted by organizations like
              </div>
              <div className="flex justify-center space-x-6 mb-10">
                <img src="public/Assets/WHO 1.png" alt="who" />
                <img src="public/Assets/images-2 1.png" alt="sponsor" />
                <img
                  src="public/Assets/Screenshot 2023-08-09 at 19.43 1.png"
                  alt="nami"
                />
              </div>
            </div>
            <div className="flex items-center justify-center container mx-auto p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {HelpData.map((car, index) => (
                  <CardStyyle1 key={index} {...car} />
                ))}
              </div>
            </div>
          </section>
        </section>

        {/* Desktop Home Page */}
        <section className="hidden max-w-[1440px] mx-auto px-24 md:flex items-center justify-between h-fit">
          <section className="flex space-x-60">
            <div className="mt-24">
              <div className="text-secondary-color text-5xl font-bold ">
                Supporting you to happiness & Wholeness
              </div>
              <div className="text-lg text-primary-color my-10 w-95">
                Serene Support is carefully designed to connect you with
                licensed therapists who understand your mental health journey.
                Whether you're navigating stress, anxiety, relationship
                challenges, or personal growth, our virtual doctors are always
                ready to support you .
              </div>
              <div className="space-x-4">
                <Button type="button" variant="primary" size="small">
                  Register
                </Button>
                <Button type="button" variant="hollow" size="medium">
                  Book A Therapist
                </Button>
              </div>
            </div>

            <div className="">
              <img
                src="public/Assets/nathan-anderson-J3Xjyg5m8kY-unsplash 1.png"
                alt="smiles"
              />
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Home;
