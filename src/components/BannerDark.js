import React from "react";

const BannerDark = () => {
  // const lottie = {
  //   width: "100%",
  //   height: "70vh",
  //   "@media only screen and (max-width: 500px)": {
  //     width: "100%",
  //     height: "30vh",
  //   },
  // };
  return (
    <>
      {/* black */}

      <lottie-player
        src="https://lottie.host/31c362f9-ea34-49cf-85c3-0d601b6c235c/x2jQOVSktg.json"
        background="transparent"
        speed="1"
        style={{
          width: "100%",
          height: "70vh",
        }}
        loop
        autoplay
      ></lottie-player>
    </>
  );
};
export default BannerDark;
