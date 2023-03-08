import React, { useContext } from "react";

import WorkBanner from "../components/Work/WorkBanner";
import WorkBannerDark from "../components/Work/WorkBannerDark";
import WorkBrand from "../components/Work/WorkBrand";
import WorkContent from "../components/Work/WorkContent";
import WorkDownload from "../components/Work/WorkDownload";
import WorkGallery from "../components/Work/WorkGallery";
import { ThemeContext } from "../context/theme-context";

const Work = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      {isDarkMode ? <WorkBannerDark /> : <WorkBanner />}
      <WorkContent />
      <WorkGallery />
      <WorkDownload />
      {/* <WorkBrand/> */}
    </>
  );
};

export default Work;
