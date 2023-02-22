import React from "react";
import Accordion from "../components/Accordion";
import Banner from "../components/Banner";
import BrandJourney from "../components/BrandJourney";
import ClientSlider from "../components/ClientSlider";
import Communication from "../components/Communication";
import Content1 from "../components/Content1";
import Content2 from "../components/Content2";
import Faq from "../components/Faq";
import FloatingElement from "../components/FloatingElement";
import Map from "../components/Map";
import Project from "../components/Project";
import Testmonial from "../components/Testmonial";

const Home = () => {
  return (
    <>
      <Banner />
      <ClientSlider />
      <Content1 />
      <FloatingElement />
      <Accordion/>
      <Communication />
      <Project />
      <Map />
      <Content2/>
      <Testmonial/>
      <Faq/>
      <BrandJourney />
    </>
  );
};

export default Home;
