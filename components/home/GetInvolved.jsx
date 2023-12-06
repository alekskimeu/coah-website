import React from "react";
import Link from "next/link";

import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

const GetInvolved = () => {
  return (
    <div className="flex flex-col justify-center item-center gap-3 text-center">
      <h1 className="text-white font-bold text-2xl md:text3xl mb-2">
        Get Involved
      </h1>
      <p className="text-white opacity-80 max-w-xl mx-auto">
        The world break everyone, and afterwards, many are strong at the broken
        places. The world break everyone, and afterwards.
      </p>

      <Link
        href="/donate"
        className="bg-white py-[.6rem] px-8 mt-4 rounded-full inline-block w-fit mx-auto text-gray-600"
      >
        Donate <ArrowRightAltOutlinedIcon className="opacity-80" />
      </Link>
    </div>
  );
};

export default GetInvolved;
