import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ClientSlider = () => {
  return (
    <>
      <div className="silder-client">
        <OwlCarousel
          className="owl-theme container"
          // items={5}
          dots={false}
          loop
          margin={10}
          nav={false}
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
            <img className="" src="../images/zus.png" />
            {/* <div style={{ backgroundImage: "url(../images/zus.png)" }}></div> */}
          </div>
          <div class="item">
            <img className="" src="../images/wink.png" />
            {/* <div style={{ backgroundImage: "url(../images/wink.png)" }}></div> */}
          </div>
          <div class="item">
            <img className="" src="../images/wfs.png" />
            {/* <div style={{ backgroundImage: "url(../images/wfs.png)" }}></div> */}
          </div>
          <div class="item">
            <img className="" src="../images/testocean.png" />
          </div>
          <div class="item">
            <img className="" src="../images/sf.png" />
          </div>
          <div class="item">
            <img className="" src="../images/rkr.png" />
          </div>
          <div class="item">
            <img className="" src="../images/organic.png" />
          </div>
          <div class="item">
            <img className="" src="../images/murugan.png" />
          </div>
          <div class="item">
            <img className="" src="../images/maamis.png" />
          </div>
          <div class="item">
            <img className="" src="../images/kvp2.png" />
          </div>
          <div class="item">
            <img className="" src="../images/jarvis.png" />
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default ClientSlider;
