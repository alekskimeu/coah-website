import React from "react";
import Image from "next/image";
import mission from "../../assets/mission.png";
import vision from "../../assets/vision.png";

const MissionVision = () => {
  return (
    <div className="mission-vision flex-1">
      <figure className="border shadow-xl rounded-lg px-5 pt-5 pb-7 h-fit flex justify-center text-center bg-[#283891]">
        <div className="flex flex-col items-center gap-3 text-center">
          <Image src={mission} alt="Mission" width={50} height={50} />
          <h1 className="text-white text-xl font-bold">Mission</h1>
          <p className="text-gray-50 mt-3 opacity-80">
            To mission is to utilize the power of football to foster holistic
            development among individuals, communities, and societies. We strive
            to create positive change and impact through football, not only on
            the field but also in personal growth, education, health, and social
            well-being.
          </p>
        </div>
      </figure>
      <figure className="border shadow-xl rounded-lg px-5 pt-5 pb-7 h-fit flex justify-center text-center bg-[#283891]">
        <div className="flex flex-col items-center gap-3 text-center">
          <Image src={vision} alt="Mission" width={50} height={50} />
          <h1 className="text-white text-xl font-bold">Vision</h1>
          <p className="text-gray-50 mt-3 opacity-80">
            To create a world where football serves as a vehicle for holistic
            development, empowering individuals through education to lead
            fulfilling lives and positively impact their communities. We
            envision a society where football and education synergistically
            nurture well-rounded individuals, fostering a brighter and more
            equitable future for all.
          </p>
        </div>
      </figure>
    </div>
  );
};

export default MissionVision;
