function Checkout() {
  return (
    <div className="flex flex-col p-4 bg-bgs-green sm:flex-1">
      <h2 className="font-semibold mb-4 bg-red-400">Checkout</h2>
      <form>
        <label className="text-xs">First Name</label>
        <input
          type="text"
          name="firstname"
          placeholder="Enter First Name"
          className="ml-4"
        />
      </form>
    </div>
  );
}
export default Checkout;
