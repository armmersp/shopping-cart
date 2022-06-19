import { React, useEffect, useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Payment from "./pages/payment/Payment";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Navbar from "./components/Navbar/Navbar";

// import recommendProducts from "./data/recommendProducts";

const App = () => {
  const [cart, setCart] = useState([]); //default is array
  const [payment, setPayment] = useState([]);

  const handleAddToCart = (item) => {
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
      <BrowserRouter>
        <Navbar size={cart.length} />
        <Routes>
          <Route
            path="/cart"
            element={
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            }
          />
          <Route
            path="/product/:id"
            element={<ProductDetail handleAddToCart={handleAddToCart} />}
          />
          <Route path="/payment" element={<Payment cart={cart} />} />
          <Route
            path="/"
            element={<Home cart={cart} handleAddToCart={handleAddToCart} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
