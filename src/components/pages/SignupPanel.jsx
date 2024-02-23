//App
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//Component
import Button from "../reusables/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

//Server
import { auth } from "../../config/firebase";
import { db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";


const SignupPanel = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastame] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const dbref = collection(db, "userinfo");
  const navigate = useNavigate();
  const send = async () => {
    try {
      await addDoc(dbref, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        city: city,
        state: state,
      });
      alert("Data added successfully");
      navigate("/signin");
    } catch (error) {}
  };

  //handle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const partnershipFormRef = useRef(null);

  //Form submission logic
  const register = async (e) => {
    e.preventDefault();

    try {
      // Create user with email and password
      await createUserWithEmailAndPassword(auth, email, password);

      // Handle successful registration
      console.log("User added successfully!");
      alert("User added successfully!");
    } catch (error) {
      // Handle errors
      console.error("Error adding user:", error.message);
    }

    // After successfully creating an account, scroll to the second form
    if (partnershipFormRef.current) {
      partnershipFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      <section>
        <section className="md:hidden px-7">
          {/*Mbile SignIn Page*/}
          <section className="md:flex md:items-center md:justify-between">
            <section>
              <form onSubmit={register}>
                <div className="flex flex-col items-center">
                  <div className="text-center my-10">
                    <h3 className="text-secondary-color font-medium text-2xl">
                      Welcome
                    </h3>
                    <p className="text-secondary-color font-bold text-3xl">
                      Create your Account
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div>
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2 translate-x-1"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-[330px] h-[40px] border-[#464646] border rounded-xl mb-5 indent-4 "
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2 translate-x-1"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      type={passwordVisible ? "text" : "password"}
                      className="w-[330px] h-[40px] border-[#464646] border rounded-xl mb-5 indent-4 translate-x-2"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="relative -left-8"
                      onClick={togglePasswordVisibility}
                    >
                      <FontAwesomeIcon
                        icon={passwordVisible ? faEyeSlash : faEye}
                      />
                    </button>
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2"
                      htmlFor="password"
                    >
                      Conmfirm Password
                    </label>
                    <input
                      type={passwordVisible ? "text" : "password"}
                      className="w-[330px] h-[40px] border-[#464646] border rounded-xl mb-5 indent-4"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center mt-20">
                  <Button
                    type="button"
                    variant="primary"
                    size="signin"
                    onClick={register}
                  >
                    Create Account
                  </Button>
                  <p className="my-8">OR</p>
                   <Button
                    type="button"
                    variant="white"
                    size="signin"
                  >
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
              </form>
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
              <form ref={partnershipFormRef}>
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
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-[400px] h-[50px] rounded-xl mb-8 indent-4 bg-gray-100 border border-gray-300"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastame(e.target.value)}
                    className="w-[400px] h-[50px] rounded-xl mb-8 indent-4 bg-gray-100 border border-gray-300"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-[400px] h-[50px] rounded-xl mb-8 indent-4 bg-gray-100 border border-gray-300"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-[400px] h-[50px] rounded-xl mb-8 indent-4 bg-gray-100 border border-gray-300"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-[400px] h-[50px] rounded-xl mb-8 indent-4 bg-gray-100 border border-gray-300"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-[400px] h-[50px] rounded-xl mb-8 indent-4 bg-gray-100 border border-gray-300"
                  />
                </div>
                <div className="mb-8">
                  <Button
                    type="button"
                    variant="primary"
                    size="medium"
                    onClick={send}
                  >
                    Submit
                  </Button>
                </div>
              </form>
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

        {/* Desktop SignIn Page */}
        <section className="hidden max-w-[1440px] mx-auto px-24 md:flex items-center justify-between h-fit">
          <section className="flex items-center">
            <div>
              <div className="my-10">
                <h3 className="text-secondary-color font-medium text-5xl mb-5">
                  Welcome
                </h3>
                <p className="text-secondary-color font-bold text-5xl">
                  Create your Account
                </p>
              </div>
              <div className="">
                <div>
                  <label
                    className="block text-gray-700 text-2xl font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-[480px] h-[60px] border-[#464646] border rounded-xl mb-5 indent-4"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-2xl font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="w-[480px] h-[60px] border-[#464646] border rounded-xl mb-5 indent-4"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="relative -left-8"
                    onClick={togglePasswordVisibility}
                  >
                    <FontAwesomeIcon
                      icon={passwordVisible ? faEyeSlash : faEye}
                    />
                  </button>
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-2xl font-bold mb-2"
                    htmlFor="password"
                  >
                    Confirm Password
                  </label>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="w-[480px] h-[60px] border-[#464646] border rounded-xl mb-5 indent-4"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center mt-20">
                <Button
                  type="button"
                  variant="primary"
                  size="signinL"
                  onClick={register}
                >
                  Creat Account
                </Button>
                <p className="my-8">OR</p>
                <Button type="button" variant="white" size="signinL">
                  <img
                    src="Assets\icons8-google-48 1.svg"
                    alt="google"
                    className="mr-3"
                  />
                  Continue with Google
                </Button>
              </div>
              <div className="text-center mt-7 mb-10">
                <p className="text-2xl">
                  Already have an account?{" "}
                  <Link to="/signin" className="text-primary-color font-bold">
                    Sign In
                  </Link>{" "}
                </p>
              </div>
            </div>
            <div className="absolute right-0 -z-10 bg-slate-300">
              <img src="Assets\lady.svg" alt="lady" />
            </div>
          </section>
        </section>
        <section className="hidden lg:block w-full mt-[4rem]">
          <div className="absolute left-[35%] mt-[6rem]">
            <h3 className="font-semibold text-6xl">Partner with Us</h3>
          </div>
          <div>
            <img
              src="Assets\peopleL.svg"
              alt="people"
              style={{ width: "100%" }}
            />
          </div>
        </section>
        <section className="hidden lg:block w-full">
          <div className="bg-[#F1F6FF]  flex justify-center py-10">
            <img src="Assets\shakehandsL.svg" alt="shake" />
          </div>
          <div>
            <form
              className="flex flex-col items-center justify-center mb-10"
              ref={partnershipFormRef}
            >
              <h3 className="my-9 font-bold text-2xl">
                Join our growing list of valuable partners today!
              </h3>
              <div className="bg-primary-color w-[558px] text-center py-3 rounded-xl my-8">
                <h3 className="text-white">
                  PLEASE COMPLETE THE PARTNERSHIP FORM BELOW
                </h3>
              </div>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-[400px] h-[50px] rounded-xl mb-10 indent-4 bg-gray-100 border border-gray-300"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastame(e.target.value)}
                className="w-[400px] h-[50px] rounded-xl mb-10 indent-4 bg-gray-100 border border-gray-300"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-[400px] h-[50px] rounded-xl mb-10 indent-4 bg-gray-100 border border-gray-300"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[400px] h-[50px] rounded-xl mb-10 indent-4 bg-gray-100 border border-gray-300"
              />
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-[400px] h-[50px] rounded-xl mb-10 indent-4 bg-gray-100 border border-gray-300"
              />
              <input
                type="text"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-[400px] h-[50px] rounded-xl mb-20 indent-4 bg-gray-100 border border-gray-300"
              />
              <div className="mb-8">
                <Button
                  type="button"
                  variant="primary"
                  size="medium"
                  onClick={send}
                >
                  Submit
                </Button>
              </div>
            </form>
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

export default SignupPanel;
