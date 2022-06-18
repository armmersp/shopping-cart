import React from "react";
import "../styles/navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import CartIcon from "@mui/icons-material/ShoppingCartOutlined";
import Avatar from "@mui/material/Avatar";
const navbar = ({ setShow, size }) => {
  return (
    <>
      <nav>
        <div className="nav_box">
          <div className="nav-left">
            <span className="my_shop" onClick={() => setShow(true)}>
              Book
            </span>
            <span>สินค้าใหม่</span>
            <span>สินค้าขายดี</span>
            <span>สินค้าลดราคา</span>
            <span>สินค้าแนะนำ</span>
          </div>
          <div className="nav-right">
            <div></div>
            <span>
              <SearchIcon />{" "}
            </span>
            <div className="cart" onClick={() => setShow(false)}>
              <span>
                <CartIcon />{" "}
              </span>
              <span>{size}</span>
              <span>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />{" "}
              </span>
            </div>
          </div>
        </div>
      </nav>
      <div className="nav-space"></div>
    </>
  );
};

export default navbar;
