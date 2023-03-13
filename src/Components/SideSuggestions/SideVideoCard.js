import React from "react";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";

function SideVideoCard({ title, name, id, views, thumbnail }) {
  return (
    <>
      <Link to={`/video/${id}`}>
        <div className="flex py-2">
          <div className="flex-none basis-[1/2]">
            <img
              src={thumbnail}
              alt="thumbnail"
              className="w-[13em] h-[7em] rounded-[18px]"
            />
          </div>
          <div className="basis-[1/2] pl-2 ">
            <span className="text-md font-bold overflow-hidden text-ellipsis">
              {title}
            </span>
            <p className="font-semibold text-sm text-gray-500 capitalize">
              {name}
            </p>
            <div className="flex items-center">
              <p className="text-sm text-gray-500">{views} views</p>
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
