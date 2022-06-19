import React, { useState, useEffect } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
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

  const handleClearCart = () => setCart([]);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  let navigate = useNavigate();
  const routeToPayment = () => {
    let path = `/payment`;
    navigate(path);
  };

  const routeToHome = () => {
    let path = `/`;
    navigate(path);
  };

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
              <div className onClick={routeToHome}>
                <ContinueShopping />
              </div>
              <div className="cart-button-space"></div>
              <div onClick={handleClearCart}>
                <ClearCartButton />
              </div>
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
            <div onClick={routeToPayment}>
              <GoToPayment />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
