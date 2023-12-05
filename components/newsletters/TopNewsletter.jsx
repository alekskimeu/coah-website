import React from "react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";

import { IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import parse from "html-react-parser";

const TopNewsletter = ({ image, title, content, date, time }) => {
  return (
    <div className="group rounded-lg border-none shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      <Image
        alt={title}
        width="100"
        height="100"
        src={image}
        className="w-full h-full overflow-hidden object-cover rounded-b-none rounded-t-lg lg:rounded-r-none lg:rounded-t-none lg:rounded-l-xl delay-100 group-hover:scale-105 group-hover:grayscale transition duration-500"
      />
      <div className="relative bg-white px-6 pb-4 overflow-hidden h-[100%]">
        <h1 className="mb-5 mt-2 font-semibold text-md">
          <Link
            href="/blog/1"
            className="flex justify-between items-center gap-2 text-[#283891]"
          >
            {title} <ArrowRightAltOutlinedIcon className="opacity-75" />
          </Link>
        </h1>
        <div className="text-gray-600 line-clamp-4 opacity-80">
          {parse(content)}
        </div>
        <div className="mt-5 flex justify-between items-center">
          {/* <span className="text-[.9rem] text-gray-400">{time} min read</span>

          <IconButton style={{ backgroundColor: "#EAF1FB" }}>
            <ShareIcon style={{ opacity: ".5" }} />
          </IconButton> */}
          <span className="text-[.7rem] text-gray-400">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default TopNewsletter;
