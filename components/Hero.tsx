import Image from "next/image";

function Hero() {
  return (
    <section className="grid grid-rows-2 min-h-[70vh] py-10 relative overflow-hidden sm:grid-cols-2 sm:grid-rows-none">
      <div className="-z-0 absolute rounded-full w-1/2 h-full top-0 right-0 bg-black opacity-5  rotate-45"></div>
      <div className="order-2 p-4 flex flex-col justify-center items-center max-w-sm  mx-auto sm:col-span-1">
        <p className=" uppercase font-thin mb-2 text-text-light_pumpk">
          Men&apos;s clothing
        </p>
        <h1 className=" text-lg font-bold text-center mb-2 text-text-dark_blue">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h1>
        <p className=" text-sm text-gray-600 text-center mb-4">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <button className=" bg-red-400 py-2 px-4 rounded-md text-white">
          Shop Now
        </button>
      </div>
      <div className=" w-full h-full relative">
        <Image
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          layout="fill"
          alt="product"
          objectFit="contain"
        />
      </div>
    </section>
  );
}

export default Hero;
