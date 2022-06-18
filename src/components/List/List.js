import React, { useState } from "react";
import RecommendSeller from "../../data/recommendProducts";
import Cards from "../Card/Card";
import "./List.css";

const List = ({ title, productList, handleAddToCart }) => {
  return (
    <div className="list-container">
      <div className="topic-wrapper">
        <div className="topic-text">{title}</div>
        <div className="sub-topic-text">ดูสินค้าขายดีทั้งหมด</div>
      </div>
      <div className="list-wrapper">
        {productList.map((item) => (
          <Cards key={item.id} item={item} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default List;
