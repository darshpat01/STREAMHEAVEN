import React from "react";
import Header from "../Components/Header/Header";
import Gallery from "../Components/Body/Gallery";

function Homepage() {
  return (
    <>
      <div className="px-5 bg-darkmode text-white">
        <Header />
        <Gallery />
      </div>
    </>
  );
}

export default Homepage;
