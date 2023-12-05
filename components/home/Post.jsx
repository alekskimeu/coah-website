import React from "react";
import Image from "next/image";
import dayjs from "dayjs";

import { IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

const Post = ({ image, title, content, date }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb-5 items-center gap-5 shadow-xl rounded-xl border">
      <Image
        src={image}
        className="rounded-t-xl md:rounded-t-none md:rounded-tl-xl md:rounded-bl-xl w-full h-[250px] object-cover"
      />
      <div className="p-5 relative bg-white rounded-b-xl">
        <h1 className="mb-4 mt-0 font-semibold text-xl post-title">{title}</h1>
        <p className="text-gray-600">{content}</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-xs opacity-70">{date}</span>

          <IconButton style={{ backgroundColor: "#EAF1FB" }}>
            <ShareIcon style={{ opacity: ".5" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Post;
