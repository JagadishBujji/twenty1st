import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ClientSliderDM = () => {
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
            <div style={{ backgroundImage: "url(../images/zus_white.png)" }}></div>
          </div>
          <div class="item">
           <div style={{ backgroundImage: "url(../images/wink_white.png)" }}></div>
          </div>
          <div class="item">
            <div style={{ backgroundImage: "url(../images/wfs_white.png)" }}></div>
          </div>
          <div class="item">
            <div style={{ backgroundImage: "url(../images/testocean_white.png)" }}></div>
          </div>
          <div class="item">
            <div style={{ backgroundImage: "url(../images/sf_white.png)" }}></div>
          </div>
          <div class="item">
            <div style={{ backgroundImage: "url(../images/rkr_white.png)" }}></div>
          </div>
          <div class="item">
            <div style={{ backgroundImage: "url(../images/organic_white.png)" }}></div>
          </div>
          <div class="item">
            <div style={{ backgroundImage: "url(../images/murugan_white.png)" }}></div>
          </div>
          <div class="item">
            <div style={{ backgroundImage: "url(../images/maamis_white.png)" }}></div>
          </div>
          <div class="item">
            <div style={{ backgroundImage: "url(../images/kvp2_white.png)" }}></div>
          </div>
          <div class="item">
            <div style={{ backgroundImage: "url(../images/jarvis_white.png)" }}></div>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default ClientSliderDM;
