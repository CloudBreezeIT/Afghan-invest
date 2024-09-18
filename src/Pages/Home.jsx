import React from "react";
import Banner from "../Components/Home/Banner";
import Service from "../Components/Home/Service";
import NewsAndMedia from "../Components/Home/NewsAndMedia";
import Founders from "../Components/Home/Founders";
import Address from "../Components/Home/Address";
import Gallery from "../Components/Home/Gallery"
import About from "../Components/Home/About";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <>
      {/* <Banner /> */}
      <Hero/>
      <About />
      <Service />
      <NewsAndMedia />
      <Founders />
      <Gallery />
      <Address />
    </>
  );
};

export default Home;
