import { useFormik } from "formik";
import * as Yup from "yup";
import Layout2 from "../../components/Layout2";

function IndexPage() {
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Layout2 title="Forgot password?">
      <div className="bg-white h-screen flex justify-center items-center font-Roboto">
        <div className="flex flex-col items-center px-7 py-6 border rounded">
          <h2 className="text-[22px] text-slate-700 font-semibold">
            Forgot password?
          </h2>

          <form
            className="mt-5 flex flex-col text-[12px]"
            onSubmit={formik.handleSubmit}
          >
            <div className="relative py-3">
              <label htmlFor="username">Username</label>
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  className="input w-[320px] lg:w-[350px]"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.username && formik.touched.username ? (
                <p className="absolute left-1 -bottom-1 text-custom-red">
                  {formik.errors.username}
                </p>
              ) : (
                ""
              )}
            </div>

            <button
              type="submit"
              className="mt-6 w-full py-2 bg-blue-500 active:opacity-60 text-white text-[14px] rounded-sm disabled:opacity-40"
            >
              Send recovery email
            </button>
          </form>
        </div>
      </div>
    </Layout2>
  );
}

export default IndexPage;
