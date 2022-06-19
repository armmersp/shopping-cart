import React from "react";
import "./Card.css";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircle";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Check from "../../images/icon/check.svg";
const Cards = ({ item, handleAddToCart }) => {
  const { id, title, img, discountPrice, price, ratingValue, reviewValue } =
    item;

  let navigate = useNavigate();
  const routeToProduct = () => {
    let path = `product/${id}`;
    navigate(path);
  };

  const handleClickButton = (e) => {
    e.stopPropagation();
    handleAddToCart(item);
  };

  return (
    <div className="product-card" onClick={routeToProduct}>
      <div className="green-color">
        <img src={Check} />
        มีสินค้า
      </div>
      <img src={item.img} className="product-item" />
      <div className="move-button-to-center" onClick={handleClickButton}>
        <div className="show-after-hover">
          <AddToCartButton />
        </div>
      </div>
      <div className="margin-top-product-card"></div>
      <div className="row-review">
        <Rating
          name="read-only"
          value={item.ratingValue}
          readOnly
          size="small"
        />
        <div className="review">Reviews({item.reviewValue})</div>
      </div>
      <div className="product-name">{item.title}</div>
      <div className="card-line-through-text">THB{item.price.toFixed(2)}</div>
      <div className="card-default-bold-price">
        THB{item.discountPrice.toFixed(2)}
      </div>
    </div>
    // <div className="cards">
    //   <div className="available-product-button">
    //     <CheckCircleIcon />
    //     มีสินค้า
    //   </div>
    //   <div className="image_box">
    //     <img src={img} alt="" className="center-picture " />
    //   </div>
    //   <div className="details margin-top-16"></div>
    //   <div className="move-button-to-center">
    //     <button
    //       className="show-after-hover add-to-cart-style "
    //      }
    //     >
    //       <div className="flex center-icon text-blue-color">
    //         <ShoppingCartOutlinedIcon />
    //         <div className="margin-top-12">Add to Cart</div>
    //       </div>
    //     </button>
    //   </div>
    //   <div className="flex">
    //     <Rating name="read-only" value={ratingValue} readOnly />
    //     <div name="read-only" value={ratingValue} readOnly />
    //     <p className="grey margin-left-32">Review ({reviewValue})</p>
    //   </div>
    //   <div className="bold">{title}</div>
    //   <div className="line-through grey margin-top-16">THB{price}</div>
    //   <div className="bold">THB{discountPrice}</div>
    // </div>
  );
};

export default Cards;
