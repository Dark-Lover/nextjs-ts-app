import Image from "next/image";
import { useState } from "react";
//prettier-ignore
import {AiOutlineHeart,AiOutlineEye,AiOutlineShoppingCart,} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/cartSlice";
import { Product } from "../types/types";

function ProductItem({
  prodData,
  isTrend,
}: {
  prodData: Product;
  isTrend?: boolean;
}) {
  const [isShow, setIsShow] = useState<boolean>(false);
  const dispatch = useDispatch();
  return (
    <div
      className="shadow-md px-12 py-4 relative cursor-pointer"
      onMouseEnter={() => setIsShow(true)}
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
      </div>

      <span className="absolute top-2 left-2 text-xs bg-red-500 px-3 py-1 rounded-xl text-white">
        New
      </span>
      {isShow && (
        <div
          className={`absolute  top-0 right-0 pt-4 pr-2 flex flex-col gap-3  `}
        >
          <div
            className="cursor-pointer transition text-gray-500 hover:text-black text-xl bg-white w-8 h-8 rounded-full flex justify-center items-center p-1"
            onClick={() => dispatch(addProduct(prodData))}
          >
            <AiOutlineShoppingCart />
          </div>
          <div className="cursor-pointer transition text-gray-500 hover:text-black  text-xl bg-white w-8 h-8 rounded-full flex justify-center items-center p-1">
            <AiOutlineHeart />
          </div>
          <div className="cursor-pointer transition text-gray-500 hover:text-black  text-xl bg-white w-8 h-8 rounded-full flex justify-center items-center p-1">
            <AiOutlineEye />
          </div>
        </div>
      )}
      {/*  */}
    </div>
  );
}
export default ProductItem;
