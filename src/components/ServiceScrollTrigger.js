import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const ServiceScrollTrigger = () => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#c1",
      start: "top top",
      end: "300px",
      pin: true,
      markers: true,
    });
  }, []);

  return (
    <>
      <div id="c1">Content1</div>
      <div id="c2">Content2</div>
      <div id="c3">Content3</div>
    </>
  );
};

export default ServiceScrollTrigger;
