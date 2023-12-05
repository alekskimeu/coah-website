import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="h-[7rem] lg:h-[5rem] bg-[#283891] flex items-center py-4 px-[2rem] absolute bottom-0"
      style={{ width: "100%" }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-5 text-white">
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-5 px-1">
          <Link href="/" className="opacity-80 text-sm">
            Home
          </Link>
          <Link href="/about" className="opacity-80 text-sm">
            About
          </Link>
          <Link href="/activities" className="opacity-80 text-sm">
            Activities
          </Link>
          <Link href="/events" className="opacity-80 text-sm">
            Events
          </Link>
          <Link href="/blog" className="opacity-80 text-sm">
            Blog
          </Link>
          <Link href="/newsletters" className="opacity-80 text-sm">
            Newsletters
          </Link>
        </div>
        <span className="opacity-80 text-xs">
          &copy; COAH {new Date().getFullYear()} - All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
