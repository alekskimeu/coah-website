import Image from 'next/image';

export default function Activity({image, title, description}) {
    return (
        <div className="grid grid-cols-2 items-center">
            <div className="content">
             <h1 className="font-semibold text-2xl mb-5">{title}</h1>
             <p className="">{description}</p>
            </div>
            <Image src={image} />
        </div>
    )
}