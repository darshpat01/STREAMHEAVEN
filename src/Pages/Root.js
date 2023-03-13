import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

function Root() {
  return (
    <>
      <Navbar />
      <div className="bg-darkmode text-white">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
