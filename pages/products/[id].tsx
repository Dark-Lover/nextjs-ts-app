import axios from "axios";
import Image from "next/image";
import ProductItem from "../../components/ProductItem";

import { GetProductsResults, Product } from "../../types/types";

function ProductDetail({ data }: { data: Product }) {
  const { category, description, id, image, title } = data;
  return (
    <section className="p-4">
      <h1 className=" text-center text-2xl font-semibold mb-8">
        Product Details
      </h1>
      <div className="max-w-sm m-auto">
        <ProductItem key={id} prodData={data} onDetail />
      </div>
    </section>
  );
}

export default ProductDetail;

export const getStaticPaths = async () => {
  const { data }: GetProductsResults = await axios.get(
    `https://fakestoreapi.com/products`
  );
  const paths = data.map((prod) => {
    return { params: { id: String(prod.id) } };
  });

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { id } = params;
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return {
    props: {
      data,
    },
  };
};
