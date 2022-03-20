import React from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Highlights from "../components/Highlights";
import HowItWorks from "../components/HowItWorks";
import Join from "../components/Join";
import Layout from "../components/Layout";

function index() {
  return (
    <Layout>
      <div className="bg-black font-Roboto text-white overflow-hidden">
        <Banner />
        <div className="container ">
          <About />
          <Highlights />
          <Join />
          <HowItWorks />
          <Contact />
          <Footer />
        </div>
      </div>
    </Layout>
  );
}

export default index;
