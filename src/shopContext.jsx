import React, { createContext, useState } from "react";
import products from "./data";

export const ShopContext = createContext(null);

const defaultCart = () => {
  let cart = [{}];
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(defaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      return prev.map((item, index) => (index === itemId ? item + 1 : item));
    });
  };

  const removeCart = (itemId) => {
    setCartItems((prev) => {
      return prev.map((item, index) => (index === itemId ? item - 1 : item));
    });
  };

  const contextValue = { cartItems, addToCart, removeCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ContextProvider;
