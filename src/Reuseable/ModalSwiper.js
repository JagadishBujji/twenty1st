import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function ModalSwiper({ images }) {
  const [swiperRef, setSwiperRef] = useState(null);

  // let appendNumber = 4;
  // let prependNumber = 1;

  // const prepend2 = () => {
  //   swiperRef.prependSlide([
  //     '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
  //     '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
  //   ]);
  // };

  // const prepend = () => {
  //   swiperRef.prependSlide(
  //     '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
  //   );
  // };

  // const append = () => {
  //   swiperRef.appendSlide(
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
  //   );
  // };

  // const append2 = () => {
  //   swiperRef.appendSlide([
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
  //   ]);
  // };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        loop={true}
        centeredSlides={true}
        spaceBetween={60}
        pagination={{
          type: "fraction",
        }}
        autoplay={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {images.map((img) => {
          return (
            <SwiperSlide className="slideswiper">
              <img src={img} alt={img} className="imagecaro" />
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide className="slideswiper">
          <img src={props.imagecaro1} alt="" className="imagecaro" />
        </SwiperSlide>
        <SwiperSlide className="slideswiper">
          <img src={props.imagecaro2} alt="" className="imagecaro" />
        </SwiperSlide>
        <SwiperSlide className="slideswiper">
          <img src={props.imagecaro3} alt="" className="imagecaro" />
        </SwiperSlide>
        <SwiperSlide className="slideswiper">
          <img src={props.imagecaro4} alt="" className="imagecaro" />
        </SwiperSlide>
        <SwiperSlide className="slideswiper">
          <img src={props.imagecaro5} alt="" className="imagecaro" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
