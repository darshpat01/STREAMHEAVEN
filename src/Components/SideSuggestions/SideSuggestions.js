import React from "react";
import SideVideoCard from "./SideVideoCard";
import Videos from "../../videos.json";

function SideSuggestions() {
  return (
    <>
      <div>
        <h1 className="text-lg font-semibold">You may like</h1>
        <div>
          {Videos.map((video) => (
            <SideVideoCard
              title={video.title}
              name={video.name}
              thumbnail={video.thumbnail}
              dp={video.dp}
              id={video.id}
              key={video.id}
            />
          ))}
          {Videos.map((video) => (
            <SideVideoCard
              title={video.title}
              name={video.name}
              thumbnail={video.thumbnail}
              dp={video.dp}
              id={video.id}
              key={video.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default SideSuggestions;
