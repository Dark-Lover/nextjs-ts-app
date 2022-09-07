import { useState } from "react";
import { useAppSelector } from "../hooks/reduxToolkitHooks";
import { Product } from "../types/types";
import ProductItem from "./ProductItem";
import ProductsWrapper from "./ProductsWrapper";

interface BestProductsProps {
  bestData: Product[];
}
function BestProducts({ bestData }: BestProductsProps) {
  const [cat, setCat] = useState(6);
  const cats = new Set(bestData.map((prod) => prod.category));
  const categories = [...cats];

  return (
    <section className="  pb-16">
      <h1 className=" text-center text-2xl font-semibold">
        Bestsellers Products
      </h1>
      <div className="flex gap-2 justify-center items-center py-3 flex-wrap mb-4">
        <button
          onClick={() => setCat(6)}
          className={`${
            cat === 6
              ? "bg-text-light_pumpk text-white"
              : " text-text-pumpk bg-white"
          } " cursor-pointer border-2 border-text-light_blue text-sm  px-4 py-2 rounded-3xl "`}
        >
          All
        </button>
        {categories.map((category, i) => (
          <button
            onClick={() => setCat(i)}
            className={`${
              i === cat
                ? "bg-text-light_pumpk text-white"
                : " text-text-pumpk bg-white"
            } " cursor-pointer border-2 border-text-light_blue text-sm  px-4 py-2 rounded-3xl "`}
            key={i}
          >
            {category}
          </button>
        ))}
      </div>

      <ProductsWrapper>
        {bestData.map((prod) => {
          if (prod.category === categories[cat])
            return <ProductItem prodData={prod} key={prod.id} />;
          if (cat === 6) return <ProductItem prodData={prod} key={prod.id} />;
        })}
      </ProductsWrapper>
    </section>
  );
}

export default BestProducts;
