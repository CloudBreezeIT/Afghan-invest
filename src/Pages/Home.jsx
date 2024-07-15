import React from "react";
import Banner from "../Components/Home/Banner";
import Service from "../Components/Home/Service";
import NewsAndMedia from "../Components/Home/NewsAndMedia";
import Founders from "../Components/Home/Founders";
import Address from "../Components/Home/Address";
import Footer from "../Components/Footer";
import Gallery from "../Components/Gallery";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Service />
      <NewsAndMedia />
      <Founders />
      <Gallery />
      <Address />
      <Footer />
    </>
  );
};

export default Home;
