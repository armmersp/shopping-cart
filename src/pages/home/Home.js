import React from "react";
import "./Home.css";
import BestSeller from "../../data/bestSellerProducts";
import RecommendSeller from "../../data/recommendProducts";
import List from "../../components/List/List";
import Carousel from "../../components/Carousel/Carousel";

function Home({ handleAddToCart }) {
  return (
    <>
      <div className="homepage-space">
        <Carousel className="background-cover" />
        <div className="home-content-space"></div>
        <List
          title="สินค้าขายดี"
          productList={BestSeller}
          handleAddToCart={handleAddToCart}
        />
        <List
          title="สินค้าแนะนำ"
          productList={RecommendSeller}
          handleAddToCart={handleAddToCart}
        />
      </div>
    </>
  );
}

export default Home;
