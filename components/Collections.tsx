import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
function Collections() {
  return (
    <section className=" py-16  flex justify-center items-center flex-col gap-2 sm:flex-row sm:gap-6 sm:px-4">
      <div className="bg-green-300 flex flex-col py-3 px-12 sm:px-4">
        <h2 className="font-semibold text-center py-2">MEN COLLECTIONS</h2>
        <Image
          src="/images/sneakers.png"
          height={150}
          width={200}
          alt="collection"
          className="rotate-12"
        />
        <button className="flex justify-center items-center gap-2 font-semibold mt-2 px-4 py-2 border-2 border-gray-700 hover:bg-gray-400 hover:bg-opacity-30">
          Explore All <BsArrowRight />
        </button>
      </div>
      <div className="bg-bgs-violet flex flex-col py-3 px-12 sm:px-4">
        <h2 className="font-semibold text-center py-2">MEN COLLECTIONS</h2>
        <Image
          src="/images/sneakers.png"
          height={150}
          width={200}
          alt="collection"
          className="rotate-12"
        />
        <button className="flex justify-center items-center gap-2 font-semibold mt-2 px-4 py-2 border-2 border-gray-700 hover:bg-gray-400 hover:bg-opacity-30">
          Explore All <BsArrowRight />
        </button>
      </div>
      <div className="bg-bgs-orange flex flex-col py-3 px-12 sm:px-4">
        <h2 className="font-semibold text-center py-2">MEN COLLECTIONS</h2>
        <Image
          src="/images/sneakers.png"
          height={150}
          width={200}
          alt="collection"
          className="rotate-12"
        />
        <button className=" flex justify-center items-center gap-2 font-semibold mt-2 px-4 py-2 border-2 border-gray-700 hover:bg-gray-400 hover:bg-opacity-30">
          Explore All <BsArrowRight />
        </button>
      </div>
    </section>
  );
}

export default Collections;
