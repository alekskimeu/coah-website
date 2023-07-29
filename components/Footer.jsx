import Link from "next/link";
const Footer = () => {
  return (
    <footer className="h-[7rem] lg:h-[5rem] bg-[#283891] flex items-center py-4 px-[2rem]">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-5 text-white">
        <div className="flex items-center gap-5">
          <Link href="/activities" className="opacity-80">
            Activities
          </Link>
          <Link href="/team" className="opacity-80">
            Team
          </Link>
          <Link href="/blog" className="opacity-80">
            Blog
          </Link>
          <Link href="/newsletters" className="opacity-80">
            Newsletters
          </Link>
        </div>
        <span className="opacity-80 text-sm">
          &copy; {new Date().getFullYear()} COAH
        </span>
      </div>
    </footer>
  );
};

export default Footer;
