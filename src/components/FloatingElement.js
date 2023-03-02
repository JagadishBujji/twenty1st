import React from "react";
// import Lottie from "lottie-react";

const FloatingElement = () => {
  return (
    <>
      {/* <img
        src="../images/floatingelement.gif"
        alt="gif"
        className="floatingelement"
      /> */}

      {/* <lottie-player
        src="https://lottie.host/b296857f-cf5b-413c-b285-b91279444c28/5iRbTXpXDf.json"
        background="transparent"
        speed="2"
        style={{ width: "100%", height: "100%" }}
        loop
        autoplay
      ></lottie-player> */}
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
      {/* <Lottie
        src="https://lottie.host/12c8909c-79bb-461c-b215-3cdc1d3bdaef/h3UW2JFkRl.json"
        allowTransparency
        loop
        autoplay
        style={{
          width: "100%",
          height: "100%",
        }}
      /> */}
    </>
  );
};

export default FloatingElement;
