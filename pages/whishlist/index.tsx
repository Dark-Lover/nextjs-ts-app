import Image from "next/image";
import Link from "next/link";
import ProductItem from "../../components/ProductItem";
import ProductsWrapper from "../../components/ProductsWrapper";
import { useAppSelector } from "../../hooks/reduxToolkitHooks";
import { myLikeItems } from "../../store/likeSlice";

function WhishList() {
  const data = useAppSelector(myLikeItems);
  console.log(data);
  if (data.length === 0)
    return (
      <section className="mb-10 flex justify-center flex-col items-center">
        <h1 className=" text-center text-2xl font-semibold mb-8">
          Liked Items
        </h1>
        <Image
          src="/images/whishlist.png"
          height={351}
          width={495}
          alt="whishlist Empty"
        />
        <Link href="/products">
          <button className="bg-bgs-orange text-text-dark_blue px-6 py-4 font-semibold">
            Go To Products Page
          </button>
        </Link>
      </section>
    );
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
