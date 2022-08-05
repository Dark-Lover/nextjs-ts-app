import { BiSearchAlt2 } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart, AiOutlineCloseCircle } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { menuItems } from "../temp/data";
function Navbar() {
  return (
    <div className="absolute h-screen bg-white top-0 left-0 w-60 sm:relative sm:w-full sm:h-auto sm:flex sm:justify-between sm:items-center sm:bg-transparent">
      <AiOutlineCloseCircle className="absolute text-xl right-4 top-5 cursor-pointer sm:hidden " />
      <nav className="">
        <ul className="flex flex-col pt-20 pb-10 px-8 sm:flex-row sm:gap-2 sm:pt-0 sm:pb-0 ">
          {menuItems.map((item, i) => (
            <li
              key={i}
              className="relative  border-b-2 py-2 px-2 cursor-pointer sm:border-b-0 sm:text-center sm:before:left-0 sm:before:ease-in-out sm:before:transition-all sm:before:absolute sm:before:w-0 sm:before:h-1 sm:before:bg-text-light_pumpk sm:before:bottom-0 sm:hover:before:w-full"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col gap-4 px-4 sm:flex-row sm:p-0 sm:gap-2 sm:text-xl ">
        <div className="hidden sm:flex sm:items-center sm:py-4  ">
          <BiSearchAlt2 />
        </div>
        <div className="flex items-center  gap-4 sm:py-4 sm:text-xl ">
          <CgProfile /> <span className="sm:hidden">Login / Register</span>
        </div>
        <div className="flex items-center gap-4 sm:relative">
          <AiOutlineHeart />
          <div className="flex justify-between w-full sm:hidden">
            <span className="sm:hidden">Whishlist</span>
            <span className="w-5 h-5 rounded-full bg-text-pumpk text-white text-xs flex items-center justify-center ">
              3
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 sm:relative">
          <BsHandbag />
          <div className="flex justify-between w-full sm:hidden">
            <>
              <span className="sm:hidden">Bascket:</span>
              <span className="text-text-light_pumpk sm:hidden"> 198$.00</span>
            </>
            <span className="  w-5 h-5 rounded-full bg-text-pumpk text-white text-xs flex items-center justify-center ">
              3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
