import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { Product } from "../types/types";
import ProductItem from "./ProductItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./../utils/SliderSettings";

function Special({ specialData }: { specialData: Product[] }) {
  return (
    <section className="h-screen mb-16 sm:h-80">
      <div className="h-full  grid grid-rows-2  sm:grid-rows-1 sm:grid-cols-4">
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
        <div className=" w-96 mt-4 mx-auto sm:w-full sm:inline-block sm:px-6 sm:col-span-3  gap-2 sm:my-auto">
          <Slider {...settings}>
            {specialData.map((prod) => {
              return <ProductItem prodData={prod} key={prod.id} isTrend />;
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Special;
