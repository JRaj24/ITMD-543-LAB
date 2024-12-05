import Serums from "./serums";
import data from "./data.js";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f2c48b] min-h-[600px] py-10" id="Product">
      {/* Delivery, Payment, and Return Section */}
      <div className="flex flex-col justify-center items-center mt-5 md:flex-row">
        <div className="flex flex-col justify-center items-center md:flex-row md:mt-16 border-b border-t pt-5 pb-3 border-black">
          <div className="flex m-3 mx-10 items-center mt-16 md:mt-0">
            <img src="/images/delivery.png" alt="Delivery" />
            <h2 className="text-2xl font-medium mx-5 min-w-full">Fast Delivery</h2>
          </div>
          <div className="flex m-3 mx-10 items-center">
            <img src="/images/payment.png" alt="Secure Payments" />
            <h2 className="text-2xl font-medium mx-5">Secure Payments</h2>
          </div>
          <div className="flex m-3 mx-10 items-center">
            <img src="/images/return.png" alt="Return Policy" />
            <h2 className="text-2xl font-medium mx-5">Return Policy</h2>
          </div>
        </div>
      </div>

      {/* Headings */}
      <h1 className="text-4xl mt-16 md:text-7xl text-center uppercase text-black md:max-w-xl mx-auto">
        Choose the skincare that
      </h1>
      <h1 className="text-6xl md:text-6xl font-bold text-center uppercase">
        suits you the best
      </h1>

      {/* Quiz Section */}
      <div className="flex justify-center items-center mt-10">
        <h3 className="p-2 mx-3 md:mx-0 text-lg font-medium">
          Don't know your skin type?
        </h3>
        <button
          onClick={() => navigate("/quiz")}
          className="bg-black text-white text-center w-32 font-semibold px-1 py-3 rounded-full md:mx-10 cursor-pointer"
        >
          Take a Quiz!
        </button>
      </div>

      {/* Browse Products Button */}
      <div className="flex justify-center items-center mt-10 mb-10">
        <button
          onClick={() => navigate("/browse-products")}
          className="bg-black text-white text-center w-[500px] font-bold px-12 py-6 rounded-full md:mx-10 cursor-pointer text-xl transform transition duration-300 hover:scale-105 hover:bg-[#333]"
        >
          Browse Products
        </button>
      </div>
    </div>
  );
}
