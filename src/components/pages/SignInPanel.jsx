//App
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//Component
import Button from "../reusables/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

//Server
import { auth, provider } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { getRedirectResult } from "firebase/auth";

const SignInPanel = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  //handle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  // Google Sign-In function
  const googleclick = async () => {
    await signInWithPopup(auth, provider);
    console.log("Google Sign");
    navigate("/home");
  };

  //using redirect for mobile platfrom
  const googlerClick = async () => {
    try {
      // Trigger sign-in with redirect
      await signInWithRedirect(auth, provider);
      alert("Signed in successfully");
      navigate("/home")
    } catch (error) {
      console.error(
        "Error during Google sign-in with redirect:",
        error.message
      );
    }
  };

  // Check for redirect result when the component mounts
  useEffect(() => {
    const checkRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        // Handle the redirect result, e.g., update UI or navigate to a new page
        console.log("Redirect result:", result);
      } catch (error) {
        console.error("Error checking redirect result:", error.message);
      }
    };

    checkRedirectResult();
  }, []);

  //Form submission logic
  const login = async (e) => {
    e.preventDefault();

    try {
      // Create user with email and password
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
      // Handle successful registration
      console.log("Logged successfully!");
      alert("Logged In successfully!");
    } catch (error) {
      // Handle errors
      alert("Error!!");
      console.error("Error adding user:", error.message);
    }
  };

  return (
    <>
      <section>
        <section className="md:hidden px-7">
          {/*Mobile SignIn Page*/}
          <section className="md:flex md:items-center md:justify-between">
            <section>
              <div className="flex flex-col items-center">
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
                    value={email}
                    className="w-[330px] h-[40px] border-[#464646] border rounded-xl mb-5 indent-4 mr-2"
                    onChange={(e) => setEmail(e.target.value)}
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
                    type={passwordVisible ? "text" : "password"}
                    value={password}
                    className="w-[330px] h-[40px] border-[#464646] border rounded-xl mb-5 indent-4"
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
              </div>
              <div className="float-right relative right-12">
                <p className="text-primary-color font-bold">Forgot Password</p>
              </div>
              <div className="flex flex-col items-center mt-20">
                <Button
                  type="button"
                  variant="primary"
                  size="signin"
                  onClick={login}
                >
                  Sign In
                </Button>
                <p className="my-8">OR</p>
                <Button
                  type="button"
                  variant="white"
                  size="signin"
                  onClick={googlerClick}
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
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-primary-color font-bold">
                    Create an Account
                  </Link>{" "}
                </p>
              </div>
            </section>
            <section className="my-10">
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
                  Log in to your Account
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
                    value={email}
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
                    value={password}
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
              </div>
              <div className="float-right">
                <p className="text-primary-color font-bold">Forgot Password</p>
              </div>
              <div className="flex flex-col items-center mt-20">
                <Button
                  type="button"
                  variant="primary"
                  size="signinL"
                  onClick={login}
                >
                  Sign In
                </Button>
                <p className="my-8">OR</p>
                <Button
                  type="button"
                  variant="white"
                  size="signinL"
                  onClick={googleclick}
                >
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
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-primary-color font-bold">
                    Create an Account
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

export default SignInPanel;
