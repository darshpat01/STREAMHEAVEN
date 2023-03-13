import React from "react";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";

function SideVideoCard() {
  return (
    <>
      <Link to="/video/1">
        <div className="flex py-2">
          <div className="flex-none basis-[1/2]">
            <img
              src="https://i.ytimg.com/vi/mabv3IjQkSw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBliznnZqoKGnCZwLlxPJEsu3IyQw"
              alt="thumbnail"
              className="w-[13em] h-[7em] rounded-[18px]"
            />
          </div>
          <div className="basis-[1/2] pl-2 ">
            <span className="text-md font-bold overflow-hidden text-ellipsis">
              Video 1
            </span>
            <p className="font-semibold text-sm text-gray-500 capitalize">
              Tenz
            </p>
            <div className="flex items-center">
              <p className="text-sm text-gray-500">250K views</p>
              <BsDot />
              <p className="text-sm text-gray-500 pl-1">3 months ago</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default SideVideoCard;
