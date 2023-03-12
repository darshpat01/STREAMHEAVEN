import React from "react";
import SliderComponent from "./SliderComponent";
import { Button } from "@chakra-ui/react";
import Card from "./Card";

const gamingVideos = [
  {
    title: "Pumpkin party in Orizone",
    name: "Tenz",
    thumbnail:
      "https://i.ytimg.com/vi/6DC2wPQse1k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4qch0I0RhzbCWrb18tbjjIFWzOQ",
    dp: "https://prod.assets.earlygamecdn.com/images/tenz-valorfeed-settings.jpg?mtime=1651353441",
    id: "1",
  },
  {
    title: "Pumpkin party in Orizone",
    name: "Tenz",
    thumbnail:
      "https://i.ytimg.com/vi/6DC2wPQse1k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4qch0I0RhzbCWrb18tbjjIFWzOQ",
    dp: "https://prod.assets.earlygamecdn.com/images/tenz-valorfeed-settings.jpg?mtime=1651353441",
    id: "2",
  },
  {
    title: "Pumpkin party in Orizone",
    name: "Tenz",
    thumbnail:
      "https://i.ytimg.com/vi/6DC2wPQse1k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4qch0I0RhzbCWrb18tbjjIFWzOQ",
    dp: "https://prod.assets.earlygamecdn.com/images/tenz-valorfeed-settings.jpg?mtime=1651353441",
    id: "3",
  },
  {
    title: "Pumpkin party in Orizone",
    name: "Tenz",
    thumbnail:
      "https://i.ytimg.com/vi/6DC2wPQse1k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4qch0I0RhzbCWrb18tbjjIFWzOQ",
    dp: "https://prod.assets.earlygamecdn.com/images/tenz-valorfeed-settings.jpg?mtime=1651353441",
    id: "4",
  },
  {
    title: "Pumpkin party in Orizone",
    name: "Tenz",
    thumbnail:
      "https://i.ytimg.com/vi/6DC2wPQse1k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4qch0I0RhzbCWrb18tbjjIFWzOQ",
    dp: "https://prod.assets.earlygamecdn.com/images/tenz-valorfeed-settings.jpg?mtime=1651353441",
    id: "5",
  },
];

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
          {gamingVideos.map((video) => (
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
          {gamingVideos.map((video) => (
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
