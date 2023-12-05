import React from "react";
import Image from "next/image";
import Link from "next/link";

import Markdown from "react-markdown";

import parse from "html-react-parser";

import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

const HomePost = ({ image, title, content, slug }) => {
  return (
    <div className="group shadow-lg rounded-xl w-[310px] min-w-[310px] transition duration-150 overflow-hidden hover:shadow-xl hover:ease-in">
      <Image
        height="200"
        width="100"
        src={image}
        className="rounded-t-xl w-full h-[200px] object-cover delay-100 group-hover:scale-105 group-hover:grayscale	 transition duration-500"
      />
      <div className="py-5 px-4 relative bg-white rounded-b-xl">
        <Link
          href={`/blog/${slug}`}
          className="mt-0 font-semibold text-[#283891] flex justify-between items-center gap-2"
        >
          {title} <ArrowRightAltOutlinedIcon className="opacity-75" />
        </Link>
        <div className="text-gray-500 mt-2 line-clamp-3">
          {/* {parse(content)} */}
          <Markdown>{content}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default HomePost;
