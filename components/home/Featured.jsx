import React from "react";
import Image from 'next/image'
import Link from 'next/link'

import {IconButton} from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';

import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

const Featured = ({image, title, description}) => {
  return <div className="grid grid-cols-2 items-center gap-10">

    <Image src={image} className="rounded-xl max-h-[420px] object-cover" />
    <div className="">
        <h1 className="text-white font-semibold text-2xl mb-3">{title}</h1>
        <p className="text-white opacity-80 ">{description}</p>

        <Link href="/" className="mt-6 bg-white rounded-full px-6 pt-[.8rem] pb-[.6rem] inline-block flex items-center gap-1 w-fit">Learn more 
            <ArrowRightAltOutlinedIcon className="opacity-75" />
        </Link>
    </div>
  </div>;
};

export default Featured;
