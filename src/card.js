import React from "react";
import Rating from "@mui/material/Rating";
// import AddToCartButton from "./components/AddToCartButton/AddToCartButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Cards = ({ item, handleClick }) => {
  const { id, title, img, discountPrice, price, ratingValue, reviewValue } =
    item;

  return (
    <div className="cards">
      <div className="available-product-button">
        <CheckCircleIcon />
        มีสินค้า
      </div>
      <div className="image_box">
        <img src={img} alt="" className="center-picture " />
      </div>
      <div className="details margin-top-16"></div>
      <div className="move-button-to-center">
        <button
          className="show-after-hover add-to-cart-style "
          onClick={() => handleClick(item)}
        >
          <div className="flex center-icon text-blue-color">
            <ShoppingCartOutlinedIcon />
            <div className="margin-top-12">Add to Cart</div>
          </div>
        </button>
      </div>
      <div className="flex">
        <Rating name="read-only" value={ratingValue} readOnly />
        <div name="read-only" value={ratingValue} readOnly />
        <p className="grey margin-left-32">Review ({reviewValue})</p>
      </div>
      <div className="bold">{title}</div>
      <div className="line-through grey margin-top-16">THB{price}</div>
      <div className="bold">THB{discountPrice}</div>

      {/* <AddToCartButton /> */}
    </div>
  );
};

export default Cards;
