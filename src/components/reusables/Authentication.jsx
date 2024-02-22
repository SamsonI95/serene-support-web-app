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
  const [authenticatedUser, setAuthenticatedUser] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const listenAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticatedUser(user);
      } else {
        setAuthenticatedUser(null);
      }
    });
    return () => {
      listenAuth();
    };
  });

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
      
    </>
  );
};

export default Authentication;
