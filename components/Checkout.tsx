import { Formik, FormikErrors, FormikValues } from "formik";
interface IInitVal {
  firstName: string;
  lastName: string;
}

function Checkout() {
  const initialVal: IInitVal = { firstName: "", lastName: "" };
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
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.firstName)
          ) {
            errors.firstName = "Invalid firstName address";
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
            <label htmlFor="firstname">First Name</label>
            <input
              type="firstName"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            {errors.firstName && touched.firstName && errors.firstName}
            <label htmlFor="lastname">Last Name</label>
            <input
              type="lastName"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            {errors.lastName && touched.lastName && errors.lastName}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
export default Checkout;
