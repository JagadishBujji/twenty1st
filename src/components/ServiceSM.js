import React, { useEffect, useRef, useState } from "react";
import ScrollMagic from "scrollmagic";
// import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
// import { Controller, Scene } from "react-scrollmagic";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const ServiceSM = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const [section, setSection] = useState({
    sec1: {
      duration: "0%",
      content: false,
    },
    sec2: {
      duration: "0%",
      content: false,
    },
    sec3: {
      duration: "0%",
      content: false,
    },
    sec4: {
      duration: "0%",
      content: false,
    },
  });

  useEffect(() => {
    const controller = new ScrollMagic.Controller();
    const section1Element = section1Ref.current;
    const section2Element = section2Ref.current;
    const section3Element = section3Ref.current;
    const section4Element = section4Ref.current;

    if (
      section1Element &&
      section2Element &&
      section3Element &&
      section4Element
    ) {
      const scene1 = new ScrollMagic.Scene({
        triggerElement: section1Element,
        triggerHook: "0.1", // start
        duration: section.sec1.duration, // end
      })
        .setPin(section1Element)
        .on("enter", () => {
          console.log("Scene 1 entered!");
          setSection((prevState) => {
            return {
              ...prevState,
              sec1: {
                duration: "100%",
                content: true,
              },
            };
          });
        })
        .on("leave", () => {
          console.log("Scene 1 left!");
          // setSection((prevState) => {
          //   return {
          //     ...prevState,
          //     sec1: {
          //       duration: "0%",
          //       content: false,
          //     },
          //   };
          // });
          // check whether its height is less, then set everything to 0% again
        });

      const scene2 = new ScrollMagic.Scene({
        triggerElement: section2Element,
        triggerHook: "0.1",
        duration: section.sec2.duration,
      })
        .setPin(section2Element)
        .on("enter", () => {
          console.log("Scene 2 entered!");
          setSection((prevState) => {
            return {
              ...prevState,
              sec2: {
                duration: "100%",
                content: true,
              },
            };
          });
        })
        .on("leave", () => {
          console.log("Scene 2 left!");
          // setSection((prevState) => {
          //   return {
          //     ...prevState,
          //     sec2: {
          //       duration: "0%",
          //       content: false,
          //     },
          //   };
          // });
        });

      const scene3 = new ScrollMagic.Scene({
        triggerElement: section3Element,
        triggerHook: "0.1",
        duration: section.sec3.duration,
      })
        .setPin(section3Element)
        .on("enter", () => {
          console.log("Scene 3 entered!");
          setSection((prevState) => {
            return {
              ...prevState,
              // sec2: {
              //   duration: "0%",
              //   content: false,
              // },
              sec3: {
                duration: "100%",
                content: true,
              },
            };
          });
        })
        .on("leave", () => {
          console.log("Scene 3 left!");
          // setSection((prevState) => {
          //   return {
          //     ...prevState,
          //     sec3: {
          //       duration: "0%",
          //       content: false,
          //     },
          //   };
          // });
        });

      const scene4 = new ScrollMagic.Scene({
        triggerElement: section4Element,
        triggerHook: "0.1",
        duration: section.sec4.duration,
      })
        .setPin(section4Element)
        .on("enter", () => {
          console.log("Scene 4 entered!");
          setSection((prevState) => {
            return {
              ...prevState,
              sec4: {
                duration: "100%",
                content: true,
              },
            };
          });
        })
        .on("leave", () => {
          console.log("Scene 4 left!");
          // setSection((prevState) => {
          //   return {
          //     ...prevState,
          //     sec4: {
          //       duration: "0%",
          //       content: false,
          //     },
          //   };
          // });
        });

      controller.addScene([scene1, scene2, scene3, scene4]);
    }

    return () => {
      controller.destroy(true);
    };
  }, [
    section.sec1.duration,
    section.sec2.duration,
    section.sec3.duration,
    section.sec4.duration,
  ]);

  return (
    <>
      <div ref={section1Ref} style={{ height: "500px" }}>
        Content 1
      </div>
      <div ref={section2Ref} style={{ height: "500px" }}>
        Content 2
      </div>
      <div ref={section3Ref} style={{ height: "500px" }}>
        Content 3
      </div>
      <div ref={section4Ref} style={{ height: "500px" }}>
        Content 4
      </div>
    </>
  );
};

export default ServiceSM;
