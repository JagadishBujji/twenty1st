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
    </>
  );
};
export default Banner;
