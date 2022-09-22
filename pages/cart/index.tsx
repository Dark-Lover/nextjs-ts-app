import CartItem from "../../components/CartItem";
import Checkout from "../../components/CheckOut";
import EmptySection from "../../components/Empty";
import { useAppSelector } from "../../hooks/reduxToolkitHooks";
import { myCartItems } from "../../store/cartSlice";

function Cart() {
  const data = useAppSelector(myCartItems);
  const total = data.reduce<number>((a, b) => {
    return a + b.price;
  }, 0);

  if (data.length === 0) return <EmptySection />;
  return (
    <section className="mb-10">
      <h1 className=" text-center text-2xl font-semibold mb-8">Cart Items</h1>
      <div className="flex flex-col lg:flex-row">
        <Checkout />
        <div className="flex flex-col p-2 sm:flex-1  ">
          {data.map((prod) => (
            <CartItem prod={prod} key={prod.id} />
          ))}
          <div className="border-t-2 py-4 px-8 flex justify-between max-w-lg ">
            <span className="text-sm font-semibold">Total</span>
            <span className="font-semibold">{total}$</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
