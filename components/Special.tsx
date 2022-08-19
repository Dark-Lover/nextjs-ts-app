import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import ProductItem from "./ProductItem";
import ProductsWrapper from "./ProductsWrapper";

function Special() {
  return (
    <section className="h-screen  mb-16 bg-blue-300  sm:h-80">
      <div className="h-full grid grid-rows-2 bg-yellow-600 sm:grid-rows-1 sm:grid-cols-4">
        <div className=" relative flex flex-col justify-center items-center gap-10 bg-black sm:col-span-1">
          <h3 className="text-white font-semibold">New Trend Edition</h3>
          <div className="relative before:content-['_'] before:w-24 before:h-24 before:border-2 before:absolute before:overflow-hidden ">
            <Image
              src="/images/sneakers.png"
              width={150}
              height={100}
              alt="sneaker"
            />
          </div>

          <button className="relative text-white flex justify-start items-center gap-2 transition before:transition-all before:content-['_'] before:w-0 before:h-0.5 before:bg-white before:absolute before:-bottom-2 before:hover:w-full">
            Explore All <BsArrowRight />
          </button>
        </div>
        <div className="bg-yellow-300 sm:px-2 sm:col-span-3 relative flex justify-center flex-col items-center gap-2 ">
          <div className=" flex flex-col sm:flex-row sm:gap-2 sm:flex-wrap">
            <ProductItem />
          </div>

          <h5 className="flex justify-center items-center bg-pink-300 h-">
            Slider controls
          </h5>
        </div>
      </div>
    </section>
  );
}

export default Special;
