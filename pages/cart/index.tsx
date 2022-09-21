import CartItem from "../../components/CartItem";
import EmptySection from "../../components/Empty";
import { useAppSelector } from "../../hooks/reduxToolkitHooks";
import { myCartItems } from "../../store/cartSlice";

function Cart() {
  const data = useAppSelector(myCartItems);

  if (data.length === 0) return <EmptySection />;
  return (
    <section className="mb-10">
      <h1 className=" text-center text-2xl font-semibold mb-8">Cart Items</h1>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col p-4 bg-bgs-green sm:flex-1">checkout</div>
        <div className="flex flex-col p-2 sm:flex-1 ">
          {/* Cart Item */}
          {data.map((prod) => (
            <CartItem prod={prod} key={prod.id} />
          ))}
          {/* End Cart Item */}
        </div>
      </div>
    </section>
  );
}

export default Cart;
