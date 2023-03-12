import React from "react";
import { BsDot } from "react-icons/bs";

function SideVideoCard() {
  return (
    <>
      <div className="flex py-2">
        <div className="flex-none basis-[1/2]">
          <img
            src="https://i.ytimg.com/vi/6Nv0weHy7t0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGf3p8jsDTQw_kqTvFGw11N1D0kw"
            alt="thumbnail"
            className="w-[13em] h-[7em] rounded-[18px]"
          />
        </div>
        <div className="basis-[1/2] pl-2 ">
          <span className="text-md font-bold overflow-hidden text-ellipsis">
            Video 1
          </span>
          <p className="font-semibold text-sm text-gray-500 capitalize">Tenz</p>
          <div className="flex items-center">
            <p className="text-sm text-gray-500">250K views</p>
            <BsDot />
            <p className="text-sm text-gray-500 pl-1">3 months ago</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideVideoCard;
