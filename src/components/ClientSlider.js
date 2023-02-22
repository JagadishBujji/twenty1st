import React from "react";

import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientSlider = () => {
  const settings = {
    // dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <>
      <div className="silder-client">
        <Slider {...settings} arrows className="container client-slider">
          <div>
            <img src="../images/zus.png" alt="" className="clientlogo" />
          </div>
          <div>
            <img src="../images/wink.png" alt="" className="clientlogo" />
          </div>
          <div>
            <img src="../images/wfs.png" alt="" className="clientlogo" />
          </div>
          <div>
            <img src="../images/test ocean.png" alt="" className="clientlogo" />
          </div>
          <div>
            <img src="../images/sf.png" alt="" className="clientlogo" />
          </div>
          <div>
            <img src="../images/rkr.png" alt="" className="clientlogo" />
          </div>
          <div>
            <img src="../images/organic.png" alt="" className="clientlogo" />
          </div>
          <div>
            <img src="../images/murugan.png" alt="" className="clientlogo" />
          </div>
          <div>
            <img src="../images/maamis.png" alt="" className="clientlogo" />
          </div>
          <div>
            <img src="../images/kvp2.png" alt="" className="clientlogo" />
          </div>
          <div>
            <img src="../images/jarvis.png" alt="" className="clientlogo" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ClientSlider;
