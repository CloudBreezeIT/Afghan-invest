import React from "react";
import Banner from "../Components/Home/Banner";
import Service from "../Components/Home/Service";
import NewsAndMedia from "../Components/Home/NewsAndMedia";
import Gallery from "../Components/Home/Gallery";
import Address from "../Components/Home/Address";
import About from "../Components/Home/About";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Service />
      <NewsAndMedia />
      <Gallery />
      <Address />
    </>
  );
};

export default Home;
