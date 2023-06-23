import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ClientSliderDM = () => {
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
            <img className="" src="../images/logo/arte_white.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/diya_white.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/cirkle_white.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/organic_white.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/sf_white.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/gsquare_white.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/casagrand_white.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/accupayd_white.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/testocean_white.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/wink_white.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/jallikattu_white.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/rkr_white.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/wfs_white.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/murugan_white.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/kvp_white.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/maamis_white.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/artisan_white.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/crown_white.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/zus_white.png" />
          </div>
          <div class="item">
            <img className="" src="../images/logo/jarvisden_white.png" />
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default ClientSliderDM;
