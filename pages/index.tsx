import type { NextPage } from "next";
import BestProducts from "../components/BestProducts";
import Collections from "../components/Collections";

import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Collections />
      <BestProducts />
    </>
  );
};

export default Home;
