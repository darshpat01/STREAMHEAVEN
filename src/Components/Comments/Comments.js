import React from "react";
import { Input } from "@chakra-ui/react";
import CommentItem from "./CommentItem";

function Comments() {
  return (
    <>
      <div className="pt-8">
        <div className="flex items-center pb-4">
          <h1 className="text-lg font-semibold">4 Comments</h1>
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
        <CommentItem
          comm="Love you and kydae thank you for continuing to upload through this time"
          user="@sgxeska4466"
          likes="1.2k"
          dislikes="10"
          time="1 day ago"
        />
        <CommentItem
          comm="his is why  i like tenz he is pro  and  humble"
          user="@GamersCrazyWorld"
          likes="10k"
          dislikes="2"
          time="10 day ago"
        />
        <CommentItem
          comm="What is the sensitivity and aiming line of the tenses?"
          user="@Senpai"
          likes="100"
          dislikes="1"
          time="1 month ago"
        />
        <CommentItem
          comm="Tenz makes every gun look like a vandal."
          user="@Kun123"
          likes="20k"
          dislikes="10k"
          time="1 year ago"
        />
      </div>
    </>
  );
}

export default Comments;
