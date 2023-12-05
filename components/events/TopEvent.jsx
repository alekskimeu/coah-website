import React from "react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";

import parse from "html-react-parser";
import { IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import Markdown from "react-markdown";

const TopEvent = ({ image, title, content, date, slug, venue }) => {
  return (
    <div className="group rounded-lg border-none shadow-lg grid grid-cols-1 md:grid-cols-2 items-center overflow-hidden">
      <Image
        alt={title}
        width="100"
        height="100"
        src={image}
        className="w-full h-full overflow-hidden object-cover rounded-b-none rounded-t-lg lg:rounded-r-none lg:rounded-t-none lg:rounded-l-xl delay-100 group-hover:scale-105 group-hover:grayscale transition duration-500"
      />
      <div className="relative bg-white px-6 pb-4 overflow-hidden h-[100%]">
        <Link
          href={`/events/${slug}`}
          className="flex justify-between items-center gap-2 text-[#283891] mt-2 font-semibold text-md mb-1"
        >
          {title} <ArrowRightAltOutlinedIcon className="opacity-75" />
        </Link>
        <p className="text-xs text-[#61677A] opacity-70 mb-5">{venue}</p>
        <div className="text-gray-600 line-clamp-4 opacity-80">
          {/* {parse(content)} */}
          <Markdown>{content}</Markdown>
        </div>
        <div className="mt-7 flex items-center gap-2">
          <CalendarMonthOutlinedIcon
            style={{ color: "#61677A", opacity: ".5" }}
          />
          <span className="text-xs opacity-90 pt-1 text-[#61677A]">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default TopEvent;
