import { useState } from "react";

import HomeHeader from "../headers/HomeHeader";
import HomeMain from "../mains/HomeMain";
import { ShopContext } from "../../ShopContext";

const Homepage = ({ setCart, cart }) => {
  const addToCart = (product) => {
    setCartItems(...cartItems, product);
  };

  return (
    <>
      <HomeHeader setCart={setCart} cart={cart}></HomeHeader>
      <HomeMain setCart={setCart} cart={cart}></HomeMain>
    </>
  );
};

export default Homepage;
