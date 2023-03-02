import React, { useEffect, useRef, useState } from "react";
// import ScrollMagic from "scrollmagic";
// import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
// import { Controller, Scene } from "react-scrollmagic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ServiceGsap.css";

gsap.registerPlugin(ScrollTrigger);

// const Section = ({ section, sectionStatus }) => {
//   const sectionRef = useRef(null);
//   const imageRef = useRef(null);
//   useEffect(() => {
//     const sectionEl = sectionRef.current;
//     ScrollTrigger.create({
//       trigger: sectionEl,
//       start: () => "top -" + window.innerHeight,
//       end: () => "+=" + window.innerHeight,
//       pin: true,
//       markers: true,
//       // endTrigger: "#otherID",
//       // end: "bottom 50%+=100px",
//       // onToggle: self => console.log("toggled, isActive:", self.isActive),
//       // onUpdate: self => {
//       //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
//       // }
//     });
//   }, []);

//   return (
//     <div className="row m-0 sidebar" ref={sectionRef}>
//       <div className="col-md-7">
//         <div className="row de">
//           <span className="dashed">
//             <span className="circle-desi"></span>
//           </span>{" "}
//           <h1 className="desi">{section.header}</h1>
//         </div>
//         {/* {sectionStatus.sec1 && ( */}
//         <ul className="ser">
//           {section.content.map((sec) => (
//             <li>{sec}</li>
//           ))}
//         </ul>
//         {/* )} */}
//       </div>
//     </div>
//   );
// };

const ServiceGsap = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const [section, setSection] = useState({
    sec1: true,
    sec2: true,
    sec3: true,
    sec4: true,
  });

  // const [sectionStatus, setSectionStatus] = useState({
  //   sec1: false,
  //   sec2: false,
  //   sec3: false,
  //   sec4: false,
  // });

  const sections = [
    {
      id: "section1",
      header: "Design",
      content: [
        "Brand Identity",
        "Packaging",
        "UI/UX design",
        "Brand assets/collateral",
        "Visual + Motion design",
      ],
    },
    {
      id: "section2",
      header: "Digital & Social",
      content: [
        "Brand Identity",
        "Packaging",
        "UI/UX design",
        "Brand assets/collateral",
        "Visual + Motion design",
      ],
    },
    {
      id: "section3",
      header: "Digital & Social Mgt",
      content: [
        "Brand Identity",
        "Packaging",
        "UI/UX design",
        "Brand assets/collateral",
        "Visual + Motion design",
      ],
    },
    {
      id: "section4",
      header: "Films & Production",
      content: [
        "Brand Identity",
        "Packaging",
        "UI/UX design",
        "Brand assets/collateral",
        "Visual + Motion design",
      ],
    },
  ];

  // useEffect(() => {
  //   ScrollTrigger.create({
  //     trigger: "#section1",
  //     start: "top top",
  //     end: "+=300px",
  //     pin: "#sec1",
  //     markers: true,
  //     pinSpacing: false,
  //   });
  // }, []);
  useEffect(() => {
    // Section 1
    gsap.to(section1Ref.current, {
      scrollTrigger: {
        trigger: section1Ref.current,
        pin: true,
        start: "top top",
        end: "bottom 270px",
        markers: true,
      },
    });

    // Section 2
    gsap.to(section2Ref.current, {
      scrollTrigger: {
        trigger: section2Ref.current,
        pin: true,
        start: "top top",
        end: "bottom top",
        markers: true,
      },
    });

    // Section 3
    gsap.to(section3Ref.current, {
      scrollTrigger: {
        trigger: section3Ref.current,
        pin: true,
        start: "top top",
        end: "bottom top",
        markers: true,
      },
    });

    // Section 4
    gsap.to(section4Ref.current, {
      scrollTrigger: {
        trigger: section4Ref.current,
        pin: true,
        start: "top top",
        end: "bottom top",
        markers: true,
      },
    });
  }, []);

  return (
    <div className="p-5 container">
      {/* {sections.map((section) => (
        <Section
          key={section.id}
          section={section}
          sectionStatus={sectionStatus}
        />
      ))} */}
      <div className="row m-0 sidebar" ref={section1Ref} id="section1">
        <div className="col-md-7" id="sec1">
          <div className="row de">
            <span className="dashed">
              <span className="circle-desi"></span>
            </span>{" "}
            <h1 className="desi">Design</h1>
          </div>
          {section.sec1 && (
            <ul className="ser">
              <li>Brand Identity </li>
              <li>Packaging</li>
              <li>UI/UX design</li>
              <li>Brand assets/collateral</li>
              <li>Visual + Motion design</li>
            </ul>
          )}
        </div>
        {/* <div className="col-md-5">
            <img src="../images/ANIMATION-01.png" alt="" className="an-image" />
          </div> */}
      </div>
      {/* </Scene> */}

      {/* <Scene duration={100} pin={isPin} triggerHook={0.1}> */}
      <div className="row m-0 sidebar" ref={section2Ref}>
        <div className="col-md-7" id="sec2">
          <div className="row de">
            <span className="dashed">
              <span className="circle-desi"></span>
            </span>{" "}
            <h1 className="desi">Digital & Social</h1>
          </div>
          {section.sec2 && (
            <ul className="ser">
              <li>Brand Identity </li>
              <li>Packaging</li>
              <li>UI/UX design</li>
              <li>Brand assets/collateral</li>
              <li>Visual + Motion design</li>
            </ul>
          )}
        </div>
        {/* <div className="col-md-5">
            <img src="../images/ANIMATION-01.png" alt="" className="an-image" />
          </div> */}
      </div>
      {/* </Scene> */}

      {/* <Scene duration={100} pin={isPin} triggerHook={0.1}> */}
      <div className="row m-0 sidebar" ref={section3Ref}>
        <div className="col-md-7" id="sec3">
          <div className="row de">
            <span className="dashed">
              <span className="circle-desi"></span>
            </span>{" "}
            <h1 className="desi">Digital & Social</h1>
          </div>
          {section.sec3 && (
            <ul className="ser">
              <li>Brand Identity </li>
              <li>Packaging</li>
              <li>UI/UX design</li>
              <li>Brand assets/collateral</li>
              <li>Visual + Motion design</li>
            </ul>
          )}
        </div>

        {/* <div className="col-md-5">
            <img src="../images/ANIMATION-01.png" alt="" className="an-image" />
          </div> */}
      </div>
      {/* </Scene> */}

      {/* <Scene duration={100} pin={isPin} triggerHook={0.1}> */}
      <div className="row m-0 sidebar" ref={section4Ref}>
        <div className="col-md-7" id="sec4">
          <div className="row de">
            <span className="dashed">
              <span className="circle-desi"></span>
            </span>{" "}
            <h1 className="desi">Films & Production</h1>
          </div>
          {section.sec4 && (
            <ul className="ser">
              <li>Brand Identity </li>
              <li>Packaging</li>
              <li>UI/UX design</li>
              <li>Brand assets/collateral</li>
              <li>Visual + Motion design</li>
            </ul>
          )}
        </div>
        {/* <div className="col-md-5">
            <img src="../images/ANIMATION-01.png" alt="" className="an-image" />
          </div> */}
      </div>
    </div>
  );
};

export default ServiceGsap;
