//App
import React from "react";

//Component
import Button from "../reusables/button";
import PriceCard from "../reusables/PriceCard";

//Data type
import { priceCard } from "../Data types/PriceData";

const Therapist = () => {
  return (
    <>
      <section>
        <section className="md:hidden px-7">
          {/* Mobile Home Page */}
          <section className="md:flex md:items-center md:justify-between">
            <section className="  mt-16 max-w-2xl">
              <h3 className="font-bold text-secondary-color text-2xl mx-12">
                Certified and verified Professionals for your aid
              </h3>
              <img
                src="public/Assets/Mask group4.png"
                alt="docs"
                className="mx-auto my-8"
              />
              <p className="text-primary-color mx-12 tracking-normal">
                Our certified therapists and counsellors are individuals who are
                well experienced and specialise in various areas of mental
                health and emotional well-being support. Each professional
                brings a unique set of skills and a profound commitment to
                helping you navigate life's challenges.
              </p>
            </section>
            <section className="mt-20 ">
                <h3 className="font-semibold text-xl mb-20">We tailor our price plan to fit everyone’s pocket</h3>
                <div>
                    <div className="cursor-pointer">
                        {priceCard.map((e, item) => (
                            <PriceCard key={item} {...e}/>
                        ))}
                    </div>
                </div>
            </section>
          </section>
        </section>

        {/* Desktop Home Page */}
        <section></section>
      </section>
    </>
  );
};

export default Therapist;
