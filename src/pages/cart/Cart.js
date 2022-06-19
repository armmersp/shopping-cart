import React, { useState, useEffect } from "react";
import "./Cart.css";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ContinueShopping from "../../components/ContinueShopping/ContinueShoppingButton";
import ClearCartButton from "../../components/ClearCartButton/ClearCartButton";
import GoToPayment from "../../components/GoToPaymentButton/GoToPayment";
import EditIcon from "../../images/icon/edit.svg";
import RemoveIcon from "../../images/icon/remove.svg";

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
      <div className="cart-container">
        <div className="cart-topic">ตะกร้าสินค้า</div>
        <div className="cart-summary-container">
          <div>
            <table className="cart-table">
              <tr className="cart-table-header">
                <th>สินค้า</th>
                <th>ราคา</th>
                <th>จำนวน</th>
                <th>ยอดรวม</th>
                <th></th>
              </tr>
              {cart.map((item) => (
                <tr className="cart-table-body">
                  <td>
                    <div className="cart-detail">
                      <img src={item.img} alt="" />
                      <div>{item.title}</div>
                    </div>
                  </td>
                  <td>
                    <div className="cart-price-table">
                      THB{item.price.toFixed(2)}
                    </div>
                  </td>
                  <td>
                    <div className="cart-input-button">
                      <button onClick={() => handleChange(item, 1)}>+</button>
                      <button>{item.amount}</button>
                      <button onClick={() => handleChange(item, -1)}>-</button>
                    </div>
                  </td>
                  <td>
                    <div className="cart-total-price-table">
                      THB{item.price.toFixed(2)}
                    </div>
                  </td>
                  <td>
                    <div className="cart-action-table">
                      <img
                        src={RemoveIcon}
                        onClick={() => handleRemove(item.id)}
                      ></img>
                      <img
                        src={EditIcon}
                        onClick={() => handleRemove(item.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </table>
            <div className="cart-button">
              <ContinueShopping />
              <div className="cart-button-space"></div>
              <ClearCartButton />
            </div>
          </div>
          <div className="cart-summary-card">
            <div className="cart-summary-topic">สรุปคำสั่งซื้อ</div>
            <div className="cart-summary-flex">
              <div className="cart-summary-text">ยอดรวม</div>
              <div className="cart-summary-text">THB{price.toFixed(2)}</div>
            </div>
            <div className="cart-summary-flex">
              <div className="cart-summary-text">ค่าส่ง</div>
              <div className="cart-summary-text">THB1.00</div>
            </div>
            <div className="cart-summary-border-line"></div>
            <div className="cart-summary-flex">
              <div className="cart-summary-text">ยอดสุทธิ</div>
              <div className="cart-summary-text">{(price + 1).toFixed(2)}</div>
            </div>
            <GoToPayment />
          </div>
        </div>
      </div>
      {/* <div className="showbackground">
        <div className="fs-32 bold">ตะกร้าสินค้า</div>
        <div className="flex">
          <div className="cart_box">
            สินค้า
            <div className="flex spacebetween bold">
              <div>ราคา</div>
              <div>จำนวน</div>
              <div>ยอดรวม</div>
            </div>
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
              <span>TOTAL: {item.price}</span>
              <CancelOutlinedIcon onClick={() => handleRemove(item.id)} /> */}
      {/* <button onClick={() => handleRemove(item.id)}>Remove</button> */}
      {/* </div>
          </div>
        ))}

        <div className="flex margin-top-24">
          <div className="continue-shopping-button">ซื้อสินค้าต่อไป</div>
          <div className="clear-cart-button">ล้างตะกร้าสินค้า</div>
        </div>
        <div className="order-summary-card">
          <div className="fs-32 bold">สรุปคำสั่งซื้อ</div>
          <div className="flex space-between">
            <div className="bold">ยอดรวม</div>
            <div className="bold">THB{price}</div>
          </div>
          <div className="flex space-between">
            <div className="bold margin-top-16">ค่าส่ง</div>
            <div className="bold margin-top-16">THB1.00</div>
          </div>
          <div className="bold flex space-between">
            <div className="space-between margin-top-48">ยอดสุทธิ</div>
            <div className="space-between margin-top-48">THB - {price + 1}</div>
          </div>
          <div className="payment-button margin-top-16 bold margin-top-48">
            ไปชำระเงิน
          </div>
        </div> */}
      {/* </div> */}
    </>
  );
};

export default Cart;
