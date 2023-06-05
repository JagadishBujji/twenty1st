import React from "react";
// import Lottie from "lottie-react";

const FloatingElement = () => {
  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        {/* <lottie-player
          src="https://lottie.host/12c8909c-79bb-461c-b215-3cdc1d3bdaef/h3UW2JFkRl.json"
          background="transparent"
          speed="1"
          style={{ width: "100%", height: "100%" }}
          loop
          autoplay
        ></lottie-player> */}
        <img
          className="img-fluid"
          style={{
            aspectRatio: "3/1",
            objectFit: "cover",
            objectPosition: "0 -13rem"
          }}
          src="https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/body%2Ffloating.gif?alt=media&token=a3c96b57-f4c3-4f07-b6e8-ed5802755c17&_gl=1*v6nq3h*_ga*NjcxMjU2MjEuMTY4NTE3ODc2Nw..*_ga_CW55HF8NVT*MTY4NTkzMjM2Mi4yLjEuMTY4NTkzMjQ4Ny4wLjAuMA.."
        />
      </div>
    </>
  );
};

export default FloatingElement;
