import React from "react";
import Banner from "../../Components/home-page-components/Banner";
import Service from "../../Components/home-page-components/Service";
import NewsAndMedia from "../../Components/home-page-components/NewsAndMedia";
import Founders from "../../Components/home-page-components/Founders";
import Address from "../../Components/home-page-components/Address";
import Gallery from "../../Components/home-page-components/Gallery";
import About from "../../Components/home-page-components/About";
import Hero from "../../Components/home-page-components/Hero";
import MuseumInfoBar from "../../Components/home-page-components/MuseumInfoBar";

const Home = () => {
  return (
    <>
      {/* <Banner /> */}
      <Hero />
      <MuseumInfoBar/>
      {/* <About /> */}
      <Service />
      <NewsAndMedia />
      <Founders />
      <Gallery />
      <Address />
    </>
  );
};

export default Home;
