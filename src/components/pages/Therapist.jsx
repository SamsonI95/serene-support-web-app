//App
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

//Component
import PriceCard from "../reusables/PriceCard";
import TherapistCard1 from "../reusables/TherapistCard1";
import TherapistCard2 from "../reusables/TherapistCard2";

//Data type
import { priceCard } from "../Data types/PriceData";
import { data1 } from "../Data types/TherapistCardData1";
import { data2 } from "../Data types/TherapistCardData2";
import Button from "../reusables/button";

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
              <h3 className="font-semibold text-xl mb-20">
                We tailor our price plan to fit everyone’s pocket
              </h3>
              <div>
                <div className="cursor-pointer">
                  {priceCard.map((e, item) => (
                    <PriceCard key={item} {...e} />
                  ))}
                </div>
              </div>
              <div className="flex justify-center my-32">
                <div className=" bg-primary-color text-center rounded-2xl border inline-flex py-12 px-6 items-center space-x-10">
                  <span className="text-white font-semibold text-sm">
                    You can also pay per session
                  </span>
                  <span className="text-white font-bold text-2xl">₦ 7,000</span>
                </div>
              </div>
            </section>
            <section>
              <div className="flex justify-center">
                <h3 className="text-xl text-center w-80 font-semibold mb-10">
                  Registered Counsellors and Therapists
                </h3>
              </div>
              <div className="flex items-center justify-center mb-20">
                <input
                  type="search"
                  placeholder="Specialiity or Name or Service Type"
                  className="outline-none px-6 py-9 w-96 h-12 border rounded-2xl"
                />
                <button className="focus:outline-none text-gray-300">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="-translate-x-7 translate-y-0"
                  />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-10">
                {data1.map((data1) => (
                  <TherapistCard1 key={data1.id} {...data1} />
                ))}
              </div>
              <div className="flex justify-center mb-20">
                <Button type="button" variant="hollow" size="small">
                  View More
                </Button>
              </div>
            </section>
          </section>
        </section>

        {/* Desktop Home Page */}
        <section className="hidden max-w-[1440px] mx-auto px-24 md:flex items-center justify-between h-fit">
          <section>
            <section className="flex justify-center items-center mt-16">
              <div>
                <h3 className="font-bold text-secondary-color text-6xl ">
                  Certified and verified Professionals for your aid
                </h3>
                <p className="text-primary-color mt-24 w-140 tracking-normal">
                  Our certified therapists and counsellors are individuals who
                  are well experienced and specialise in various areas of mental
                  health and emotional well-being support. Each professional
                  brings a unique set of skills and a profound commitment to
                  helping you navigate life's challenges.
                </p>
              </div>

              <img
                src="public/Assets/Mask group4.png"
                alt="docs"
                className="h-140 mx-auto my-8"
              />
            </section>
            <section className="mt-20 ">
              <h3 className="flex justify-center font-semibold text-5xl mb-20">
                We tailor our price plan to fit everyone’s pocket
              </h3>
              <div>
                <div className="flex cursor-pointer">
                  {priceCard.map((e, item) => (
                    <PriceCard key={item} {...e} />
                  ))}
                </div>
              </div>
              <div className="flex justify-center my-32">
                <div className=" bg-primary-color text-center rounded-2xl border inline-flex py-12 px-6 items-center space-x-10 cursor-pointer hover:scale-125 duration-500">
                  <span className="text-white font-semibold text-sm">
                    You can also pay per session
                  </span>
                  <span className="text-white font-bold text-2xl">₦ 7,000</span>
                </div>
              </div>
            </section>
            <section className="mb-40">
              <div className="flex justify-center">
                <h3 className="text-5xl text-center font-semibold mb-10">
                  Registered Counsellors and Therapists
                </h3>
              </div>
              <div className="flex items-center justify-center mb-20">
                <input
                  type="search"
                  placeholder="Specialiity or Name or Service Type"
                  className="outline-none text-xl px-40 py-9 w-186 h-12 border rounded-2xl"
                />
                <button className="focus:outline-none text-gray-300">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="-translate-x-48 text-xl translate-y-0"
                  />
                </button>
              </div>
              <div className="grid grid-cols-3 gap-10 mb-20">
                {data2.map((data2) => (
                  <TherapistCard2 key={data2.id} {...data2} />
                ))}
              </div>
              <div>
                <div className="flex justify-center mb-20">
                  <Button type="button" variant="hollow" size="small">
                    View More
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

export default Therapist;
