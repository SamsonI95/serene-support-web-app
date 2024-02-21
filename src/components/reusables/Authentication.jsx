//App
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//component
import Button from "./button";

//Server
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

const Authentication = () => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    // Handle button click
    navigate("/signup");
    setMobileMenuOpen(false);
  };

  const [authUser, setAuthUser] = useState();

  useEffect(() => {
    const listenAuth = onAuthStateChanged(
      auth,
      (user) => {
        setAuthUser(user);

        return () => {
          listenAuth();
        };
      },
      []
    );
  });

  const userSignout = () => {
    signOut(auth).then(() => {
      console.log("Signed out");
    });
  };

  return (
    <>
      <section>
        {/*sign in*/}
        <section className="hidden md:flex">
          {authUser === null ? (
            <>
              <div>
                <p className="text-primary-color">Welcome, {user}!</p>
                <Button
                  onClick={userSignout}
                  type="button"
                  variant="primary"
                  size="small"
                >
                  Sign Out
                </Button>
              </div>
            </>
          ) : (
            <>
              <Button
                onClick={handleClick}
                type="button"
                variant="primary"
                size="small"
              >
                Sign Up
              </Button>
            </>
          )}
        </section>

        <section className="">
          {/*sign in*/}
          <Button
            onClick={handleClick}
            type="button"
            variant="primary"
            size="alt"
          >
            Sign Up
          </Button>
        </section>
      </section>
    </>
  );
};

export default Authentication;
