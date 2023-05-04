import React from "react";
import Image from "next/image";

import { IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

const Event = ({ title, image, content, date, venue }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb-5 items-center gap-5 shadow-xl rounded-xl border">
      <Image
        src={image}
        className="rounded-t-xl md:rounded-t-none md:rounded-tl-xl md:rounded-bl-xl w-full h-[100%] object-cover"
      />
      <div className="p-5 relative bg-white rounded-b-xl">
        <h1 className="font-semibold text-xl">{title}</h1>
        <span className="opacity-70 text-sm">{venue}</span>
        <p className="text-gray-600 mt-4">{content}</p>
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

export default Event;
