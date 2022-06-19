import React from "react";
import "./Navbar.css";
import {
  Search as SearchIcon,
  ShoppingCartOutlined as CartIcon,
  AccountCircleRounded as AccountIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const Navbar = ({ size }) => {
  let navigate = useNavigate();

  const routeToHome = () => {
    let path = "/";
    navigate(path);
  };

  const routeToCart = () => {
    let path = "/cart";
    navigate(path);
  };
  return (
    <>
      <div className="navbar">
        <div className="container-navbar-left">
          <text
            className="shop-name no-select"
            variant="h"
            noWrap
            component="a"
            href="/"
            onClick={routeToHome}
          >
            Book
          </text>
          <text className="default-topic no-select">สินค้าใหม่</text>
          <text className="default-topic no-select">สินค้าขายดี</text>
          <text className="default-topic no-select">สินค้าลดราคา</text>
          <text className="default-topic no-select">สินค้าแนะนำ</text>
        </div>

        <div className="container-navbar-right">
          <div>
            <SearchIcon className="navbar-right-icon" />
          </div>
          <div className="cart" onClick={routeToCart}>
            <CartIcon className="navbar-right-icon" />
            <span className="cart-size">{size}</span>
          </div>
          <div>
            <AccountIcon className="navbar-right-icon" />
          </div>
        </div>
      </div>
      <div className="top-space" />
    </>
  );
};

export default Navbar;
