import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./components/pages/Home";

import Header from "./components/reusables/Header";
import Footer from "./components/reusables/Footer";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
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
