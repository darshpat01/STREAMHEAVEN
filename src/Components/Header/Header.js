import React from "react";
import ReactPlayer from "react-player";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="flex pt-20">
        <div className="basis-1/2">
          <h1 className="text-6xl font-bold uppercase ">
            play, compete, follow popular streamers
          </h1>
          <p className="text-xl pt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>
        <div className="basis-1/2 px-4">
          <div className="player-wrapper">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              className="react-player"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
