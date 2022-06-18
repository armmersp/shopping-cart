import React, { useState } from "react";
import RecommendSeller from "../recommendProducts";
import Cards from "../card";
import "../styles/amazon.css";

const Amazon2 = ({ handleClick }) => {
  return (
    <>
      <section>
        {RecommendSeller.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />
        ))}
      </section>
    </>
  );
};

export default Amazon2;
