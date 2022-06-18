import React, { useState } from "react";
import BestSeller from "./bestSellerProducts";
import RecommendSeller from "../recommendProducts";
import Cards from "../card";
import "../styles/amazon.css";

const Amazon = ({ handleClick }) => {
  return (
    <>
      <section>
        {BestSeller.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />
        ))}
      </section>
      <section>
        {RecommendSeller.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />
        ))}
      </section>
    </>
  );
};

export default Amazon;
