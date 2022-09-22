import Image from "next/image";
import { Product } from "../types/types";
import { MdDelete } from "react-icons/md";
import { useAppDispatch } from "../hooks/reduxToolkitHooks";
import { addProduct } from "../store/cartSlice";
function CartItem({ prod }: { prod: Product }) {
  const dispatch = useAppDispatch();
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
      <div className=" text-xs flex items-center justify-center font-semibold w-[55px] text-text-dark_blue px-1 sm:text-sm">
        {prod.price}$
      </div>
      <div className="flex justify-center items-center ">
        <MdDelete
          className="text-red-500 cursor-pointer"
          onClick={() => dispatch(addProduct(prod))}
        />
      </div>
    </div>
  );
}

export default CartItem;
