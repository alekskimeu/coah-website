import React from "react";
import Image from "next/image";
import Link from "next/link";

import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

const Featured = ({ image, title, description }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
      <div className="featured">
        <Image
          src={image}
          className="rounded-xl w-full lg:max-h-[420px] object-cover"
        />
      </div>
      <div className="">
        <h1 className="text-white font-semibold text-2xl mb-3">{title}</h1>
        <p className="text-white opacity-80 ">{description}</p>

        <Link
          href="/"
          className="mt-6 bg-white rounded-full px-6 py-[.6rem] flex items-center gap-1 w-fit text-gray-600"
        >
          Learn more
          <ArrowRightAltOutlinedIcon className="opacity-75" />
        </Link>
      </div>
    </div>
  );
};

export default Featured;
