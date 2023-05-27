import { Routes, Route } from "react-router-dom";

import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Checkout from "../pages/Checkout";
import ProductDetails from "../pages/ProductDetails";
import { Navigate } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="/Ecommerse/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  );
};

export default Routers;
