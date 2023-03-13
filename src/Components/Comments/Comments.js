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
          dp="https://yt3.ggpht.com/tDhCnAwgOp32QNwJZ2WdizV1UFZlPthMJMWAbjpkFwtqcknZVsf2RK8vMJ4HPGJH8MDSSQuh=s176-c-k-c0x00ffffff-no-rj"
        />
        <CommentItem
          comm="his is why  i like tenz he is pro  and  humble"
          user="@GamersCrazyWorld"
          likes="10k"
          dislikes="2"
          time="10 day ago"
          dp="https://yt3.ggpht.com/imQyqD03QBUd5hpySnE4aROjudgjl86__Z9mlkpoLWz2KCgqsXyUHOeWJrS0Asw9xUV7DtcROw=s176-c-k-c0x00ffffff-no-rj"
        />
        <CommentItem
          comm="What is the sensitivity and aiming line of the tenses?"
          user="@Senpai"
          likes="100"
          dislikes="1"
          time="1 month ago"
          dp="https://yt3.ggpht.com/ytc/AL5GRJWiSwIeCZ49atkYCnAYxSao4hjPvEWmvKWKFKdvWw=s176-c-k-c0x00ffffff-no-rj"
        />
        <CommentItem
          comm="Tenz makes every gun look like a vandal."
          user="@Kun123"
          likes="20k"
          dislikes="10k"
          time="1 year ago"
          dp="https://yt3.ggpht.com/ytc/AL5GRJUxLPVM5CCe1QIkvpLGH1P7E8U6cygQObVcerJiAA=s176-c-k-c0x00ffffff-no-rj"
        />
      </div>
    </>
  );
}

export default Comments;
