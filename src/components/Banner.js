import React from "react";

const Banner = () => {
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
      {/* white */}

      <lottie-player
        src="https://lottie.host/7b45dfa0-822b-43e4-814e-a099b460cac3/5D8uaczosa.json"
        background="transparent"
        speed="1"
        style={{
          width: "100%",
          height: "70vh",
        }}
        loop
        autoplay
      ></lottie-player>

      {/* black */}

      {/* <lottie-player
        src="https://lottie.host/31c362f9-ea34-49cf-85c3-0d601b6c235c/x2jQOVSktg.json"
        background="transparent"
        speed="1"
        style={{
          width: "100%",
          height: "70vh",
        }}
        loop
        autoplay
      ></lottie-player> */}
    </>
  );
};
export default Banner;
