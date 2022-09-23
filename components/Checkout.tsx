import { Formik, FormikErrors, FormikValues } from "formik";
import { IInitVal } from "../types/types";

function Checkout() {
  const initialVal: IInitVal = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  };

  console.log("Checkout Render now");
  return (
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
          } else if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          setSubmitting(false);
          resetForm();
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
            <div className="flex w-full">
              <div>
                <input
                  autoComplete="off"
                  type="firstName"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  className="border-b-2  outline-none px-4 py-1 mr-2 placeholder:text-xs"
                  placeholder="First Name"
                />
                <small className="text-red-400">
                  {errors.firstName && touched.firstName && errors.firstName}
                </small>
              </div>
              <div>
                <input
                  autoComplete="off"
                  type="lastName"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  className="border-b-2  outline-none px-4 py-1 placeholder:text-xs"
                  placeholder="Last Name"
                />
                <small className="text-red-400">
                  {errors.lastName && touched.lastName && errors.lastName}
                </small>
              </div>
            </div>

            <div>
              <input
                autoComplete="off"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="border-b-2 w-full outline-none px-4 py-1 placeholder:text-xs mt-4"
                placeholder="Email"
              />
              <small className="text-red-400">
                {errors.email && touched.email && errors.email}
              </small>
            </div>
            <div>
              <input
                autoComplete="off"
                type="address"
                name="address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
                className="border-b-2 w-full outline-none px-4 py-1 placeholder:text-xs mt-4"
                placeholder="Address"
              />
              <small className="text-red-400">
                {errors.address && touched.address && errors.address}
              </small>
            </div>

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
  );
}
export default Checkout;
