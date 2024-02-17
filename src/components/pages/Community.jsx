import React from "react";

import Button from "../reusables/button";

const Community = () => {
  return (
    <>
      <section>
        <section>
          {/* Mobile Home Page */}
          <section className="md:flex md:items-center md:justify-between">
            <section className="flex flex-col items-center">
              <h3 className="text-secondary-color text-2xl font-bold w-80 my-20">
                Never alone on this journey of Wellness
              </h3>
              <img src="public/Assets/Mask groupalt.png" alt="hands" />
              <p className="text-sm text-justify w-80 my-5">
                Whether you're seeking help for yourself, your relationship, or
                your family, Serene Support community is here to provide
                guidance, support, and journey with you on the path toward a
                happier, healthier you.
              </p>
            </section>
            <section className="my-10">
              <div className="flex flex-col items-center">
                <img src="public/Assets/Group 368.png" alt="network" />
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
                    <img src="public/Assets/clock.svg" alt="clock" className="translate-x-[5.2px]" />
                  </div> 
                  <p className="relative left-2">7mins</p>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center border bg-servoce-color rounded-[100%] w-[27px] h-[27px]">
                    <img src="public/Assets/heart.svg" alt="heart" className="translate-x-[5.2px] translate-y-[2px]"/>
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
          </section>
        </section>

        {/* Desktop Home Page */}
        <section></section>
      </section>
    </>
  );
};

export default Community;
