import React from "react";
import "./AddToCartButton.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
function AddToCartButton() {
  return (
    <div className={"add-to-cart-style no-select"}>
      <div className="center-button">
        <ShoppingCartOutlinedIcon className="shopping-cart-icon" />
        <text className="add-to-cart-text">Add to cart</text>
      </div>
    </div>
  );
}

export default AddToCartButton;
