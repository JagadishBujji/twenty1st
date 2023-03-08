import React from "react";
// import Lottie from "lottie-react";

const FloatingElement = () => {
  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        <lottie-player
          src="https://lottie.host/12c8909c-79bb-461c-b215-3cdc1d3bdaef/h3UW2JFkRl.json"
          background="transparent"
          speed="1"
          style={{ width: "100%", height: "100%" }}
          loop
          autoplay
        ></lottie-player>
      </div>

      {/* black */}

      {/* <lottie-player
        src="https://lottie.host/3991e953-8071-4bcc-8b1e-6e6a94a5f538/hfCnV4lGR2.json"
        background="transparent"
        speed="1"
        style={{ width: "100%", height: "100%" }}
        loop
        autoplay
      ></lottie-player> */}
    </>
  );
};

export default FloatingElement;
