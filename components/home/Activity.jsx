import React from "react";
import Link from 'next/link'
import Image from 'next/image'

import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";


const Activity = ({icon, title}) => {
  return (<div className="rounded-md border border-[#17403F] py-5 px-6">
    <Image src={icon} className="mb-3" />
    <h3 className="text-white mb-2 post-title">{title}</h3>

    <Link href="/" className="text-white opacity-80">Learn more
      <ArrowRightAltOutlinedIcon className="opacity-75" />
    </Link>
  </div>);
};

export default Activity;
