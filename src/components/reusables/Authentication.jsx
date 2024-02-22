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
  const [user, setUser] = useState(null); // Initialize with null


  const navigate = useNavigate();

  useEffect(() => {
    const listenAuth = onAuthStateChanged(auth, (fetchedUser) => {
      setUser(fetchedUser);
    });
    return () => listenAuth();
  }, []);
  

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
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => console.log("error"));
  };
  return (
    <>
      <section>
        {/*sign in*/}
        <section className="hidden md:flex">
          <div className="flex space-x-4">
            {user === null ? (
              <>
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
              </>
            ) : (
              <>
                <div>
                  <p className="text-primary-color">Welcome, {user}!</p>
                  <Button
                    onClick={userSignOut}
                    type="button"
                    variant="primary"
                    size="small"
                  >
                    Sign Out
                  </Button>
                </div>
              </>
            )}
          </div>
        </section>

        <section className="md:hidden">
          {/*sign in*/}
          <div className="flex space-x-4">
            {user === null ? (
              <>
                <div className="">
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
              </>
            ) : (
              <>
                <div>
                  <p className="text-primary-color">Welcome, {user}!</p>
                  <Button
                    onClick={userSignOut}
                    type="button"
                    variant="primary"
                    size="small"
                  >
                    Sign Out
                  </Button>
                </div>
              </>
            )}
          </div>
        </section>
      </section>
    </>
  );
};

export default Authentication;
