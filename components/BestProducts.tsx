import Image from "next/image";
import ProductItem from "./ProductItem";
import ProductsWrapper from "./ProductsWrapper";

function BestProducts() {
  return (
    <section className="min-h-screen  pb-16">
      <h1 className=" text-center text-2xl font-semibold">
        Bestsellers Products
      </h1>
      <div className="flex gap-2 justify-center items-center py-3 flex-wrap mb-4">
        <button className="cursor-pointer border-2 border-text-light_blue text-sm bg-text-light_pumpk text-white px-4 py-2 rounded-3xl">
          All
        </button>
        <button className="cursor-pointer border-2 border-text-light_blue text-sm  px-4 py-2 rounded-3xl">
          Nike
        </button>
        <button className="cursor-pointer border-2 border-text-light_blue text-sm  px-4 py-2 rounded-3xl">
          Adidas
        </button>
        <button className="cursor-pointer border-2 border-text-light_blue text-sm  px-4 py-2 rounded-3xl">
          Puma
        </button>
      </div>

      <ProductsWrapper>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </ProductsWrapper>
    </section>
  );
}

export default BestProducts;
