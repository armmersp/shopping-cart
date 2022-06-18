import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <>
      <div className="showbackground">
        <div className="fs-32 bold">ตะกร้าสินค้า</div>
        <div className="flex">
          <div className="width-50">50%</div>
          <div className="flex spacebetween">
            <div>ราคา</div>
            <div>จำนวน</div>
            <div>ยอดรวม</div>
          </div>
        </div>
        {cart.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.img} alt="" />
              <p>{item.title}</p>
            </div>

            <div>
              <span>THB{item.price}</span>
              <button onClick={() => handleChange(item, 1)}>+</button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item, -1)}>-</button>
            </div>
            <div>
              <CancelOutlinedIcon onClick={() => handleRemove(item.id)} />
              <span>TOTAL: {item.price}</span>
              {/* <button onClick={() => handleRemove(item.id)}>Remove</button> */}
            </div>
          </div>
        ))}

        <div className="flex margin-top-24">
          <div className="continue-shopping-button">ซื้อสินค้าต่อไป</div>
          <div className="clear-cart-button">ล้างตะกร้าสินค้า</div>
        </div>
        <div className="order-summary-card">
          <div className="fs-32 bold">สรุปคำสั่งซื้อ</div>
          <div className="flex">
            <div className="bold">ยอดรวม</div>
            <div className="bold">THB{price}</div>
          </div>
          <div className="flex">
            <div className="bold">ค่าส่ง</div>
            <div className="bold">THB1.00</div>
          </div>
          <div className="bold flex">
            <div className="space-between">ยอดสุทธิ</div>
            <div className="space-between">THB - {price + 1}</div>
          </div>
          <div className="payment-button margin-top-16 bold">ไปชำระเงิน</div>
        </div>
      </div>
    </>
  );
};

export default Cart;
