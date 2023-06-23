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
          autoplay={true}
          autoplayTimeout={2000}
          autoplaySpeed={500}
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
            <img className="" src="../images/logo/arte.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/diya.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/cirkle.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/organic.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/sf.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/gsquare.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/casagrand.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/accupayd.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/testocean.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/wink.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/jallikattu.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/rkr.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/wfs.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/murugan.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/kvp.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/maamis.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/artisan.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/crown.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/zus.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/jarvisden.png" />
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default ClientSlider;
