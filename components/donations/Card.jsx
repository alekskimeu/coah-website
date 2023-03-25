import Image from "next/image";

const Card = ({ image }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg border flex justify-center items-center px-10 py-5 cursor-pointer min-w-[300px]">
      <Image src={image} />
    </div>
  );
};

export default Card;
