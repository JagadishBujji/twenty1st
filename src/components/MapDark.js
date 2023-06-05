import React, { useEffect, useRef } from "react";
const Map = () => {
  const gifRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start the GIF animation
          gifRef.current.src = gifRef.current.dataset.src;
        }
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0.5, // Trigger at 50% visibility
      }
    );

    // Observe the GIF element
    if (gifRef.current) {
      observer.observe(gifRef.current);
    }

    // Cleanup the observer when component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="map">
        {/* <lottie-player
          src="https://lottie.host/4cdab4fa-da84-474c-bba9-2095b256c9f2/Qwlox5oRiq.json"
          background="transparent"
          speed="1"
          style={{ width: "100%", height: "100%" }}
          loop
          autoplay
        ></lottie-player> */}
        <img
          ref={gifRef}
          data-src="https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/map%2Fmap.gif?alt=media&token=0c7bee0a-6a1f-47fb-854c-7a560f832331"
          alt="Branch-Singapore, Chennai, Bangalore"
          className="img-fluid"
          // style={{ height: "70vh", width: "150vh" }}
        />
      </div>
    </>
  );
};

export default Map;
