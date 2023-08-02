import React from "react";
import Image from "next/image";
import Link from "next/link";

import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

const HomePost = ({ image, title, content }) => {
  return (
    <div className="shadow-lg rounded-xl min-w-[310px]">
      <Image
        src={image}
        className="rounded-t-xl w-full h-[200px] object-cover"
      />
      <div className="py-5 px-4 relative bg-white rounded-b-xl">
        <Link
          href={`/blog/1`}
          className="mt-0 font-semibold text-[#283891] flex justify-between items-center gap-2"
        >
          {title} <ArrowRightAltOutlinedIcon className="opacity-75" />
        </Link>
        <p className="text-gray-500 mt-2">{content}</p>
      </div>
    </div>
  );
};

export default HomePost;
