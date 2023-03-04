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
          <div class="item ">
            <img src="../images/zus.png" alt="" className="clientlogo" />
          </div>
          <div class="item">
            <img src="../images/wink.png" alt="" className="clientlogo" />
          </div>
          <div class="item">
            <img src="../images/wfs.png" alt="" className="clientlogo" />
          </div>
          <div class="item">
            <img src="../images/test ocean.png" alt="" className="clientlogo" />
          </div>
          <div class="item">
            <img src="../images/sf.png" alt="" className="clientlogo" />
          </div>
          <div class="item">
            <img src="../images/rkr.png" alt="" className="clientlogo" />
          </div>
          <div class="item">
            <img src="../images/organic.png" alt="" className="clientlogo" />
          </div>
          <div class="item">
            <img src="../images/murugan.png" alt="" className="clientlogo" />
          </div>
          <div class="item">
            <img src="../images/maamis.png" alt="" className="clientlogo" />
          </div>
          <div class="item">
            <img src="../images/kvp2.png" alt="" className="clientlogo" />
          </div>
          <div class="item">
            <img src="../images/jarvis.png" alt="" className="clientlogo" />
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default ClientSlider;
