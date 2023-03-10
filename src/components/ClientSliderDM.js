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
          <div class="item ">
            <img src="../images/zus_white.png" alt="" className="clientlogo" />
          </div>
          <div class="item">
            <img src="../images/wink_white.png" alt="" className="clientlogo" />
          </div>
          <div class="item">
            <img src="../images/wfs_white.png" alt="" className="clientlogo" />
          </div>
          <div class="item">
            <img
              src="../images/test ocean_white.png"
              alt=""
              className="clientlogo"
            />
          </div>
          <div class="item">
            <img src="../images/sf_white.png" alt="" className="clientlogo" />
          </div>
          <div class="item">
            <img src="../images/rkr_white.png" alt="" className="clientlogo" />
          </div>
          <div class="item">
            <img
              src="../images/organic_white.png"
              alt=""
              className="clientlogo"
            />
          </div>
          <div class="item">
            <img
              src="../images/murugan_white.png"
              alt=""
              className="clientlogo"
            />
          </div>
          <div class="item">
            <img
              src="../images/maamis_white.png"
              alt=""
              className="clientlogo"
            />
          </div>
          <div class="item">
            <img src="../images/kvp_white.png" alt="" className="clientlogo" />
          </div>
          <div class="item">
            <img
              src="../images/jarvis_white.png"
              alt=""
              className="clientlogo"
            />
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default ClientSliderDM;
