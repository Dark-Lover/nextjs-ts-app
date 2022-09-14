import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import BestProducts from "../components/BestProducts";
import Collections from "../components/Collections";
import Hero from "../components/Hero";
import Special from "../components/Special";
import { Product } from "../types/types";

const Home: NextPage<{ data: Product[] }> = ({ data }) => {
  const bestProds = data.filter((prod) => prod.rating.rate > 4);
  const specialProds = data.filter((prod) => prod.rating.count > 150);

  return (
    <>
      <Hero />
      <Collections />
      <BestProducts bestData={bestProds} />
      <Special specialData={specialProds} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return {
    props: {
      data,
    },
  };
};
