import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { FiMoreHorizontal } from "react-icons/fi";
import { RiShareForwardLine } from "react-icons/ri";
import { AiOutlineLike, AiOutlineEye } from "react-icons/ai";
import Comments from "../Components/Comments/Comments";
import SideSuggestions from "../Components/SideSuggestions/SideSuggestions";
import Videos from "../videos.json";

function VideoWindow() {
  const { id } = useParams();
  const video = Videos.find((video) => video.id === id);

  return (
    <>
      <div className="pt-20 px-5">
        <div className="flex flex-wrap">
          <div className="p-3 basis-[65%]">
            <div className="player-wrapper">
              <ReactPlayer
                url={video.src}
                className="react-player"
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
            <div className="flex items-center pt-4">
              <h1 className="text-2xl font-semibold ">{video.title}</h1>
              <div className="ml-auto flex items-center">
                <AiOutlineEye size={20} />
                <p className="pl-1 text-sm">{video.views}</p>
              </div>
            </div>
            <div className="flex pt-2 items-center">
              <div>
                <img
                  src={video.dp}
                  alt="img"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div className="pl-2">
                <p className="font-semibold">{video.name}</p>
                <p className="text-sm text-gray-500">
                  {video.subs} subscribers
                </p>
              </div>
              <div>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-full ml-4 h-10 hover:opacity-80">
                  Subscribe
                </button>
              </div>
              <div className="ml-auto">
                <button className="bg-purple-500 text-white px-4 py-2 rounded-full ml-4 h-10 hover:opacity-80">
                  <div className="flex items-center">
                    <AiOutlineLike />
                    <p className="pl-2">{video.likes}</p>
                  </div>
                </button>
              </div>
              <div>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-full ml-4 h-10 hover:opacity-80">
                  <div className="flex items-center">
                    <RiShareForwardLine size={18} />
                    <p className="pl-2">Share</p>
                  </div>
                </button>
              </div>
              <div>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-full ml-4 h-10 hover:opacity-80">
                  <FiMoreHorizontal />
                </button>
              </div>
            </div>
            <Comments />
          </div>
          <div className="p-3 basis-[35%]">
            <SideSuggestions />
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoWindow;
