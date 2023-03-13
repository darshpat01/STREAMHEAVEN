import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsDot } from "react-icons/bs";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

function CommentItem({ comm, user, likes, dislikes, time, dp }) {
  return (
    <>
      <div className="py-4">
        <div className="flex justify-between">
          <div className="flex align-top">
            <div className="pr-3">
              <img src={dp} alt="img" className="w-10 h-10 rounded-full" />
            </div>
            <div>
              <div className="flex items-center">
                <p className="text-sm font-semibold pr-1">{user}</p>
                <BsDot />
                <p className="text-sm text-gray-500 pl-1">{time}</p>
              </div>
              <div>
                <p className="text-sm text-gray-200 pb-1">{comm}</p>
              </div>
              <div className="flex">
                <div className="pr-3 flex items-center">
                  <AiOutlineLike size={20} />
                  <p className="pl-1 text-sm">{likes}</p>
                </div>
                <div className="pr-3 flex items-center">
                  <AiOutlineDislike size={20} />
                  <p className="pl-1 text-sm">{dislikes}</p>
                </div>
                <p className="text-sm text-gray-500">Reply</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentItem;
