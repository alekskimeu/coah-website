import React from "react";
import Image from "next/image";
import mission from "../../assets/mission.png";

const CoreValues = () => {
  return (
    <section className="pt-[5rem] pb-[10rem]">
      <div className="container mx-auto">
        <div className="max-w-sm flex-none mb-10">
          <h1 className="text-lg text-gray-800 font-semibold mb-2 uppercase">Core Values</h1>
          <p className="opacity-80">
            The world breaks everyone, and afterwards, many are strong at the
            broken places.
          </p>
        </div>

        <div className="core-values">
          <figure className="border shadow-xl rounded-lg px-5 pt-6 pb-8 flex justify-center text-center">
            <div className="flex flex-col items-center gap-2 text-center">
              <Image src={mission} alt="Mission" width={50} height={50} />
              <h1 className="text-lg text-gray-700 font-bold">God First</h1>
              <p className="text-gray-500">
                To mission is to utilize the power of football to foster
                holistic development among individuals, communities, and
                societies.
              </p>
            </div>
          </figure>
          <figure className="border shadow-xl rounded-lg px-5 pt-6 pb-8 flex justify-center text-center">
            <div className="flex flex-col items-center gap-2 text-center">
              <Image src={mission} alt="Mission" width={50} height={50} />
              <h1 className="text-lg text-gray-700 font-bold">Respect</h1>
              <p className="text-gray-500">
                To mission is to utilize the power of football to foster
                holistic development among individuals, communities, and
                societies.
              </p>
            </div>
          </figure>
          <figure className="border shadow-xl rounded-lg px-5 pt-6 pb-8 flex justify-center text-center">
            <div className="flex flex-col items-center gap-2 text-center">
              <Image src={mission} alt="Mission" width={50} height={50} />
              <h1 className="text-lg text-gray-700 font-bold">Confidence</h1>
              <p className="text-gray-500">
                To mission is to utilize the power of football to foster
                holistic development among individuals, communities, and
                societies.
              </p>
            </div>
          </figure>
          <figure className="border shadow-xl rounded-lg px-5 pt-6 pb-8 flex justify-center text-center">
            <div className="flex flex-col items-center gap-2 text-center">
              <Image src={mission} alt="Mission" width={50} height={50} />
              <h1 className="text-lg text-gray-700 font-bold">Sportsmanship</h1>
              <p className="text-gray-500">
                To mission is to utilize the power of football to foster
                holistic development among individuals, communities, and
                societies.
              </p>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
