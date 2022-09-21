import Image from "next/image";
import Link from "next/link";

function EmptySection() {
  return (
    <section className="mb-10 flex justify-center flex-col items-center">
      <h1 className=" text-center text-2xl font-semibold mb-8">Liked Items</h1>
      <Image
        src="/images/whishlist.png"
        height={351}
        width={495}
        alt="cartlist Empty"
      />
      <Link href="/products">
        <button className="bg-bgs-orange text-text-dark_blue px-6 py-4 font-semibold">
          Go To Products Page
        </button>
      </Link>
    </section>
  );
}

export default EmptySection;
