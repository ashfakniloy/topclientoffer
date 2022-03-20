import { FaEnvelope, FaRegSun } from "react-icons/fa";
import { useFormik } from "formik";

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="mt-10 px-2 py-8 ">
      <div className="text-center lg:text-left">
        <h1 className="text-custom-red text-[55px] lg:text-[100px] font-semibold">
          Contact Us
        </h1>
        <p className="mt-4 lg:mt-0 lg:text-[30px]">
          Type your message here. All fields are required
        </p>
      </div>

      <div className="mt-6">
        <form onSubmit={formik.handleSubmit}>
          <div className="lg:flex items-center gap-5">
            <div className="flex-1 flex flex-col">
              <label htmlFor="name" className="text-[21px] cursor-pointer">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                className="mt-1 p-3 outline-none text-slate-500 text-lg"
              />
            </div>
            <div className="mt-4 lg:mt-0 flex-1 flex flex-col">
              <label htmlFor="email" className="text-[21px] cursor-pointer">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="mt-1 p-3 outline-none text-slate-500 text-lg"
              />
            </div>
          </div>

          <div className="mt-4 flex flex-col">
            <label htmlFor="message" className="text-[21px] cursor-pointer">
              Message
            </label>
            <textarea
              id="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              cols="30"
              rows="10"
              className="mt-1 p-3 outline-none text-slate-500 text-lg"
            />
          </div>

          <div className="mt-3">
            <button type="submit" className="bg-custom-red w-full py-2 rounded">
              Send
            </button>
          </div>
        </form>

        <div className="mt-5 flex flex-col gap-5">
          <h1 className="text-center lg:text-left text-[25px] lg:text-[30px]">
            Contact
          </h1>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-56">
            <div className="flex flex-col lg:flex-row lg:gap-2 items-center">
              <FaEnvelope className="text-4xl" />
              <p className="mt-2 text-xs lg:text-[25px]">
                affiliates@topclientoffer.com
              </p>
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-2 items-center">
              <FaRegSun className="text-4xl" />
              <p className="mt-2 text-xs lg:text-[25px]">
                affiliates@topclientoffer.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
