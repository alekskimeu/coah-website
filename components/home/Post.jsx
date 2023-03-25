import React from 'react'
import Image from 'next/image'

import {IconButton} from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';

const Post = ({image, title, content, date}) => {
  return (
    <div className="grid grid-cols-2 items-center gap-5 shadow-xl rounded-xl border">
        <Image src={image} className="rounded-l-xl w-full h-[250px] object-cover" />
        <div className="pl-5 pr-5 relative bg-white">
            <h1 className="mb-4 mt-0 font-semibold text-xl post-title">{title}</h1>
            <p className="text-gray-600">{content}</p>
            <div className="mt-3 flex justify-between items-center">
                <span className="text-xs opacity-70">{date}</span>

                <IconButton style={{ backgroundColor: "#EAF1FB" }}>
                    <ShareIcon style={{ opacity: ".5" }} />
                </IconButton>
            </div>
        </div>
    </div>
  )
}

export default Post