import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <header className="z-30 sticky top-0 w-full flex p-4 items-center justify-between bg-white h-20">
      <Logo />
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
