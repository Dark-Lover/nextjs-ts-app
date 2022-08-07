import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="z-10 sticky top-0 w-full flex p-4 items-center justify-between bg-blue-50 h-20">
      <div className="text-2xl font-semibold text-text-dark_blue z-20">
        my<span className=" text-text-pumpk ">Store</span>
      </div>
      <GiHamburgerMenu className="text-xl cursor-pointer sm:hidden" />
      <Navbar />
    </header>
  );
}

export default Header;
