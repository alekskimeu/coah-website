import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomePost = ({ image, title, content }) => {
  return (
    <div className="shadow-lg rounded-xl min-w-[300px]">
      <Image
        src={image}
        className="rounded-t-xl w-full h-[200px] object-cover"
      />
      <div className="p-5 relative bg-white rounded-b-xl">
        <Link href={`/blog/1`} className="mt-0 font-semibold text-lg">
          {title}
        </Link>
        <p className="text-gray-500 mt-2">{content}</p>
      </div>
    </div>
  );
};

export default HomePost;
