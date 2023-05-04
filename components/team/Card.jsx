import Link from "next/link";
import Image from "next/image";

const Card = ({ number, firstName, lastName, image }) => {
  return (
    <Link href="" className="group relative border rounded-xl player-card overflow-hidden">
      <Image src={image} className="w-[100%] grayscale group-hover:grayscale-0 transition group-hover:scale-105 duration-1000" />
      <div className="absolute bottom-[1rem] left-[1rem] flex flex-col gap-[.1rem] z-10">
        <span className="font-semibold text-md md:text-lg border-b-2 border-[#17403F] w-fit text-white">
          {number}
        </span>
        <span className="font-bold text-lg md:text-xl text-white uppercase">{firstName}</span>
        <span className="font-bold text-lg md:text-xl text-white uppercase">{lastName}</span>
      </div>
    </Link>
  );
};

export default Card;
