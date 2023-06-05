import React, { useContext } from "react";
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
import { ThemeContext } from "../context/theme-context";
import ClientSliderDM from "../components/ClientSliderDM";
import BannerDark from "../components/BannerDark";
import MapDark from "../components/MapDark";
import FloatingElementDm from "../components/FloatingElementDm";

const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      {isDarkMode ? <BannerDark /> : <Banner />}
      {isDarkMode ? <ClientSliderDM /> : <ClientSlider />}
      <Content1 />
      {isDarkMode ? <FloatingElementDm />: <FloatingElement />}
      {/* <Service /> */}
      {/* <ServiceScrollMagic /> */}
      {/* <ServiceSM /> */}
      {/* <ServiceGsap /> */}
      {/* <ServiceScrollTrigger /> */}
      <ServiceScroller isDarkMode={isDarkMode} />
      <Communication />
      <Project />
      {isDarkMode ? <MapDark /> : <Map />}
      <Content2 />
      <Testmonial isDarkMode={isDarkMode} />
      <Faq isDarkMode={isDarkMode} />
      {/* <BrandJourney /> */}
    </>
  );
};

export default Home;
