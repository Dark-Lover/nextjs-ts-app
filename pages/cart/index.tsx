import CartItem from "../../components/CartItem";
import EmptySection from "../../components/Empty";
import { useAppSelector } from "../../hooks/reduxToolkitHooks";
import { myCartItems } from "../../store/cartSlice";
import { Formik, FormikErrors, FormikValues } from "formik";
interface IInitVal {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
}

function Cart() {
  const initialVal: IInitVal = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  };

  const data = useAppSelector(myCartItems);
  const total = data.reduce<number>((a, b) => {
    return a + b.price;
  }, 0);

  if (data.length === 0) return <EmptySection />;
  return (
    <section className="mb-10">
      <h1 className=" text-center text-2xl font-semibold mb-8">Cart Items</h1>
      <div className="flex flex-col lg:flex-row">
        {/* <Checkout /> */}
        {/* Checkout */}

        <div className="flex flex-col p-4  sm:flex-1">
          <h2 className="font-semibold mb-4 ">Checkout</h2>
          <Formik
            initialValues={initialVal}
            validate={(values) => {
              const errors: FormikErrors<FormikValues> = {};
              if (!values.firstName) {
                errors.firstName = "Required";
              } else if (!values.lastName) {
                errors.lastName = "Required";
              } else if (!values.address) {
                errors.address = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <input
                  autoComplete="off"
                  type="firstName"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  className="border-b-2 w-[40%] outline-none px-4 py-1 mr-2 placeholder:text-xs"
                  placeholder="First Name"
                />
                <small className="text-red-400">
                  {errors.firstName && touched.firstName && errors.firstName}
                </small>

                <input
                  autoComplete="off"
                  type="lastName"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  className="border-b-2 w-[40%] outline-none px-4 py-1 placeholder:text-xs"
                  placeholder="Last Name"
                />
                <small className="text-red-400">
                  {errors.lastName && touched.lastName && errors.lastName}
                </small>

                <input
                  autoComplete="off"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="border-b-2 w-[81%] outline-none px-4 py-1 placeholder:text-xs mt-4"
                  placeholder="Email"
                />
                <small className="text-red-400">
                  {errors.email && touched.email && errors.email}
                </small>

                <input
                  autoComplete="off"
                  type="address"
                  name="address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                  className="border-b-2 w-[81%] outline-none px-4 py-1 placeholder:text-xs mt-4"
                  placeholder="Address"
                />
                <small className="text-red-400">
                  {errors.address && touched.address && errors.address}
                </small>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer block bg-text-pumpk text-white px-4 py-2 mt-4"
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>

        {/* End Checkout */}

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
