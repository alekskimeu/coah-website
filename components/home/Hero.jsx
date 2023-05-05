import React from "react";
import Link from "next/link";
import Image from "next/image";

import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

import image from "../../assets/hero.png";

const Hero = () => {
  return (
    <section className="py-[7rem] bg-[#17403F] rounded-b-lg">
      <div className="container mx-auto flex flex-col-reverse items-center justify-center lg:flex-row lg:justify-between gap-10">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5">
            <div>

          <h1 className="text-white font-bold text-4xl lg:max-w-xl mb-1">
            COAH FOUNDATION
          </h1>

          <h2 className="text-white opacity-90">COLOUR OF ART & HEART FOUNDATION</h2>
            </div>

          <h3 className="lg:max-w-2xl text-white opacity-80 text-xl">
            A community based organization located in Mathare Nairobi, Kenya
            aiming to eradicate poverty through sport for holistic development.
          </h3>

          <div className="flex items-center gap-10 mt-3">
            <Link
              href="/donate"
              className="bg-white text-[#17403f] rounded-full pt-[.8rem] pb-[.6rem] px-10"
            >
              Donate
            </Link>
            <Link
              href="/"
              className="flex items-center gap-1 text-white opacity-90"
            >
              Learn more
              <ArrowRightAltOutlinedIcon className="opacity-80" />
            </Link>
          </div>
        </div>

        <Image src={image} />
      </div>
    </section>
  );
};

export default Hero;
