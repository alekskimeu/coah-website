import React from "react";
import Image from "next/image";

import { IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

const Post = ({ image, title, content, date, time }) => {
  return (
    <div className="rounded-xl">
      <Image
        src={image}
        className="w-full h-[300px] object-cover overflow-hidden rounded-t-xl"
      />
      <div className="mt-10 relative px-2 pb-4 rounded-b-xl">
        <h2 className="post-title mt-4 text-[#17403f] flex items-center gap-2">
          Football &#xb7;{" "}
          <span className="text-[.8rem] text-gray-400">{date}</span>
        </h2>
        <h1 className="mb-5 mt-2 font-semibold text-xl">{title}</h1>
        <p className="text-gray-600">{content}</p>
        <div className="mt-5 flex justify-between items-center">
          <span className="text-[.9rem] text-gray-400">{time} min read</span>

          <IconButton style={{ backgroundColor: "#EAF1FB" }}>
            <ShareIcon style={{ opacity: ".5" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Post;
