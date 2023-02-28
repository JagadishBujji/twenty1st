import React, { useEffect, useState } from "react";
import { Controller, Scene } from "react-scrollmagic";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const [sidebarTop, setSidebarTop] = useState(undefined);
  const [isPin, setIsPin] = useState(true);

  useEffect(() => {
    const chatEl = document.querySelector(".sidebar").getBoundingClientRect();
    setSidebarTop(chatEl.top);
  }, []);

  useEffect(() => {
    // setIsPin(true);
    if (!sidebarTop) return;

    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [sidebarTop]);

  const isSticky = (e) => {
    const chatEl = document.querySelector(".sidebar");
    const scrollTop = window.scrollY;
    if (scrollTop >= sidebarTop - 10) {
      // chatEl.classList.add("sticky");
      // setIsPin(true);
    } else {
      // setIsPin(false);
      // chatEl.classList.remove("sticky");
    }
  };

  console.log(isPin);

  return (
    <>
      <div className="p-5 container">
        <Controller>
          <Scene duration={300} pin={isPin}>
            <div className="row m-0 sidebar">
              <div className="col-md-7">
                <div className="row de">
                  <span className="dashed">
                    <span className="circle-desi"></span>
                  </span>{" "}
                  <h1 className="desi">Design</h1>
                  {/* <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul> */}
                </div>
              </div>
              <div className="col-md-5"></div>
            </div>
          </Scene>

          <Scene duration={300} pin={isPin}>
            <div className="row m-0">
              <div className="col-md-7">
                <div className="row de">
                  <span className="dashed">
                    <span className="circle-desi"></span>
                  </span>{" "}
                  <h1 className="desi">Digital & Social</h1>
                  {/* <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul> */}
                </div>
              </div>
              <div className="col-md-5"></div>
            </div>
          </Scene>

          <Scene duration={300} pin={isPin}>
            <div className="row m-0">
              <div className="col-md-7">
                <div className="row de">
                  <span className="dashed">
                    <span className="circle-desi"></span>
                  </span>{" "}
                  <h1 className="desi">Digital & Social</h1>
                  {/* <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul> */}
                </div>
              </div>
              <div className="col-md-5"></div>
            </div>
          </Scene>

          <Scene duration={300} pin={isPin}>
            <div className="row m-0">
              <div className="col-md-7">
                <div className="row de">
                  <span className="dashed">
                    <span className="circle-desi"></span>
                  </span>{" "}
                  <h1 className="desi">Films & Production</h1>
                  {/* <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul> */}
                </div>
              </div>
              <div className="col-md-5"></div>
            </div>
          </Scene>
        </Controller>
      </div>
    </>
  );
};

export default Service;
