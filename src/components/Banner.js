import React from "react";

const Banner = () => {
  return (
    <>
      {/* <img
        src="../images/ezgif.com-video-to-gif.gif"
        alt="gif"
        className="banner"
      /> */}

      {/* <video width="100%" height="100%" controls autoPlay>
        <source src="../images/header.mp4" type="video/mp4" />
      </video> */}

      <lottie-player
        src="https://lottie.host/07d60511-086c-42b5-a2aa-9714f82152e9/4aFYvnOyk6.json"
        background="transparent"
        speed="1"
        style={{ width: "100%", height: "100%" }}
        loop
        autoplay
      ></lottie-player>
    </>
  );
};
export default Banner;
