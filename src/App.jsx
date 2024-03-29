import React from "react";
import "./App.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Therapist from "./components/pages/Therapist";
import Privacy from "./components/pages/Privacy";
import Community from "./components/pages/Community";
import SignInPanel from "./components/pages/SignInPanel";
import SignupPanel from "./components/pages/SignupPanel";

import Header from "./components/reusables/Header";
import Footer from "./components/reusables/Footer";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/therapists" element={<Therapist/>} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/community" element={<Community/>} />
        <Route path="/signin" element={<SignInPanel />} />
        <Route path="/signup" element={<SignupPanel />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const Root = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      <div >
        <Outlet />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
