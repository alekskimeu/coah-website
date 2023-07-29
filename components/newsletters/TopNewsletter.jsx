import React from "react";
import Link from 'next/link'
import Image from "next/image";

import { IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

const TopNewsletter = ({ image, title, content, date, time }) => {
  return (
    <div className="rounded-lg border grid grid-cols-1  md:grid-cols-2">
      <Image
        src={image}
        className="w-full h-[100%] object-cover overflow-hidden rounded-b-none rounded-t-lg lg:rounded-l-xl lg:rounded-r-none"
      />
      <div className="mt-10 relative bg-white px-6 pb-4 rounded-b-xl">
        <h4 className="mt-0 text-[#17403f] flex items-center gap-2 text-[.7rem]">
          Football &#xb7;{" "}
          <span className="text-[.7rem] text-gray-400">{date}</span>
        </h4>
        <h1 className="mb-5 mt-2 font-semibold text-xl">
          <Link href="/newsletters/1">
          {title}
          </Link>
          </h1>
        <p className="text-[#5E5E5E]">{content}</p>
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

export default TopNewsletter;
