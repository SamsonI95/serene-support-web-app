//App
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

//Component
import Button from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

//Server
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Cleanup the observer when the component is unmounted
    return () => unsubscribe();
  }, []);

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigate = useNavigate();

  const userSignIn = () => {
    // Handle button click
    navigate("/signin");
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const userSignUp = () => {
    // Handle button click
    navigate("/signup");
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const userSignOut = async () => {
    try {
      await signOut(auth);
      setMobileMenuOpen(!isMobileMenuOpen);
      // You may want to navigate or perform additional actions after sign-out
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <>
      {/*Desktop Navigation*/}
      <section className="hidden md:flex no-underline text-nav-text-color text-2xl w-max  mt-4 relative">
        <div className="relative top-4 right-20 space-x-10">
          <Link
            to="/home"
            className="hover:text-primary-color focus:text-primary-color active:text-primary-color"
          >
            Home
          </Link>
          <Link
            to="/therapists"
            className="hover:text-primary-color focus:text-primary-color active:text-primary-color"
          >
            Therapists
          </Link>
          <Link
            to="/privacy"
            className="hover:text-primary-color focus:text-primary-color active:text-primary-color"
          >
            Privacy
          </Link>
          <Link
            to="/community"
            className="hover:text-primary-color focus:text-primary-color active:text-primary-color"
          >
            Community
          </Link>
        </div>
        {/* Small Primary Button */}
        {user ? (
          <div className="flex items-center space-x-5">
            <p>Welcome, {user.firstName || user.email}!</p>
            <Button
              onClick={userSignOut}
              type="button"
              variant="primary"
              size="small"
            >
              Sign Out
            </Button>
          </div>
        ) : (
          <div className="space-x-8">
            <Button
              onClick={userSignIn}
              type="button"
              variant="primary"
              size="small"
            >
              Sign In
            </Button>
            <Button
              onClick={userSignUp}
              type="button"
              variant="primary"
              size="small"
            >
              Sign Up
            </Button>
          </div>
        )}
      </section>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={handleToggleMobileMenu}
          className="block text-black focus:outline-none"
        >
          <FontAwesomeIcon icon={faBars} className="w-10 h-10" />
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            <div></div>
            <div className="fixed top-0 right-0 h-[700px] w-72 bg-secondary-color p-4 z-10 }">
              <button
                onClick={handleToggleMobileMenu}
                className="block text-black focus:outline-none float-end"
              >
                <FontAwesomeIcon
                  icon={faTimes}
                  className="w-10 h-10 text-white mb-10 left-7"
                />
              </button>
              <div className="translate-x-5 translate-y-5">
                {user ? (
                  <div className="space-y-5">
                    <p className="text-white translate-y-10 mb-10">Welcome, {user.firstName || user.email}!</p>
                    <Button
                      onClick={userSignOut}
                      type="button"
                      variant="primary"
                      size="small"
                    >
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <div className="flex space-x-3 mt-10">
                    <Button
                      onClick={userSignIn}
                      type="button"
                      variant="primary"
                      size="small"
                    >
                      Sign In
                    </Button>
                    <Button
                      onClick={userSignUp}
                      type="button"
                      variant="primary"
                      size="small"
                    >
                      Sign Up
                    </Button>
                  </div>
                )}
                <Link
                  to="/home"
                  className="block text-white py-2 hover:text-primary-color mt-20 mb-10"
                  onClick={handleToggleMobileMenu}
                >
                  Home
                </Link>
                <Link
                  to="/therapists"
                  className="block text-white py-2 hover:text-primary-color  mb-10"
                  onClick={handleToggleMobileMenu}
                >
                  Therapists
                </Link>
                <Link
                  to="/privacy"
                  className="block text-white py-2 hover:text-primary-color  mb-10"
                  onClick={handleToggleMobileMenu}
                >
                  Privacy
                </Link>
                <Link
                  to="/community"
                  className="block text-white py-2 hover:text-primary-color  mb-20"
                  onClick={handleToggleMobileMenu}
                >
                  Community
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default NavBar;
