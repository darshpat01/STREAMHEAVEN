import React from "react";
import SliderComponent from "./SliderComponent";
import { Button } from "@chakra-ui/react";
import Card from "./Card";
import Videos from "../../videos";

function Gallery() {
  return (
    <>
      <div className="pt-8">
        <div className="flex justify-between">
          <h1 className="text-xl pb-4 font-bold">Streams of the day</h1>
          <Button colorScheme="purple" size="sm">
            View All
          </Button>
        </div>
        <SliderComponent>
          {Videos.map((video) => (
            <Card
              title={video.title}
              name={video.name}
              thumbnail={video.thumbnail}
              dp={video.dp}
              id={video.id}
              key={video.id}
            />
          ))}
        </SliderComponent>
        <div className="flex justify-between">
          <h1 className="text-xl pb-4 font-bold">Top Streamers</h1>
          <Button colorScheme="purple" size="sm">
            View All
          </Button>
        </div>
        <SliderComponent>
          {Videos.map((video) => (
            <Card
              title={video.title}
              name={video.name}
              thumbnail={video.thumbnail}
              dp={video.dp}
              id={video.id}
              key={video.id}
            />
          ))}
        </SliderComponent>
      </div>
    </>
  );
}

export default Gallery;
