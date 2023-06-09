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
            The best place to watch, play, and learn the games you love.
          </p>
        </div>
        <div className="basis-1/2 px-6">
          <div className="player-wrapper">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=mabv3IjQkSw"
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
