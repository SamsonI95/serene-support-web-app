//App
import React from "react";
import { Link } from "react-router-dom";

//Component
import Button from "../reusables/button";
import CardStyyle1 from "../reusables/CardStyyle1";
import ServicesList from "../Page Component/ServicesList";

//Data types
import { HelpData } from "../Data types/CardStyyle1Data";
import { services } from "../Data types/ServicesData";

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
            <div>
              <h3 className="text-xl font-semibold mb-6">
                We render help to people living with different mental health
                conditions
              </h3>
              <Link to="/">
                <p className="text-primary-color float-right mb-10">
                  View all Conditions
                </p>
              </Link>
            </div>
            <div className="flex items-center justify-center container mx-auto p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {HelpData.map((car, index) => (
                  <CardStyyle1 key={index} {...car} />
                ))}
              </div>
            </div>
            <div className="bg-services-color p-6">
              <h3 className="text-xl font-semibold text-center my-8">
                Our comprehensive network of specialized therapist render a wide
                variety of services
              </h3>
              <div className="relative top-5">
                <div>
                  {services.map((service) => (
                    <ServicesList key={service.id} {...service} />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center my-20">
                <Button type="button" variant="hollow" size="medium">
                  View all Services
                </Button>
              </div>
              <div className="w-97 h-0.25 -translate-x-6 bg-border-line-color"></div>
              <div>
                <div>
                  <img
                    src="public/Assets/Dr alexander.png"
                    alt="doc1"
                    className="scale-75 relative -left-8"
                  />
                  <div className="float-right -translate-y-40">
                    <div className=" bg-white text-center rounded-2xl border inline-block py-5 px-6">
                      <span className="text-primary-color font-bold block">
                        Dr. Alexander
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" translate-x-5 mb-4">
                  <h3 className="text-primary-color">
                    “Early Detection can limit the impact of mental health on
                    our overall well being”
                  </h3>
                </div>
                <p className="mx-4">
                  Like many other medical conditions, mental health issues often
                  become more severe and challenging to treat if left untreated
                  for an extended period. Early detection can prevent the issue
                  from worsening. Why not book a therapy session today.
                </p>
              </div>
            </div>
          </section>
        </section>

        {/* Desktop Home Page */}
        <section className="hidden max-w-[1440px] mx-auto px-24 md:flex items-center justify-between h-fit">
          <div>
            <section className="flex mt-10 space-x-50">
              <div className="mt-24">
                <div className="text-secondary-color text-5xl w-143 font-bold ">
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

              <div>
                <img
                  src="public/Assets/nathan-anderson-J3Xjyg5m8kY-unsplash 1.png"
                  alt="smiles"
                  style={{ width: "610px", height: "610px" }}
                />
              </div>
            </section>
            <section className="mt-16">
              <div className="text-nav-text-color text-center mb-8">
                Trusted by organizations like
              </div>
              <div className="flex items-center justify-center space-x-40">
                <img src="public/Assets/WHO 1.png" alt="who" />
                <img src="public/Assets/images-2 1.png" alt="sponsor" />
                <img
                  src="public/Assets/Screenshot 2023-08-09 at 19.43 1.png"
                  alt="nami"
                />
              </div>
            </section>
            <section className="flex mt-24">
              <h3 className="text-5xl font-semibold mb-6 w-200 leading-normal">
                We render help to people living with different mental health
                conditions
              </h3>
              <div className="relative top-10">
                <Button type="button" variant="hollow" size="semi-medium">
                  View all Conditions
                </Button>
              </div>
            </section>
            <section>
              <div className="flex items-center justify-center container mx-auto">
                <div className="grid grid-cols-3 gap-20">
                  {HelpData.map((car, index) => (
                    <CardStyyle1 key={index} {...car} />
                  ))}
                </div>
              </div>
            </section>
            <section className="bg-services-color p-6">
              <h3 className="text-5xl font-semibold text-center my-8">
                Our comprehensive network of specialized therapist render a wide
                variety of services
              </h3>
              <div className="relative top-5">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-5 px-20">
                  {services.map((service) => (
                    <ServicesList key={service.id} {...service} />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center my-20">
                <Button type="button" variant="hollow" size="medium">
                  View all Services
                </Button>
              </div>
              <div className="w-1200 h-0.25  bg-border-line-color"></div>
              <div className="grid grid-cols-2">
                <div className="flex relative">
                  <img
                    src="public/Assets/Dr alexander.png"
                    alt="doc1"
                    className="scale-75 relative -left-8"
                  />
                  <div className="absolute left-83 bottom-64">
                    <div className=" bg-white text-center rounded-2xl border inline-block py-5 px-6">
                      <span className="text-primary-color font-bold block">
                        Dr. Alexander
                      </span>
                    </div>
                  </div>
                </div>
                <div className="">
                  <h3 className="text-primary-color">
                    “Early Detection can limit the impact of mental health on
                    our overall well being”
                  </h3>
                  
                <p className="">
                  Like many other medical conditions, mental health issues often
                  become more severe and challenging to treat if left untreated
                  for an extended period. Early detection can prevent the issue
                  from worsening. Why not book a therapy session today.
                </p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
