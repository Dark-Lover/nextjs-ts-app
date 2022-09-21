import Image from "next/image";
import Link from "next/link";
import EmptySection from "../../components/Empty";
import ProductItem from "../../components/ProductItem";
import ProductsWrapper from "../../components/ProductsWrapper";
import { useAppSelector } from "../../hooks/reduxToolkitHooks";
import { myLikeItems } from "../../store/likeSlice";

function WhishList() {
  const data = useAppSelector(myLikeItems);
  console.log(data);
  if (data.length === 0) return <EmptySection />;
  return (
    <section className="mb-10">
      <h1 className=" text-center text-2xl font-semibold mb-8">Liked Items</h1>
      <ProductsWrapper>
        {data.map((prod) => (
          <ProductItem prodData={prod} key={prod.id} />
        ))}
      </ProductsWrapper>
    </section>
  );
}

export default WhishList;
