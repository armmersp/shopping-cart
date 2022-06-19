import React, { useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import Cards from "../Card/Card";
import "./List.css";
import { Navigation, Pagination } from "swiper";

const List = ({ title, productList, handleAddToCart }) => {
  return (
    <div className="list-container">
      <div className="topic-wrapper">
        <div className="topic-text">{title}</div>
        <div className="sub-topic-text">ดูสินค้าขายดีทั้งหมด</div>
      </div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        slidesPerView={5}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="list-wrapper"
      >
        {productList.map((item) => (
          <SwiperSlide>
            <Cards
              key={item.id}
              item={item}
              handleAddToCart={handleAddToCart}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default List;
