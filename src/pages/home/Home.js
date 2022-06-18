import React from "react";
import "./Home.css";
import BestSeller from "../../data/bestSellerProducts";
import RecommendSeller from "../../data/recommendProducts";
import List from "../../components/List/List";

function Home({ handleAddToCart }) {
  return (
    <>
      <div className="homepage-space">
        <div className="background-cover" />
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
