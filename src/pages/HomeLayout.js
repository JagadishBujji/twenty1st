import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import WorkBrand from "../components/Work/WorkBrand";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <WorkBrand/>
      <Footer />
    </>
  );
};

export default HomeLayout;
