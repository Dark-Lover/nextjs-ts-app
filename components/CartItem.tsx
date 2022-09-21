import Image from "next/image";
import { Product } from "../types/types";

function CartItem({ prod }: { prod: Product }) {
  console.log("my Cart Prod: ", prod);
  return (
    <div className="flex p-2 w-lg ">
      <div className="border-[1px] p-1 rounded-lg flex justify-center items-center ">
        <Image src={prod.image} width={50} height={50} alt="Product Image" />
      </div>
      <div className="flex flex-col justify-center p-2 w-80">
        <h2 className="text-xs font-semibold text-text-pumpk sm:text-sm">
          {prod.title}
        </h2>
        <small className="text-xs text-gray-600">{prod.category}</small>
      </div>
      <div className=" text-xs flex items-center font-semibold min-w-[45px] text-text-dark_blue px-1 sm:text-sm">
        {prod.price}0$
      </div>
    </div>
  );
}

export default CartItem;
