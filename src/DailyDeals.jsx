import React from "react";
import { Link } from "react-router-dom";
import data from "./data";

export default function DailyDeals() {
  // Filter products with dailyDeal set to true
  const dailyDeals = data.filter((product) => product.dailyDeal);

  return (
    <div className="bg-[#f8f4f4] p-5">
      <h2 className="text-4xl font-bold text-center text-[#c49358] mb-8">
        Daily Deals
      </h2>
      {dailyDeals.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {dailyDeals.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/${product.id}`}>
                <div className="border border-[#c49358] p-5 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-2xl font-semibold text-[#c49358]">
                    {product.name}
                  </h3>
                  <p className="text-lg text-gray-500 line-through">
                    ₹{product.price}
                  </p>
                  <p className="text-xl font-bold text-red-500">
                    ₹{(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}{" "}
                    <span className="text-sm text-gray-500">
                      ({product.discountPercentage}% Off)
                    </span>
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No deals available today.</p>
      )}
    </div>
  );
}
