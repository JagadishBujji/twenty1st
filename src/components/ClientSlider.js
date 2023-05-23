import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ClientSlider = () => {
  return (
    <>
      <div className="silder-client">
        <OwlCarousel
          className="owl-theme container "
          // items={5}
          dots={false}
          loop
          margin={10}
          nav
          autoPlay={true}
          responsive={{
            200: {
              items: 2,
            },
            600: {
              items: 3,
            },
            900: {
              items: 5,
            },
          }}
        >
          <div class="item">
            <div style={{ backgroundImage: "url(../images/zus.png)" }}></div>
          </div>
          <div class="item">
            <div style={{ backgroundImage: "url(../images/wink.png)" }}></div>
          </div>
          <div class="item">
            <div style={{ backgroundImage: "url(../images/wfs.png)" }}></div>
          </div>
          <div class="item">
            <div
              style={{ backgroundImage: "url(../images/testocean.png)" }}
            ></div>
          </div>
          <div class="item">
            <div style={{ backgroundImage: "url(../images/sf.png)" }}></div>
          </div>
          <div class="item">
            <div style={{ backgroundImage: "url(../images/rkr.png)" }}></div>
          </div>
          <div class="item">
            <div
              style={{ backgroundImage: "url(../images/organic.png)" }}
            ></div>
          </div>
          <div class="item">
            <div
              style={{ backgroundImage: "url(../images/murugan.png)" }}
            ></div>
          </div>
          <div class="item">
            <div style={{ backgroundImage: "url(../images/maamis.png)" }}></div>
          </div>
          <div class="item">
            <div style={{ backgroundImage: "url(../images/kvp2.png)" }}></div>
          </div>
          <div class="item">
            <div style={{ backgroundImage: "url(../images/jarvis.png)" }}></div>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default ClientSlider;
