import { React, useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import Amazon from "./components/amazon";

// import RecommendSeller from "./bestSellerProducts";
// import BestSeller from "./components/bestSellerList";
const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [payment, setPayment] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  useEffect(() => {
    console.log("Cart Change");
  }, [cart]);

  return (
    <>
      <Navbar setShow={setShow} size={cart.length} />
      <div className="homepage-space">
        <div className="background-cover" />
        <div className="top-space" />
        <div className="flex-space-between">
          <div className="topic-text">สินค้าขายดี</div>
          <div className="sub-topic-text">ดูสินค้าขายดีทั้งหมด</div>
        </div>
      </div>
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      {/* <Navbar setShow={setShow} size={cart.length} /> */}
      {/* <Amazon handleClick={handleClick} />
        <div className="flex-space-between">
          <div className="topic-text">สินค้าขายดี</div>
          <div className="sub-topic-text">ดูสินค้าขายดีทั้งหมด</div>
        </div>
        <RecommendSeller handleClick={handleClick} />
      </div> */}
    </>
  );
};

export default App;
