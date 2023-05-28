import React from "react";
const MapDark = () => {
  return (
    <>
      <div className="map">
        {/* <img className="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/map%2Ffinal%202.png?alt=media&token=a0f9a150-5f8b-43c6-b737-bf5478d45ade" alt="map" /> */}
        <lottie-player
          src="https://lottie.host/ac5b0fa2-4532-4ebf-9327-0322b6fb5580/eNyTPuakD6.json"
          background="transparent"
          speed="1"
          style={{ width: "100%", height: "100%" }}
          loop
          autoplay
        ></lottie-player>
      </div>
    </>
  );
};

export default MapDark;
