import React from "react";

function Card() {
  return (
    <>
      <div className="flex-col">
        <div className="overflow-hidden pb-2">
          <img
            src="https://picsum.photos/500/500"
            alt="img"
            className="w-[20em] h-[12em] rounded-[20px]"
          />
        </div>
        <div className="pl-1">
          <h1 className="text-xl font-bold">Pumpkin Party in Orizona</h1>
        </div>
        <div className="flex pl-1">
          <div>
            <img
              src="https://picsum.photos/200/300"
              alt="img"
              className="w-10 h-10"
            />
          </div>
          <div>
            <p>John Doe</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
