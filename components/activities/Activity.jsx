import Image from "next/image";

export default function Activity({ image, title, description }) {
  return (
    <div className="grid grid-cols-1 gap-5 mb-10 lg:mb-0 lg:grid-cols-2 lg:gap-0 items-center">
      <Image
        src={image}
        className="rounded-lg lg:rounded-none"
        alt={title}
        width="100"
        height="100"
      />
      <div className="content">
        <h1 className="font-semibold text-xl text-[#283891] mb-5">{title}</h1>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}
