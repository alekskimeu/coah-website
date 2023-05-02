import Image from "next/image";
import Link from "next/link";

import image from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className="bg-[#17403F] py-[6rem]">
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
          <Link href="#donate" className="rounded-full border-0 pt-[.85rem] pb-[.7rem] px-[1.6rem] bg-white text-gray-700 font-semibold uppercase text-sm">
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
