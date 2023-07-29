import Image from "next/image";
import Link from "next/link";

import image from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className="bg-[#283891] py-[6rem]">
      <div className="container mx-auto flex flex-col-reverse items-center justify-center lg:flex-row lg:justify-between gap-10">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5 text-white">
          <h1 className="font-bold text-5xl max-w-lg mb-4">
            Together
            <br /> we can make a <br />
            difference
          </h1>
          <p className="mb-8 text-xl max-w-3xl">
            The world breaks everyone, and afterwards, many are strong at the
            broken places.
          </p>
          <Link
            href="#donate"
            className="rounded-full border-0 pt-[1rem] pb-[.95rem] px-[2rem] fw-bold bg-white text-gray-800 uppercase text-xs"
          >
            Donate Now
          </Link>
        </div>
        <div>
          <Image src={image} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
