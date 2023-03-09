import React, { useEffect, useRef, useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import Advertise from "./services/Advertise";
import AdvertiseDark from "./services/AdvertiseDark";
import Design from "./services/Design";
import DesignDark from "./services/DesignDark";
import DigitalSocial from "./services/DigitalSocial";
import DigitalSocialDark from "./services/DigitalSocialDark";
import Film from "./services/Film";
import FilmDark from "./services/FlimDark";

export default function Service(props) {
  const Ref1 = useRef(null);
  const Ref2 = useRef(null);
  const Ref3 = useRef(null);
  const Ref4 = useRef(null);
  // const [active, setActive] = useState("");
  const [content1, setContent1] = useState(props?.service ? true : false);
  const [content2, setContent2] = useState(false);
  const [content3, setContent3] = useState(false);
  const [content4, setContent4] = useState(false);

  const services = [
    {
      title: " Design",
      para: "In this fast paced technology driven world, we believe in taking a step back in design as the way forward. We adopt a human approach to aesthetics and functional design that evokes an emotional response.",
      caption:
        "Our design expertise extends to the following services we offer",
      footer:
        "We bring design to life through animation and motion graphics that can be leveraged for various applications such as training, marketing communications etc",
      contents: ["Brand Identity", "Packaging", "UI/UX design"],
      ref: Ref1,
      active: content1,
      path: "#design",
    },
    {
      title: "Digital & Social",
      para: "In this fast paced technology driven world, we believe in taking a step back in design as the way forward. We adopt a human approach to aesthetics and functional design that evokes an emotional response.",
      caption:
        "Our design expertise extends to the following services we offer",
      footer:
        "We bring design to life through animation and motion graphics that can be leveraged for various applications such as training, marketing communications etc",
      contents: ["Brand Identity", "Packaging", "UI/UX design", "Testing"],
      ref: Ref2,
      active: content2,
      path: "#digital-social",
    },
    {
      title: " Advertising",
      para: "In this fast paced technology driven world, we believe in taking a step back in design as the way forward. We adopt a human approach to aesthetics and functional design that evokes an emotional response.",
      caption:
        "Our design expertise extends to the following services we offer",
      footer:
        "We bring design to life through animation and motion graphics that can be leveraged for various applications such as training, marketing communications etc",
      contents: ["Brand Identity", "Packaging", "UI/UX design"],
      ref: Ref3,
      active: content3,
      path: "#advertising",
    },
    {
      title: "Films & Production",
      para: "In this fast paced technology driven world, we believe in taking a step back in design as the way forward. We adopt a human approach to aesthetics and functional design that evokes an emotional response.",
      caption:
        "Our design expertise extends to the following services we offer",
      footer:
        "We bring design to life through animation and motion graphics that can be leveraged for various applications such as training, marketing communications etc",
      contents: ["Brand Identity", "Packaging", "UI/UX design", "Dummy"],
      ref: Ref4,
      active: content4,
      path: "#films-production",
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
              <div
                style={{
                  display: service.active ? "block" : "none",
                  marginBottom: "30rem",
                }}
              >
                {props?.service && (
                  <>
                    <p className="Paraservices">{service.para}</p>
                    <p className="Captionservices">{service.caption}</p>
                  </>
                )}
                <ul
                  className="text-left ul-list"
                  style={{
                    fontSize: "2rem",
                  }}
                >
                  {service.contents.map((val) => (
                    <li>{val}</li>
                  ))}
                </ul>
                {props?.service && (
                  <p className="Footerservices">{service.footer}</p>
                )}
              </div>
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
          {/* <img
            alt=""
            className="img-fluid"
            src={
              content1
                ? content2
                  ? content3
                    ? content4
                      ? "../images/film_white.gif"
                      : "../images/advertising_white.gif"
                      : "../images/digital_white.gif"
                    : "../images/design_white.gif"
                : ""
            }
          /> */}
          {props.isDarkMode ? (
            content1 ? (
              content2 ? (
                content3 ? (
                  content4 ? (
                    <FilmDark />
                  ) : (
                    <AdvertiseDark />
                  )
                ) : (
                  <DigitalSocialDark />
                )
              ) : (
                <DesignDark />
              )
            ) : (
              ""
            )
          ) : content1 ? (
            content2 ? (
              content3 ? (
                content4 ? (
                  <Film />
                ) : (
                  <Advertise />
                )
              ) : (
                <DigitalSocial />
              )
            ) : (
              <Design />
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

// desgin
{
  /* <lottie-player src="https://lottie.host/26b33a30-09be-4730-b2f9-dba267d3d8df/jMM7Ouv9Io.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></lottie-player> */
}
// digital and social

{
  /* <lottie-player src="https://lottie.host/db5a654d-2414-4e58-a186-99349751129c/NvBXhoRM8b.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></lottie-player> */
}

// adve

{
  /* <lottie-player src="https://lottie.host/7f43933e-42e5-4c1a-86e6-8c4b8e3f916f/JcSP2lyaSl.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></lottie-player> */
}

// filim

{
  /* <lottie-player src="https://lottie.host/99712c59-6faf-4f57-b99f-a677ef072863/sK8I4xgucN.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></lottie-player> */
}

// white

{
  /* <lottie-player
  src="https://lottie.host/9f01ebd8-e4d8-472c-bcb8-20d01840475b/Q9myD1u5hJ.json"
  background="transparent"
  speed="1"
  style={{ width: "100%", height: "100%" }}
  loop
  autoplay
></lottie-player>; */
}

// digital

{
  /* <lottie-player
  src="https://lottie.host/bc307ead-2453-494b-bc41-4243b49d769b/7NB4rMlcqM.json"
  background="transparent"
  speed="1"
  style="width: 300px; height: 300px;"
  loop
  autoplay
></lottie-player>; */
}

// ad

{
  /* <lottie-player
  src="https://lottie.host/fcc3d30b-350a-41a0-8d93-525364b4991f/or8pRzUNA9.json"
  background="transparent"
  speed="1"
  style="width: 300px; height: 300px;"
  loop
  autoplay
></lottie-player>; */
}

// filim

{
  /* <lottie-player
  src="https://lottie.host/ff671dcc-cfd8-49e8-bcc7-f177b83de89a/UPos21u6F6.json"
  background="transparent"
  speed="1"
  style="width: 300px; height: 300px;"
  loop
  autoplay
></lottie-player>; */
}
