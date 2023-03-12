import React from "react";
import { Link } from "react-router-dom";

function Card({ title, thumbnail, name, dp, id }) {
  return (
    <>
      <Link to={`/video/${id}`}>
        <div className="flex-col p-2">
          <div className="overflow-hidden pb-1">
            <img
              src={thumbnail}
              alt="img"
              className="w-[20em] h-[12em] rounded-[20px]"
            />
          </div>
          <div className="pl-1">
            <h1 className="text-lg font-bold">{title}</h1>
          </div>
          <div className="flex pl-1 items-center">
            <div className="pr-2">
              <img src={dp} alt="img" className="w-8 h-8 rounded-full" />
            </div>
            <div>
              <p className="text-sm font-semibold">{name}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
