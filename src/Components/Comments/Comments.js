import React from "react";
import { Input } from "@chakra-ui/react";
import CommentItem from "./CommentItem";

function Comments() {
  return (
    <>
      <div className="pt-8">
        <div className="flex items-center pb-4">
          <h1 className="text-lg font-semibold">5 Comments</h1>
          <div className="ml-auto">
            <h1>
              <span className="text-sm text-gray-500">Sort by</span> Top
            </h1>
          </div>
        </div>
        <Input
          variant="flushed"
          type="text"
          placeholder="Enter your comment here"
        />
      </div>
      <div>
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
    </>
  );
}

export default Comments;
