import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ShopContext } from "./shopContext";
import data from "./data";

export default function Cart() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("productId");

  const selectedProduct = data.find(
    (product) => product.id === Number(productId)
  );

  const { cartItems } = useContext(ShopContext);
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let total = 0;

    const updatedCart = data.map((product) => {
      const quantity = cartItems[product.id] || 0;
      const price = parseFloat(product.price);
      const itemTotal = price * quantity;

      if (quantity > 0) {
        total += itemTotal;

        return (
          <div key={product.id} className="cart-item rounded-2xl">
            <img
              src={product.img}
              alt={product.name}
              className="rounded-2xl m-2"
            />
            <p className="text-[#f2c48b] font-semibold m-2">{product.name}</p>
            <p className="m-2">Quantity: {quantity}</p>
            <p className="m-2 mb-5">Price: ₹{itemTotal}</p>
          </div>
        );
      }

      return null;
    });

    setCart(updatedCart);
    setSubtotal(total);
  }, [cartItems]);

  return (
    <div className="flex flex-col m-5 p-5 px-6 md:flex-row md:justify-between md:items-start md:-mt-12">
      <div>
        <h1 className="text-[#f2c48b] text-3xl font-bold">Bag</h1>
        { cart.length > 0 ? (
          <div className="m-6 max-w-xs  text-black">{cart}</div>
        ) : (
          <h3 className="text-black text-xl mt-5">Oops! Your bag is empty...</h3>
        )}
      </div>

      <div className="flex flex-col mt-16 justify-center w-96 text-left p-10 md:mt-6">
        <h1 className="text-[#f2c48b] text-3xl font-bold">Summary</h1>
        <div className="flex justify-between mt-5 pb-5 border-b border-[#f2c48b]">
          <h3 className="text-black mt-8 text-xl">SubTotal</h3>
          <h3 className="text-black mt-8 text-xl">₹{subtotal.toFixed(2)}</h3>
        </div>

        <div className="flex justify-between pb-5 border-b border-[#f2c48b]">
          <h3 className="text-black mt-8 text-xl">
            Delivery and Handling <br /> charges
          </h3>
          <h3 className="text-black mt-8 text-xl">₹00.0</h3>
        </div>

        <div className="flex justify-between pb-5 border-b border-[#f2c48b]">
          <h3 className="text-black mt-8 text-xl">Total</h3>
          <h3 className="text-black mt-8 text-xl">₹{subtotal.toFixed(2)}</h3>
        </div>
        <button className="bg-[#d0bea7] hover:border hover:border-[#d0bea7] hover:bg-black hover:text-[#c49358] duration-500 w-40 mx-auto mt-6 uppercase font-semibold px-2 py-4 rounded-lg md:mx-auto">
          checkout
        </button>
      </div>
    </div>
  );
}
