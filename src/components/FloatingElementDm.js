import React from "react";

const FloatingElementDm = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {/* <lottie-player
        src="https://lottie.host/3991e953-8071-4bcc-8b1e-6e6a94a5f538/hfCnV4lGR2.json"
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
        src="https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/body%2Ffloating_dark.gif?alt=media&token=bd4bd21f-8aff-4b4e-b757-e2326503343b&_gl=1*59bl70*_ga*NjcxMjU2MjEuMTY4NTE3ODc2Nw..*_ga_CW55HF8NVT*MTY4NTkzMjM2Mi4yLjEuMTY4NTkzMjU2MS4wLjAuMA.."
      />
    </div>
  );
};

export default FloatingElementDm;
