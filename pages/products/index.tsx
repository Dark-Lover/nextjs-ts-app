import axios from "axios";
import { GetStaticProps } from "next";
import ProductItem from "../../components/ProductItem";
import ProductsWrapper from "../../components/ProductsWrapper";
import { Product } from "../../types/types";

interface ProductsPageProps {
  data: Product[];
}
function Products({ data }: ProductsPageProps) {
  return (
    <section className="mb-10">
      <h1 className=" text-center text-2xl font-semibold mb-8">All products</h1>
      <ProductsWrapper>
        {data.map((prod) => (
          <ProductItem prodData={prod} key={prod.id} />
        ))}
      </ProductsWrapper>
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
