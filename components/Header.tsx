import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "./Navbar";

function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <header className="z-10 sticky top-0 w-full flex p-4 items-center justify-between bg-white h-20">
      <div className="text-2xl font-semibold text-text-dark_blue z-20">
        my<span className=" text-text-pumpk ">Store</span>
      </div>
      <GiHamburgerMenu
        className="text-xl cursor-pointer sm:hidden"
        onClick={() => setMenuOpen(true)}
      />
      {/* Mobile Menu */}
      {menuOpen && <Navbar menuCtrl={setMenuOpen} />}

      {/* Desktop Menu */}
      {!menuOpen && (
        <div className="hidden sm:block sm:justify-start sm:w-full">
          <Navbar />
        </div>
      )}
    </header>
  );
}

export default Header;
