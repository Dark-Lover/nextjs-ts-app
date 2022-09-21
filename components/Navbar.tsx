// Nextjs React Imports
import { useState, useEffect } from "react";
import Image from "next/image";
// Firebase
//prettier-ignore
import {getAuth,signInWithPopup,GoogleAuthProvider,UserInfo,} from "firebase/auth";
import { firebaseApp } from "../firebase/clientApp";
// Redux Toolkit
import { myCartItems, resetCart } from "../store/cartSlice";
import { myLikeItems, resetLikes } from "../store/likeSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxToolkitHooks";
// Data and utils
import { menuItems } from "../temp/data";
import { getUserInfo } from "../utils/getUserInfo";
// Icons
import { BiSearchAlt2 } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineCloseCircle } from "react-icons/ai";
import { authUserInfo, logIn, logOut } from "../store/userSlice";
import Link from "next/link";

interface NavBarProps {
  menuCtrl?: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ menuCtrl }: NavBarProps) {
  // Redux Toolkit
  const cartItemsCount = useAppSelector(myCartItems).length;
  const likeItemsCount = useAppSelector(myLikeItems).length;
  const { logState, userData } = useAppSelector(authUserInfo);
  const dispatch = useAppDispatch();

  // Firebase Implementation
  const myFirebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  // SignIn
  const signIn = async () => {
    const { user } = await signInWithPopup(myFirebaseAuth, provider);

    const { refreshToken, providerData } = user;
    localStorage.setItem("user", JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(refreshToken));
    const [myDataUser]: UserInfo[] = providerData;

    dispatch(logIn(myDataUser));
    console.log("Im the signIn");
  };
  // SignOut
  const signOut = () => {
    console.log("sign Out");
    localStorage.clear();
    dispatch(logOut());
    dispatch(resetCart());
    dispatch(resetLikes());
  };

  useEffect(() => {
    const userData = getUserInfo();
    if (userData) {
      console.log("Im the localStorage");
      const [uData] = userData;
      dispatch(logIn(uData));
    }
  }, [dispatch]);

  return (
    <div className=" absolute h-screen bg-white top-0 left-0 w-60 sm:relative sm:w-full sm:h-auto sm:flex sm:justify-between sm:items-center sm:bg-transparent">
      <AiOutlineCloseCircle
        className="absolute text-xl right-4 top-5 cursor-pointer sm:hidden "
        onClick={() => menuCtrl?.(false)}
      />
      <nav className="">
        <ul className="flex flex-col pt-20 pb-10 px-6 sm:flex-row sm:gap-1 sm:pt-0 sm:pb-0 ">
          {menuItems.map((item, i) => (
            <Link href={item.path} key={i}>
              <li className=" relative  border-b-2 py-2 px-2 sm:cursor-pointer sm:border-b-0 sm:text-center sm:before:left-0 sm:before:ease-in-out sm:before:transition-all sm:before:absolute sm:before:w-0 sm:before:h-0.5 sm:before:bg-text-light_pumpk sm:before:bottom-0 sm:hover:before:w-full">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <div className=" flex flex-col gap-4 px-4 sm:flex-row sm:p-0 sm:gap-2 sm:text-xl ">
        <div className="hidden sm:flex sm:items-center sm:py-4  ">
          <BiSearchAlt2 className=" cursor-pointer" />
        </div>
        <div className="flex items-center  gap-4 sm:py-4 sm:text-xl ">
          {logState ? (
            <div className="w-7 h-7 relative rounded-2xl flex justify-center items-center overflow-hidden">
              <Image
                src={userData?.photoURL ? userData?.photoURL : ""}
                alt="avatar"
                width={30}
                height={30}
                className="cursor-pointer absolute left-0 top-0"
                onClick={() => signOut()}
              />
            </div>
          ) : (
            <CgProfile className=" cursor-pointer" onClick={() => signIn()} />
          )}
          {!logState ? <span className="sm:hidden">Login</span> : ""}
        </div>
        <div className="flex items-center gap-4 sm:relative">
          <div className="sm:relative ">
            {likeItemsCount !== 0 ? (
              <div className="hidden sm:flex sm:before:absolute sm:before:w-4 sm:before:h-4 sm:before:bg-red-400 sm:before:rounded-xl sm:before:text-[10px]  sm:before:top-[-9px] sm:before:left-[-7px] sm:before:content-['_']">
                <span className="absolute text-xs top-[-10px] left-[-2px] text-white">
                  {likeItemsCount}
                </span>
              </div>
            ) : (
              ""
            )}
            {likeItemsCount ? (
              <Link href="/whishlist">
                <a>
                  <AiOutlineHeart className="cursor-pointer " />
                </a>
              </Link>
            ) : (
              <AiOutlineHeart className="cursor-pointer " />
            )}
          </div>
          <div className="flex justify-between w-full sm:hidden">
            <span className="sm:hidden">Whishlist</span>
            <span className="w-5 h-5 rounded-full bg-text-pumpk text-white text-xs flex items-center justify-center ">
              {likeItemsCount}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 sm:relative">
          <div className="sm:relative">
            {cartItemsCount !== 0 ? (
              <Link href="/cart">
                <a>
                  <div className="hidden sm:flex sm:before:absolute sm:before:w-4 sm:before:h-4 sm:before:bg-text-light_pumpk sm:before:rounded-xl sm:before:text-[10px]  sm:before:top-[-9px] sm:before:left-[-7px] sm:before:content-['_']">
                    <span className="absolute text-xs top-[-10px] left-[-2px] text-white">
                      {cartItemsCount}
                    </span>
                  </div>
                  <BsHandbag className=" cursor-pointer" />
                </a>
              </Link>
            ) : (
              <BsHandbag className=" cursor-pointer" />
            )}
          </div>
          <div className="flex justify-between w-full sm:hidden">
            <>
              <span className="sm:hidden">Bascket:</span>
              <span className="text-text-light_pumpk sm:hidden"> 198$.00</span>
            </>
            <span className="  w-5 h-5 rounded-full bg-text-pumpk text-white text-xs flex items-center justify-center ">
              {cartItemsCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
