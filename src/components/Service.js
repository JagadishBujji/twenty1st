import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const designRef = useRef();

  // useEffect(() => {

  //   // console.log(designRef.offsetTop, window.pageYOffset);
  // });

  // useEffect(() => {
  //   function handleScroll() {
  //     const element = designRef.current;
  //     // const elementPosition = element.getBoundingClientRect().top;
  //     // const elDistanceToTop =
  //     //   window.pageYOffset + element.getBoundingClientRect().top;

  //     const elementPosition = element.getBoundingClientRect().top;
  //     const distanceFromTop = window.pageYOffset + elementPosition;
  //     console.log(distanceFromTop);
  //     // const threshold = 50; // adjust this value as needed
  //     // if (distanceFromTop < threshold) {
  //     //   // trigger your function here
  //     //   console.log("Element is nearly at the top!");
  //     // }
  //   }

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   const element = designRef.current;
  //   const elementPosition =
  //     element.getBoundingClientRect().top + window.scrollY;
  //   console.log("elementPosition: ", elementPosition); // 1093.8000

  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     // console.log(elementPosition + 400, scrollPosition);
  //     // const difference = elementPosition + 400 - scrollPosition;
  //     // console.log("scroll: ", scrollPosition, difference);

  //     // if (difference < 50) {
  //     if (parseInt(elementPosition + 400) === scrollPosition) {
  //       // trigger your function here
  //       console.log("Element is near the top!");
  //       element.classList.add("sticky");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <div className="p-5 container">
        <div className="row m-0 sticky">
          <div className="col-md-7">
            <div className="row de" ref={designRef}>
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
      </div>
    </>
  );
};

export default Service;
