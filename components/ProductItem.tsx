import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
//prettier-ignore
import {AiOutlineHeart,AiOutlineEye,AiFillHeart,} from "react-icons/ai";
import { MdOutlineShoppingCart, MdShoppingCart } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../hooks/reduxToolkitHooks";
import { addProduct, myCartItems } from "../store/cartSlice";
import { likeProduct, myLikeItems } from "../store/likeSlice";
import { authUserInfo } from "../store/userSlice";
import { Product } from "../types/types";

function ProductItem({
  prodData,
  isTrend,
  onDetail,
}: {
  prodData: Product;
  isTrend?: boolean;
  onDetail?: boolean;
}) {
  const [isShow, setIsShow] = useState<boolean>(false);
  // Redux toolkit for cart like and user
  const dispatch = useAppDispatch();
  const likedItems = useAppSelector(myLikeItems);
  const cartItems = useAppSelector(myCartItems);
  const { logState } = useAppSelector(authUserInfo);

  const checkExitsLike = likedItems.findIndex((el) => el.id === prodData.id);
  const checkExitsCart = cartItems.findIndex((el) => el.id === prodData.id);

  return (
    <div
      className="shadow-md px-12 py-4 relative cursor-pointer"
      onMouseEnter={() => {
        if (logState) {
          setIsShow(true);
        }
      }}
      onMouseLeave={() => setIsShow(false)}
    >
      <Image
        src={prodData?.image ? prodData?.image : "/images/sneakers.png"}
        height={150}
        width={200}
        alt="product"
      />
      <div className="flex justify-center items-center flex-col">
        <p className="text-gray-600 text-sm ">{prodData?.category}</p>
        <h3
          className={`${
            isTrend ? "text-xs " : ""
          }font-semibold tracking-wide my-1`}
        >
          {isTrend
            ? prodData?.title.substring(0, 15) + ".."
            : prodData?.title.length > 20
            ? prodData?.title.substring(0, 20) + ".."
            : prodData?.title}
        </h3>
        <h3 className="text-sm text-red-600 font-semibold">
          ${prodData?.price}
        </h3>
        {onDetail && (
          <div className="mt-4 border-t-2 pt-2">
            <p className="text-center font-semibold text-text-pumpk">
              Description
            </p>
            <small>{prodData?.description}</small>
          </div>
        )}
      </div>

      {prodData.rating.count > 200 && prodData.rating.rate > 4 && (
        <span className="absolute top-2 left-2 text-xs bg-red-500 px-3 py-1 rounded-xl text-white">
          Trend
        </span>
      )}

      {isShow && (
        <div
          className={`absolute  top-0 right-0 pt-4 pr-2 flex flex-col gap-3  `}
        >
          <div
            className="cursor-pointer transition text-gray-500 hover:text-black text-xl bg-white w-8 h-8 rounded-full flex justify-center items-center p-1"
            onClick={() => dispatch(addProduct(prodData))}
          >
            {checkExitsCart !== -1 ? (
              <MdShoppingCart className="text-bgs-violet" />
            ) : (
              <MdOutlineShoppingCart />
            )}
          </div>
          <div
            className="cursor-pointer transition text-gray-500 hover:text-black  text-xl bg-white w-8 h-8 rounded-full flex justify-center items-center p-1"
            onClick={() => {
              dispatch(likeProduct(prodData));
            }}
          >
            {checkExitsLike !== -1 ? (
              <AiFillHeart className="text-red-600" />
            ) : (
              <AiOutlineHeart />
            )}
          </div>
          {!onDetail && (
            <div className="cursor-pointer transition text-gray-500 hover:text-black  text-xl bg-white w-8 h-8 rounded-full flex justify-center items-center p-1">
              <Link href={`/products/${prodData.id}`}>
                <a>
                  <AiOutlineEye />
                </a>
              </Link>
            </div>
          )}
        </div>
      )}
      {/*  */}
    </div>
  );
}
export default ProductItem;
