import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar/Navbar";

function Root() {
  return (
    <>
      <Navbar />
      <div className="bg-darkmode text-white">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Root;
