//App
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//Component
import Button from "../reusables/button";
import CardStyyle1 from "../reusables/CardStyyle1";
import CardStyyle2 from "../reusables/CardStyyle2";
import ServicesList from "../Page Component/ServicesList";

//Data types
import { HelpData } from "../Data types/CardStyyle1Data";
import { cardData } from "../Data types/CardStyyle2Data";
import { services } from "../Data types/ServicesData";

//Style
import "../reusables/ListNumber.css";

const Home = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/signup");
    console.log("clicked");
  };

  const handleTherapist = () => {
    navigate("/therapists");
    console.log("clicked");
  };

  return (
    <>
      <section>
        <section className="md:hidden px-7">
          {/* Mobile Home Page */}
          <section className="md:flex md:items-center md:justify-between">
            <section className="text-3xl w-80 font-bold text-secondary-color my-10">
              Supporting you to happiness & Wholeness
            </section>
            <section>
              <img
                src="Assets/nathan-anderson-J3Xjyg5m8kY-unsplash 1.png"
                alt="smiles"
              />
            </section>
            <section className="text-base text-primary-color my-10">
              Serene Support is carefully designed to connect you with licensed
              therapists who understand your mental health journey. Whether
              you're navigating stress, anxiety, relationship challenges, or
              personal growth, our virtual doctors are always ready to support
              you .
            </section>
            <section className="flex justify-center items-center space-x-12 mb-10">
              <Button
                type="button"
                variant="primary"
                size="small"
                onClick={handleRegister}
              >
                Register
              </Button>
              <Button
                type="button"
                variant="hollow"
                size="medium"
                onClick={handleTherapist}
              >
                Book A Therapist
              </Button>
            </section>
            <section className="md:w-1/2 mt-10 md:mt-0">
              <div className="text-center mb-5">
                Trusted by organizations like
              </div>
              <div className="flex justify-center space-x-6 mb-10">
                <img src="Assets/WHO 1.png" alt="who" />
                <img src="Assets/images-2 1.png" alt="sponsor" />
                <img
                  src="Assets/Screenshot 2023-08-09 at 19.43 1.png"
                  alt="nami"
                />
              </div>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-6">
                We render help to people living with different mental health
                conditions
              </h3>
              <Link to="/">
                <p className="text-primary-color float-right mb-10">
                  View all Conditions
                </p>
              </Link>
            </section>
            <section className="flex items-center justify-center container mx-auto p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {HelpData.map((car, index) => (
                  <CardStyyle1 key={index} {...car} />
                ))}
              </div>
            </section>
            <section className="bg-services-color p-6">
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
              <div className="w-[23rem] h-0.25 -translate-x-6 bg-border-line-color"></div>
              <div>
                <div>
                  <img
                    src="Assets/Dr alexander.png"
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
                <div className=" translate-x-5 mb-4 w-[13rem]">
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
            </section>
            <section className="mt-20">
              <div>
                <h3 className="font-semibold text-2xl mb-5">
                  Serene Support makes your journey to a stable and happy life
                  easy and achievable.
                </h3>
                <p className="text-higlight-text-color text-sm mb-5">
                  It only takes few minutes to get the necessary help that you
                  need
                </p>
              </div>
              <div>
                <ul className="custom-list">
                  <li className="relative border-b border-border-line-color pb-2 mb-10">
                    <div className="translate-x-20 -translate-y-7 w-fit">
                      <h3 className="text-bold text-primary-color mb-3">
                        How can we help you today?
                      </h3>
                      <p className="text-justify mb-3">
                        Select an area you need support
                      </p>
                    </div>
                  </li>
                  <li className="relative border-b border-border-line-color pb-2 mb-10">
                    <div className="translate-x-20 -translate-y-7 w-[16rem]">
                      <h3 className="text-bold text-primary-color mb-3">
                        Say Hi to like minds.
                      </h3>
                      <p className="text-justify mb-3">
                        The road to healing is not a lonely path. Talk to people
                        who understand what you are facing. Listen to shared
                        experience for encouragements
                      </p>
                    </div>
                  </li>
                  <li className="relative border-b border-border-line-color pb-2 mb-10">
                    <div className="translate-x-20 -translate-y-7 w-[16rem]">
                      <h3 className="text-bold text-primary-color mb-3">
                        Want to talk to a therapist? Schedule a call.
                      </h3>
                      <p className="text-justify mb-3">
                        Our qualified therapist are readily available to welcome
                        your complains. Give us a call today.{" "}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="translate-x-20 -translate-y-7 w-[16rem]">
                      <h3 className="text-bold text-primary-color mb-3">
                        Take the right next steps.
                      </h3>
                      <p className="text-justify mb-3">
                        Why take a chance on that challenging thoughts, we are
                        right here for you.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center mt-10">
                <Button type="button" variant="primary" size="semi-medium">
                  View how we work
                </Button>
              </div>
            </section>
            <section className="mt-20">
              <div className="mb-10">
                <h3 className="font-semibold text-2xl text-center mb-5">
                  Our Success speaks for us
                </h3>
                <p className="font-regular text-sm text-higlight-text-color text-center">
                  Serene Support has assisted a number of individuals to regain
                  their health, joy and comfort
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img src="Assets/iPhone 15.svg" alt="phone" />
              </div>
              <div className="mt-20 flex text-center space-x-5">
                <div>
                  <h3 className="font-bold text-primary-color text-2xl mb-3">
                    2235+
                  </h3>
                  <p className="font-regular  text-higlight-text-color">
                    Highly qualified therapist
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-primary-color text-2xl mb-3">
                    1500+
                  </h3>
                  <p className="font-regular  text-higlight-text-color">
                    Recovered patients
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-primary-color text-2xl mb-3">
                    3000+
                  </h3>
                  <p className="font-regular  text-higlight-text-color">
                    Successful online sessions
                  </p>
                </div>
              </div>
            </section>
            <section className="mt-20 -translate-x-12">
              <div className="bg-bcg-color w-[445px] py-36 px-36">
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

        {/* Desktop Home Page */}
        <section className="hidden max-w-[1440px] mx-auto px-[10rem] md:flex items-center justify-between h-fit">
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
                  <Button
                    type="button"
                    variant="primary"
                    size="small"
                    onClick={handleRegister}
                  >
                    Register
                  </Button>
                  <Button
                    type="button"
                    variant="hollow"
                    size="medium"
                    onClick={handleTherapist}
                  >
                    Book A Therapist
                  </Button>
                </div>
              </div>

              <div>
                <img
                  src="Assets/nathan-anderson-J3Xjyg5m8kY-unsplash 1.png"
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
                <img src="Assets/WHO 1.png" alt="who" />
                <img src="Assets/images-2 1.png" alt="sponsor" />
                <img
                  src="Assets/Screenshot 2023-08-09 at 19.43 1.png"
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
            <section className="bg-services-color p-6 z-10">
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
                    src="Assets/Dr alexander.png"
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
                <div className="relative top-36 left-7 w-83">
                  <h3 className="text-primary-color">
                    “Early Detection can limit the impact of mental health on
                    our overall well being”
                  </h3>

                  <p className="">
                    Like many other medical conditions, mental health issues
                    often become more severe and challenging to treat if left
                    untreated for an extended period. Early detection can
                    prevent the issue from worsening. Why not book a therapy
                    session today.
                  </p>
                </div>
              </div>
            </section>
            <section className="flex justify-evenly mt-20">
              <div className="w-143 translate-y-52">
                <h3 className="font-semibold text-3xl mb-10">
                  Serene Support makes your journey to a stable and happy life
                  easy and achievable.
                </h3>
                <p className="text-higlight-text-color text-sm mb-20">
                  It only takes few minutes to get the necessary help that you
                  need
                </p>
                <div>
                  <Button type="button" variant="primary" size="semi-medium">
                    View how we work
                  </Button>
                </div>
              </div>
              <div>
                <ul className="custom-list">
                  <li className="relative border-b border-border-line-color pb-2 mb-10">
                    <div className="translate-x-20 -translate-y-7 w-80">
                      <h3 className="text-bold text-primary-color mb-3">
                        How can we help you today?
                      </h3>
                      <p className="text-justify mb-3">
                        Select an area you need support
                      </p>
                    </div>
                  </li>
                  <li className="relative border-b border-border-line-color pb-2 mb-10">
                    <div className="translate-x-20 -translate-y-7 w-80">
                      <h3 className="text-bold text-primary-color mb-3">
                        Say Hi to like minds.
                      </h3>
                      <p className="text-justify mb-3">
                        The road to healing is not a lonely path. Talk to people
                        who understand what you are facing. Listen to shared
                        experience for encouragements
                      </p>
                    </div>
                  </li>
                  <li className="relative border-b border-border-line-color pb-2 mb-10">
                    <div className="translate-x-20 -translate-y-7 w-80">
                      <h3 className="text-bold text-primary-color mb-3">
                        Want to talk to a therapist? Schedule a call.
                      </h3>
                      <p className="text-justify mb-3">
                        Our qualified therapist are readily available to welcome
                        your complains. Give us a call today.{" "}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="translate-x-20 -translate-y-7 w-80">
                      <h3 className="text-bold text-primary-color mb-3">
                        Take the right next steps.
                      </h3>
                      <p className="text-justify mb-3">
                        Why take a chance on that challenging thoughts, we are
                        right here for you.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            <section className="flex justify-evenly space-x-30 mt-40">
              <div className="">
                <img src="Assets/iPhone 14.png" alt="phone" />
              </div>
              <div className="mb-10 translate-x-28">
                <h3 className="font-semibold text-4xl  mb-5">
                  Our Success speaks for us
                </h3>
                <p className="font-regular text-lg w-95 text-higlight-text-color ">
                  Serene Support has assisted a number of individuals to regain
                  their health, joy and comfort
                </p>
                <div className="mt-20 grid grid-cols-2 gap-y-20 gap-x-10">
                  <div>
                    <h3 className="font-bold text-primary-color text-2xl mb-3">
                      2235+
                    </h3>
                    <p className="font-regular  text-higlight-text-color text-lg">
                      Highly qualified therapist
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-color text-2xl mb-3">
                      1500+
                    </h3>
                    <p className="font-regular  text-higlight-text-color text-lg">
                      Recovered patients
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-color text-2xl mb-3">
                      3000+
                    </h3>
                    <p className="font-regular  text-higlight-text-color text-lg">
                      Successful online sessions
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="mt-40">
              <div>
                <h3 className="text-center text-5xl font-semibold">
                  Love & smile from patients who are treated by serene support
                </h3>
              </div>
              <div className="mt-20">
                <div className="flex justify-evenly">
                  {cardData.map((cardData) => (
                    <CardStyyle2 key={cardData.id} {...cardData} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className="hidden lg:block mt-40 w-full">
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
      </section>
    </>
  );
};

export default Home;
