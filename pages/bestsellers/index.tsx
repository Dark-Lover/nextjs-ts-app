import axios from "axios";
import { GetStaticProps } from "next";
import BestProducts from "../../components/BestProducts";

import { Product } from "../../types/types";

interface ProductsPageProps {
  data: Product[];
}
function Products({ data }: ProductsPageProps) {
  const bestProds = data.filter((prod) => prod.rating.rate > 4);

  return (
    <section className="mb-10">
      <BestProducts bestData={bestProds} />
    </section>
  );
}

export default Products;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return {
    props: {
      data,
    },
  };
};
