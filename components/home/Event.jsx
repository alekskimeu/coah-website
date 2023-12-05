import React from "react";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

const Event = ({ title, image, content, date, venue, slug }) => {
  return (
    <div className="group grid grid-cols-1 md:grid-cols-2 mb-5 items-center gap-5 shadow-lg rounded-xl transition duration-150 overflow-hidden hover:shadow-2xl hover:ease-in">
      <Image
        width="100"
        height="100"
        src={image}
        className="rounded-t-xl md:rounded-t-none md:rounded-tl-xl md:rounded-bl-xl w-full h-full delay-100 group-hover:scale-105 group-hover:grayscale	 transition duration-500"
      />
      <div className="p-5 relative bg-white rounded-b-xl">
        <Link
          href={`/events/${slug}`}
          className="flex justify-between gap-2 items-center font-semibold text-lg text-[#283891] mb-1"
        >
          {title} <ArrowRightAltOutlinedIcon className="opacity-75" />
        </Link>
        <p className="text-xs text-[#61677A] opacity-70 mb-5">{venue}</p>
        <p className="text-[#61677A] mt-4 line-clamp-4 text-md">{content}</p>
        <div className="mt-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <CalendarMonthOutlinedIcon
              style={{ color: "#61677A", opacity: ".5" }}
            />
            <span className="text-xs opacity-90 pt-1 text-[#61677A]">
              {date}
            </span>
          </div>

          {/* <IconButton style={{ backgroundColor: "#EAF1FB" }}>
            <ShareIcon style={{ opacity: ".5" }} />
          </IconButton> */}
        </div>
      </div>
    </div>
  );
};

export default Event;
