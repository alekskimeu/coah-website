import Image from "next/image";

const Item = ({ title, description, image }) => {
  return (
    <div className="grid grid-cols-1 gap-5 mb-10 lg:mb-0 lg:grid-cols-2 lg:gap-0 items-center">
      <Image src={image} className="rounded-lg lg:rounded-none" />
      <div className="content">
        <h1 className="font-semibold text-2xl mb-5">{title}</h1>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default Item;
