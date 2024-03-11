//App
import React from "react";

//Component
import Button from "../reusables/button";
import NewsCard from "../reusables/NewsCard";
import NewsCardL from "../reusables/NewsCardL";

//Data types
import { newsData } from "../Data types/NewsCardData";
import { newsDataL } from "../Data types/NewsCardDataL";

const Community = () => {
  return (
    <>
      <section>
        <section className="md:hidden px-7">
          {/* Mobile Home Page */}
          <section className="md:flex md:items-center md:justify-between">
            <section className="flex flex-col items-center">
              <h3 className="text-secondary-color text-2xl font-bold w-80 my-20">
                Never alone on this journey of Wellness
              </h3>
              <img src="Assets/Mask groupalt.png" alt="hands" />
              <p className="text-sm text-justify w-80 my-5">
                Whether you're seeking help for yourself, your relationship, or
                your family, Serene Support community is here to provide
                guidance, support, and journey with you on the path toward a
                happier, healthier you.
              </p>
            </section>
            <section className="my-10">
              <div className="flex flex-col items-center">
                <img src="Assets/Group 368.png" alt="network" />
                <div>
                  <h3 className="font-bold text-xs text-center w-[230px] relative -top-32">
                    Connect with individuals on this path to wellness and build
                    supportive community here in Serene Support
                  </h3>
                </div>
              </div>
            </section>
            <section className="mb-20">
              <div className="flex flex-col items-center bg-services-color border px-6 py-10">
                <img src="public\Assets\Mask groupalt2.png" alt="docsmile" />
                <div>
                  <h3 className="text-center font-semibold text-3xl my-10">
                    5 Steps to reducing stress
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h3 className="text-center font-bold text-3xl mb-10">Blog</h3>
              <div className="flex items-center justify-center">
                <div className="bg-gray-200 border rounded-xl w-[400px] h-[170px] flex items-center justify-center">
                  video here
                </div>
              </div>

              <div className="flex flex-col px-10 my-10">
                <h3 className="font-bold text-3xl mb-5">
                  Anxiety care when alone
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur iaculis maximus sem, sed rutrum ante volutpat et.
                  CurabiturLorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Curabitur iaculis maximus sem, sed rutrum ante volutpat
                  et. CurabiturLorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Curabitur iaculis maximus sem, sed rutrum
                  ante volutpat et. CurabiturLorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Curabitur iaculis maximus sem,
                  sed rutrum ante volutpat et. Curabitur
                </p>
              </div>
              <div className="flex items-center justify-evenly -translate-x-6">
                <div className="flex items-center">
                  <div className="flex items-center border bg-servoce-color rounded-[100%] w-[27px] h-[27px]">
                    <img
                      src="Assets/clock.svg"
                      alt="clock"
                      className="translate-x-[5.2px]"
                    />
                  </div>
                  <p className="relative left-2">7mins</p>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center border bg-servoce-color rounded-[100%] w-[27px] h-[27px]">
                    <img
                      src="Assets/heart.svg"
                      alt="heart"
                      className="translate-x-[5.2px] translate-y-[2px]"
                    />
                  </div>
                  <p className="relative left-2">29Likes</p>
                </div>
                <div>
                  <Button type="button" variant="primary">
                    Watch
                  </Button>
                </div>
              </div>
            </section>
            <section className="my-10 flex flex-col items-center">
              <h3 className="font-bold text-3xl mb-8">News & Updates</h3>
              {newsData &&
                newsData.map((newsItem) => (
                  <NewsCard key={newsItem.title} {...newsItem} />
                ))}
            </section>
            <section className="-translate-x-[2rem]">
              <div className="bg-bcg-color w-[450px] py-36">
                <h3 className="-translate-x-[6rem] font-semibold text-2xl w-96 relative -">
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
            <section className="mt-10">
              <div className="flex items-center">
                <div className="px-6 ">
                  <h3 className="font-bold text-6xl text-secondary-color">
                    Never alone on this journey of Wellness
                  </h3>
                  <p className="my-10">
                    Whether you're seeking help for yourself, your relationship,
                    or your family, Serene Support community is here to provide
                    guidance, support, and journey with you on the path toward a
                    happier, healthier you.
                  </p>
                </div>
                <img src="Assets/Mask grouphands.svg" alt="hands" />
              </div>
            </section>
            <section className="my-10">
              <div>
                <img src="Assets/Group 151.png" alt="network" />
                <h3 className="font-bold text-4xl text-center -translate-y-95">
                  Connect with individuals on this path to wellness and build
                  supportive community here in Serene Support
                </h3>
              </div>
            </section>
          </section>
        </section>
        <section className="hidden lg:block">
          <div className="bg-services-color flex items-center p-9">
            <img src="Assets\Mask groupalt2b.png" alt="smile" />
            <div className="mx-40">
              <h3 className="font-bold text-4xl mb-20">
                5 Steps to reducing stress
              </h3>
              <p className="w-[605px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
                sit amet, consectetur adipiscing{" "}
              </p>
            </div>
          </div>
        </section>
        <section className="hidden lg:block max-w-[1440px] mx-auto px-7">
          <section className="my-20">
            <h3 className="font-bold text-6xl mb-10">Blog</h3>
            <div className="flex items-center justify-center">
              <div className="bg-gray-200 border rounded-xl w-[1440px] h-[438px] flex items-center justify-center">
                video here
              </div>
            </div>
            <div>
              <h3 className="font-bold text-4xl my-10">
                Anxiety care when alone
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur iaculis maximus sem, sed rutrum ante volutpat et.
                CurabiturLorem ipsum dolor sit amet, consectetur adipiscing
                elit. Curabitur iaculis maximus sem, sed rutrum ante volutpat
                et. CurabiturLorem ipsum dolor sit amet, consectetur adipiscing
                elit. Curabitur iaculis maximus sem, sed rutrum ante volutpat
                et. CurabiturLorem ipsum dolor sit amet, consectetur adipiscing
                elit. Curabitur iaculis maximus sem, sed rutrum ante volutpat
                et. Curabitur
              </p>
            </div>
            <div className="flex items-center justify-between my-5">
              <div className="flex items-center scale-115">
                <div className="flex items-center border bg-servoce-color rounded-[100%] w-[27px] h-[27px]">
                  <img
                    src="Assets/clock.svg"
                    alt="clock"
                    className="translate-x-[5.2px]"
                  />
                </div>
                <p className="relative left-2">7mins</p>
              </div>
              <div className="flex items-center scale-115">
                <div className="flex items-center border bg-servoce-color rounded-[100%] w-[27px] h-[27px]">
                  <img
                    src="Assets/heart.svg"
                    alt="heart"
                    className="translate-x-[5.2px] translate-y-[2px]"
                  />
                </div>
                <p className="relative left-2">29Likes</p>
              </div>
              <div>
                <Button type="button" variant="primary" size="small">
                  Watch
                </Button>
              </div>
            </div>
          </section>
        </section>
        <section className="my-10 hidden lg:block max-w-[1440px] mx-auto px-7">
          <div>
            <h3 className="font-bold text-3xl mb-8">News & Updates</h3>
          </div>
          <div className="flex justify-between">
            {newsDataL &&
              newsDataL.map((newsItem) => (
                <NewsCardL key={newsItem.title} {...newsItem} />
              ))}
          </div>
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
      </section>
    </>
  );
};

export default Community;
