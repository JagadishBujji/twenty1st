import React from "react";
import Service from "../components/Service";
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
import ServiceGsap from "../components/ServiceGsap";
import ServiceScrollMagic from "../components/ServiceScrollMagic";
import ServiceScrollTrigger from "../components/ServiceScrollTrigger";
import ServiceSM from "../components/ServiceSM";
import ServiceScroller from "../components/ServiceScoller";

const Home = () => {
  return (
    <>
      <Banner />
      <ClientSlider />
      <Content1 />
      {/* <FloatingElement /> */}
      {/* <Service /> */}
      {/* <ServiceScrollMagic /> */}
      {/* <ServiceSM /> */}
      {/* <ServiceGsap /> */}
      {/* <ServiceScrollTrigger /> */}
      <ServiceScroller />
      <Communication />
      <Project />
      <Map />
      <Content2 />
      <Testmonial />
      <Faq />
      {/* <BrandJourney /> */}
    </>
  );
};

export default Home;
