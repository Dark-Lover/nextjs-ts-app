import type { NextPage } from "next";
import BestProducts from "../components/BestProducts";
import Collections from "../components/Collections";

import Hero from "../components/Hero";
import Special from "../components/Special";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Collections />
      <BestProducts />
      <Special />
    </>
  );
};

export default Home;
