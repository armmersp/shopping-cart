import React from "react";
import bestSellerProducts from "../bestSellerProducts";
import Cards from "../card";
import "../styles/amazon.css";

const bestSellerList = ({ handleClick }) => {
  return (
    <section>
      {bestSellerProducts.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default bestSellerList;
