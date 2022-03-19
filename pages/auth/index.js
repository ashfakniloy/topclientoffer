import Link from "next/link";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash, FaUser, FaEnvelope } from "react-icons/fa";

function IndexPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      checkbox: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Username is required"),
      password: Yup.string()
        .min(6, "Must be 6 characters or more")
        .required("Password is required"),
      checkbox: Yup.boolean().oneOf([true], "Permission required"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="bg-white h-screen flex justify-center items-center font-Roboto">
      <div className="flex flex-col items-center px-7 py-6 border rounded">
        <h2 className="text-[24px] text-slate-700 font-semibold">Sign In</h2>

        <form
          className="flex flex-col text-[12px]"
          onSubmit={formik.handleSubmit}
        >
          <div className="relative py-3">
            <label htmlFor="name">Username</label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Username"
                className="input w-[300px]"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className="absolute  top-3 right-[60px] text-slate-600 pl-3 py-1 bg-white">
                <FaUser />
              </div>
              <div
                title="Sign in using email"
                className="absolute top-2 right-0 text-slate-600 hover:text-blue-500 hover:border-blue-500 duration-300 px-4 py-2 border bg-white rounded-sm"
              >
                <FaEnvelope />
              </div>
            </div>
            {formik.errors.name && formik.touched.name ? (
              <p className="absolute left-1 -bottom-1 text-custom-red">
                {formik.errors.name}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="relative py-3">
            <label htmlFor="password">Password</label>
            <div className="relative">
              <input
                // type="password"
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                autoComplete="on"
                className="input w-[350px] pr-20"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div
                className="absolute z-50 top-3 right-2 text-slate-600 pl-3 py-1 bg-white"
                onClick={handleShowPassword}
              >
                {showPassword ? <FaEyeSlash className="" /> : <FaEye />}
              </div>
            </div>
            {formik.touched.password && formik.errors.password ? (
              <p className="absolute left-1 text-custom-red">
                {formik.errors.password}
              </p>
            ) : (
              ""
            )}
          </div>

          <div className="relative py-3 flex items-center gap-2">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="w-4 h-4"
              value={formik.values.checkbox}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="checkbox" className="text-slate-400">
              I have read and agree to the{" "}
              <span className="text-blue-600 hover:text-blue-400 duration-300">
                <Link href="/">Terms of Use</Link>
              </span>{" "}
              and{" "}
              <span className="text-blue-600 hover:text-blue-400 duration-300">
                <Link href="/">Privacy Notice</Link>
              </span>{" "}
            </label>
            {formik.touched.checkbox && formik.errors.checkbox ? (
              <p className="absolute left-1 -bottom-1 text-custom-red">
                {formik.errors.checkbox}
              </p>
            ) : (
              ""
            )}
          </div>

          <button
            type="submit"
            className="mt-4 w-full py-2 bg-custom-red active:opacity-60 text-white text-[14px] rounded-sm disabled:opacity-40"
          >
            Sign in
          </button>

          <div className="mt-5 flex justify-between items-center">
            <div className="text-blue-600 hover:text-blue-400 text-sm duration-300">
              <Link href="/auth/affiliate">Create account</Link>
            </div>
            <div className="text-blue-600 hover:text-blue-400 text-sm duration-300">
              <Link href="/auth/forgot-password">Forgot password?</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default IndexPage;
