import React, { useState } from "react";
import list from "../recommendProducts";
import Cards from "../card";
import "../styles/amazon.css";

const RecommendSeller = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default RecommendSeller;
