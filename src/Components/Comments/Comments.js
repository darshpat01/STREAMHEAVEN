import React from "react";
import { Input } from "@chakra-ui/react";
import CommentItem from "./CommentItem";

function Comments() {
  return (
    <>
      <div className="pt-8">
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
