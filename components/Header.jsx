import Link from "next/link";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

const Header = () => {
  return (
    <header className="fixed top-0 w-full h-[5rem] flex items-center bg-[#17403F] z-20">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-3">
          <h1 className="text-white font-bold text-3xl">Logo</h1>

          <div className="flex gap-[3rem] text-white">
            <Link href="/" className="text-[1rem] opacity-90">
              Home
            </Link>
            <Link href="/team" className="text-[1rem] opacity-90">
              Team
            </Link>
            <Link href="/activities" className="text-[1rem] opacity-90">
              Activities
            </Link>
            <Link href="/blog" className="text-[1rem] opacity-90">
              Blog
            </Link>
            <Link href="/newsletters" className="text-[1rem] opacity-90">
              Newsletters
            </Link>
          </div>

          <Link
            href="/donate"
            className="text-white flex items-center gap-1 border px-[1.5rem] py-[.38rem] rounded-full"
          >
            Donate
            <ArrowRightAltOutlinedIcon className="opacity-80" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
