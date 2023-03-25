import Link from "next/link";
import Image from "next/image";

const Card = ({ number, firstName, lastName, image }) => {
  return (
    <Link href="" className="relative border rounded-xl bg-[#2b2b2b]">
      <Image src={image} className="w-[100%]" />
      <div className="absolute bottom-[1rem] left-[1rem] flex flex-col gap-[.1rem] z-10">
        <span className="font-semibold text-xl border-b-2 border-[#17403F] w-fit text-white">
          {number}
        </span>
        <span className="font-bold text-2xl text-white uppercase">{firstName}</span>
        <span className="font-bold text-2xl text-white uppercase">{lastName}</span>
      </div>
    </Link>
  );
};

export default Card;
