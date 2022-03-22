import Link from "next/link";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Layout2 from "../../components/Layout2";

function AffiliatePage() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmShowPassword = () => {
    setConfirmShowPassword(!confirmShowPassword);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      companyName: "",
      email: "",
      IMtype: "",
      password: "",
      confirmPassword: "",
      IMcontact: "",
      contactCountry: "",
      firstName: "",
      lastName: "",
      verticles: "",
      trafficSources: "",
      availableCountries: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Username is required"),
      companyName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Company name is required"),
      email: Yup.string().required("Email is required"),
      IMtype: Yup.string().required("IM type is required"),
      password: Yup.string()
        .min(6, "Must be 6 characters or more")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .min(6, "Must be 6 characters or more")
        .required("Confirm password"),
      IMcontact: Yup.string().required("IM contact is required"),
      contactCountry: Yup.string().required("Country is is required"),
      firstName: Yup.string().required("First name is is required"),
      lastName: Yup.string().required("Last name is is required"),
      verticles: Yup.string().required("Select atleast one verticle"),
      trafficSources: Yup.string().required(
        "Select atleast one traffic source"
      ),
      availableCountries: Yup.string().required(
        "Select atleast one available country"
      ),
      checkbox: Yup.boolean().oneOf([true], "Permission required"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Layout2 title="Affiliate sign up">
      <div className="bg-[#F0F2F5] lg:h-screen flex justify-center items-center font-Roboto">
        <div className="bg-white flex flex-col items-center px-7 py-6 border rounded">
          <h2 className="text-[24px] text-slate-700 font-semibold">
            Affiliate Sign Up
          </h2>

          <form
            className="grid grid-cols-2 gap-2 text-[12px]"
            onSubmit={formik.handleSubmit}
          >
            <div className="relative col-span-2 md:col-span-1 py-3">
              <label htmlFor="name">Username *</label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Username"
                  className="input w-full md:w-[220px]"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="absolute top-3 right-[10px] text-slate-600 pl-1 text-sm bg-white">
                  -topClientOffer
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

            <div className="relative col-span-2 md:col-span-1 py-3">
              <label htmlFor="companyName">Company Name *</label>
              <div className="relative">
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="Copmany Name"
                  className="input w-full md:w-[220px]"
                  value={formik.values.companyName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.companyName && formik.touched.companyName ? (
                <p className="absolute left-1 -bottom-1 text-custom-red">
                  {formik.errors.companyName}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="relative col-span-2 md:col-span-1 py-3">
              <label htmlFor="email">Contact Email *</label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Contact Email"
                  className="input w-full md:w-[220px]"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.email && formik.touched.email ? (
                <p className="absolute left-1 -bottom-1 text-custom-red">
                  {formik.errors.email}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="relative col-span-2 md:col-span-1 py-3">
              <label htmlFor="IMtype">IM Type *</label>
              <div className="relative">
                <select
                  id="IMtype"
                  name="IMtype"
                  className="input  w-full md:w-[220px]"
                  value={formik.values.IMtype}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option
                    value=""
                    className="text-slate-400"
                    defaultValue={true}
                    hidden
                  >
                    Select IM Type
                  </option>
                  <option value="skype" className="">
                    Skype
                  </option>
                </select>
              </div>
              {formik.errors.IMtype && formik.touched.IMtype ? (
                <p className="absolute left-1 -bottom-1 text-custom-red">
                  {formik.errors.IMtype}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="relative col-span-2 md:col-span-1 py-3">
              <label htmlFor="password">Password *</label>
              <div className="relative">
                <input
                  // type="password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="on"
                  className="input w-full md:w-[220px]"
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
              {formik.errors.password && formik.touched.password ? (
                <p className="absolute left-1 -bottom-1 text-custom-red">
                  {formik.errors.password}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="relative col-span-2 md:col-span-1 py-3">
              <label htmlFor="confirmPassword">Confirm Password *</label>
              <div className="relative">
                <input
                  // type="password"
                  type={confirmShowPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  autoComplete="on"
                  className="input w-full md:w-[220px]"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div
                  className="absolute z-50 top-3 right-2 text-slate-600 pl-3 py-1 bg-white"
                  onClick={handleConfirmShowPassword}
                >
                  {confirmShowPassword ? (
                    <FaEyeSlash className="" />
                  ) : (
                    <FaEye />
                  )}
                </div>
              </div>
              {formik.errors.confirmPassword &&
              formik.touched.confirmPassword ? (
                <p className="absolute left-1 -bottom-1 text-custom-red">
                  {formik.errors.confirmPassword}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="relative col-span-2 md:col-span-1 py-3">
              <label htmlFor="IMcontact">IM Contact *</label>
              <div className="relative">
                <input
                  type="text"
                  id="IMcontact"
                  name="IMcontact"
                  placeholder="IM contact"
                  className="input w-full md:w-[220px]"
                  value={formik.values.IMcontact}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.IMcontact && formik.touched.IMcontact ? (
                <p className="absolute left-1 -bottom-1 text-custom-red">
                  {formik.errors.IMcontact}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="relative col-span-2 md:col-span-1 py-3">
              <label htmlFor="contactCountry">Contact Country *</label>
              <div className="relative">
                <input
                  type="text"
                  id="contactCountry"
                  name="contactCountry"
                  placeholder="Select Country"
                  className="input w-full md:w-[220px]"
                  value={formik.values.contactCountry}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.contactCountry && formik.touched.contactCountry ? (
                <p className="absolute left-1 -bottom-1 text-custom-red">
                  {formik.errors.contactCountry}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="relative col-span-2 md:col-span-1 py-3">
              <label htmlFor="firstName">First Name *</label>
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  className="input w-full md:w-[220px]"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.firstName && formik.touched.firstName ? (
                <p className="absolute left-1 -bottom-1 text-custom-red">
                  {formik.errors.firstName}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="relative col-span-2 md:col-span-1 py-3">
              <label htmlFor="lastName">Last Name *</label>
              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="input w-full md:w-[220px]"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.lastName && formik.touched.lastName ? (
                <p className="absolute left-1 -bottom-1 text-custom-red">
                  {formik.errors.lastName}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="relative col-span-2 md:col-span-1 py-3">
              <label htmlFor="verticles">Verticles *</label>
              <div className="relative">
                <select
                  id="verticles"
                  name="verticles"
                  className="input w-full md:w-[220px]"
                  value={formik.values.verticles}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option
                    value=""
                    className="text-slate-400"
                    defaultValue={true}
                    hidden
                  >
                    Select Verticles
                  </option>
                  <option value="crypto" className="">
                    Crypto
                  </option>
                  <option value="dating" className="">
                    Dating
                  </option>
                  <option value="gambling" className="">
                    Gambling
                  </option>
                  <option value="betting" className="">
                    Betting
                  </option>
                </select>
              </div>
              {formik.errors.verticles && formik.touched.verticles ? (
                <p className="absolute left-1 -bottom-1 text-custom-red">
                  {formik.errors.verticles}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="relative col-span-2 md:col-span-1 py-3">
              <label htmlFor="trafficSources">Traffic Sources *</label>
              <div className="relative">
                <input
                  type="text"
                  id="trafficSources"
                  name="trafficSources"
                  placeholder="Select Traffic Sources"
                  className="input w-full md:w-[220px]"
                  value={formik.values.trafficSources}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.trafficSources && formik.touched.trafficSources ? (
                <p className="absolute left-1 -bottom-1 text-custom-red">
                  {formik.errors.trafficSources}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="relative col-span-2 py-3">
              <label htmlFor="availableCountries">Available Countries *</label>
              <div className="relative">
                <input
                  type="text"
                  id="availableCountries"
                  name="availableCountries"
                  placeholder="Select Available Countries"
                  className="input w-full"
                  value={formik.values.availableCountries}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.availableCountries &&
              formik.touched.availableCountries ? (
                <p className="absolute left-1 -bottom-1 text-custom-red">
                  {formik.errors.availableCountries}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="relative col-span-2 py-3 flex items-center gap-2">
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
              className="col-span-2 mt-4 w-full py-2 bg-custom-red active:opacity-60 text-white text-[14px] rounded-sm disabled:opacity-40"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout2>
  );
}

export default AffiliatePage;
