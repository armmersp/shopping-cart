import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Demonslayer from "../../images/Demonslayer.jpg";
import HarryPotter from "../../images/Harrypotter.jpg";
import Jujutsu from "../../images/Jujutsu.jpg";
import Strangerthings from "../../images/Strangerthings.jpg";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

function Carousel() {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, EffectFade, Navigation, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={HarryPotter} className="carousel-image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Demonslayer} className="carousel-image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Jujutsu} className="carousel-image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Strangerthings} className="carousel-image" />
      </SwiperSlide>
    </Swiper>
  );
}
export default Carousel;
