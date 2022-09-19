import axios from "axios";

import { GetProductsResults, Product } from "../../types/types";

function ProductDetail({ data }: { data: Product }) {
  return <>Im the product Detail </>;
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
