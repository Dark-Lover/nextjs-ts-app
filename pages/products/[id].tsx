import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";

function ProductDetail() {
  return <>Im the product Detail </>;
}

export default ProductDetail;

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return {
    props: {
      data,
    },
  };
};
