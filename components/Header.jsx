import { useState } from "react";
import Link from "next/link";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [leftPosition, setLeftPosition] = useState("-100%");

  const displayMobileMenu = () => {
    setShowMobileMenu(true);
    setLeftPosition("100%");
  };

  const hideMobileMenu = () => {
    setShowMobileMenu(false);
    setLeftPosition("-100%");
  };

  // const headerHeight = showMobileMenu ? "100vh" : "5rem";

  const navHeight = showMobileMenu ? "h-[calc(100vh-5rem)]" : "";

  return (
    <header
      className={`bg-[#17403F] fixed top-0 w-full h-[5rem] flex items-start lg:items-center z-20 lg:px-[2rem]`}
    >
      <div className="container mx-auto py-[2rem] relative">
        <h1 className="text-white font-bold text-3xl lg:hidden absolute left-[2rem] top-[1rem]">
          Logo
        </h1>

        <div className="text-white absolute right-[2rem] top-[1rem] opacity-70 cursor-pointer lg:hidden">
          {showMobileMenu ? (
            <CloseOutlinedIcon className="text-4xl" onClick={hideMobileMenu} />
          ) : (
            <MenuOutlinedIcon
              className="text-4xl"
              onClick={displayMobileMenu}
            />
          )}
        </div>

        <div
          className={`bg-[#17403F] ${navHeight} flex flex-col lg:flex-row lg:justify-between items-center gap-3 w-full absolute top-[5rem] lg:top-0 lg:relative left-[${leftPosition}] lg:left-0 z-20 transition ease-in duration-1500`}
        >
          <h1 className="hidden lg:block text-white font-bold text-3xl mb-[3rem] lg:mb-0">
            Logo
          </h1>
          <div className="flex flex-col mt-[4rem] lg:mt-0 lg:flex-row text-center lg:text-left gap-[2rem] lg:gap-[3rem] text-white">
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
            className="text-white flex items-center gap-1 border px-[1.5rem] py-[.38rem] rounded-full mt-[3rem] lg:mt-0"
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
