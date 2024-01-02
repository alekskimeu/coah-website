import React from "react";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'

import { IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

const Post = ({ image, title, content, date, time }) => {
  return (
    <div className="group overflow-hidden rounded-xl border shadow-sm delay-100 hover:shadow-xl transition duration-500">
      <Image
        width="100"
        height="100"
        src={image}
        className="w-full h-[300px] object-cover overflow-hidden rounded-t-xl delay-100 group-hover:scale-105 group-hover:grayscale transition duration-500"
      />
      <div className="mt-6 relative px-4 pb-4 rounded-b-xl">
        {/* <h2 className="post-title mt-4 text-[#17403f] flex items-center gap-2">
          Football &#xb7;{" "}
          <span className="text-[.8rem] text-gray-400">{date}</span>
        </h2> */}
        <h1 className="mb-5 mt-2 font-semibold text-md text-[#283891]">
          <Link
            href="/newsletters/1"
            className="flex justify-between items-center gap-2"
          >
            {title} <ArrowRightAltOutlinedIcon className="opacity-75" />
          </Link>
        </h1>
        <div
          className="text-gray-500 text-gray-500 mt-2 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="mt-5 flex justify-between items-center">
          <span className="text-[.8rem] text-gray-400">{date}</span>
          {/* <span className="text-[.9rem] text-gray-400">{time} min read</span>

          <IconButton style={{ backgroundColor: "#EAF1FB" }}>
            <ShareIcon style={{ opacity: ".5" }} />
          </IconButton> */}
        </div>
      </div>
    </div>
  );
};

export default Post;
