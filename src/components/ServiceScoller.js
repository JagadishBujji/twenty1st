import React, { useEffect, useRef, useState } from "react";

export default function Service() {
  const Ref1 = useRef(null);
  const Ref2 = useRef(null);
  const Ref3 = useRef(null);
  const Ref4 = useRef(null);
  // const [active, setActive] = useState("");
  const [content1, setContent1] = useState(false);
  const [content2, setContent2] = useState(false);
  const [content3, setContent3] = useState(false);
  const [content4, setContent4] = useState(false);

  const services = [
    {
      title: " Design",
      contents: ["Brand Identity", "Packaging", "UI/UX design"],
      ref: Ref1,
      active: content1,
    },
    {
      title: "Digital & Social",
      contents: ["Brand Identity", "Packaging", "UI/UX design", "Testing"],
      ref: Ref2,
      active: content2,
    },
    {
      title: " Advertising",
      contents: ["Brand Identity", "Packaging", "UI/UX design"],
      ref: Ref3,
      active: content3,
    },
    {
      title: "Films & Production",
      contents: ["Brand Identity", "Packaging", "UI/UX design", "Dummy"],
      ref: Ref4,
      active: content4,
    },
  ];

  useEffect(() => {
    function handleScroll() {
      const rect1 = Ref1.current.getBoundingClientRect();
      const rect2 = Ref2.current.getBoundingClientRect();
      const rect3 = Ref3.current.getBoundingClientRect();
      const rect4 = Ref4.current.getBoundingClientRect();

      if (rect1.top < 100) {
        setContent1(true);
      } else {
        setContent1(false);
      }

      if (rect2.top < 100) {
        setContent2(true);
      } else {
        setContent2(false);
      }

      if (rect3.top < 100) {
        setContent3(true);
      } else {
        setContent3(false);
      }

      if (rect4.top < 100) {
        setContent4(true);
      } else {
        setContent4(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="py-5 container d-flex flex-wrap justify-content-end">
      {/* content div */}
      <div className="w-50">
        {services.map((service, index) => (
          <div>
            <div
              ref={service.ref}
              style={{ position: "sticky", top: "1.5rem" }}
            >
              <div className="row overallscrool">
                <span
                  className="dashed"
                  style={
                    index
                      ? {
                          marginBottom: services[index - 1].active
                            ? service.active
                              ? 0
                              : "35rem"
                            : 0,
                        }
                      : { marginBottom: 0 }
                  }
                >
                  <span className="circle-desi"></span>
                </span>
                <h2
                  className="text-left Headingservices"
                  style={
                    index
                      ? {
                          marginBottom: services[index - 1].active
                            ? service.active
                              ? 0
                              : "35rem"
                            : 0,
                        }
                      : { marginBottom: 0 }
                  }
                >
                  {service.title}
                </h2>
              </div>

              <ul
                className="text-left ul-list"
                style={{
                  display: service.active ? "block" : "none",
                  marginBottom: "30rem",
                  fontSize: "2rem",
                }}
              >
                {service.contents.map((val) => (
                  <li>{val}</li>
                ))}
              </ul>
            </div>
            <div
              className="p-3"
              style={{ margin: service.active ? "0" : "-1rem" }}
            ></div>
          </div>
        ))}
      </div>
      {/* img container */}
      <div className="w-50">
        <div className="p-3" style={{ position: "sticky", top: "10%" }}>
          <img
            alt=""
            className="img-fluid"
            src={
              content1
                ? content2
                  ? content3
                    ? content4
                      ? "../images/film_white.gif"
                      : "../images/digital_white.gif"
                    : "../images/design_white.gif"
                  : "../images/advertising_white.gif"
                : ""
            }
          />
        </div>
      </div>
    </div>
  );
}
