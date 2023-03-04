import React from "react";

import WorkBanner from "../components/Work/WorkBanner";
import WorkBrand from "../components/Work/WorkBrand";
import WorkContent from "../components/Work/WorkContent";
import WorkDownload from "../components/Work/WorkDownload";
import WorkGallery from "../components/Work/WorkGallery";

const Work = () => {
  return (
    <>
      <WorkBanner />
      <WorkContent />
      <WorkGallery />
      <WorkDownload />
      {/* <WorkBrand/> */}
    </>
  );
};

export default Work;
