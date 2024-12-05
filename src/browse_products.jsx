import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "./data";

export default function BrowseProducts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [favorites, setFavorites] = useState([]); // State to manage favorites

  // Filter products based on search term and category
  const filteredProducts = data.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || product.category.toLowerCase() === filterCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  // Function to add product to favorites
  const addToFavorites = (product) => {
    if (!favorites.find((fav) => fav.id === product.id)) {
      setFavorites([...favorites, product]);
    } else {
      alert("This product is already in your favorites!");
    }
  };

  return (
    <div className="bg-[#fffff] p-5">
      <h1 className="text-6xl font-bold text-center uppercase text-[#c49358] mb-8 pb-5">
        Browse Products
      </h1>

      {/* Deal of the Day Banner */}
<div className="w-full overflow-hidden mb-5">
  <span className="inline-block pl-[100%] animate-scrollDeal text-5xl font-semibold text-red-600 whitespace-nowrap">
    DEALS OF THE DAY:BOGO!!DEALS OF THE DAY:BOGO!!DEALS OF THE DAY!!DEALS OF THE DAY!!DEALS OF THE DAY!!DEALS OF THE DAY!!DEALS OF THE DAY!!DEALS OF THE DAY!!DEALS OF THE DAY!!DEALS OF THE DAY!!DEALS OF THE DAY!!
  </span>
</div>


      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row justify-center items-center mb-10 gap-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search for products..."
          className="p-3 w-full md:w-1/3 border-2 border-[#c49358] rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* Filter Dropdown */}
        <select
          className="p-3 w-full md:w-1/3 border-2 border-[#c49358] rounded-lg"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="skincare">Skincare</option>
          <option value="body care">Body Care</option>
          <option value="hair care">Hair Care</option>
        </select>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 m-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            // Calculate the discounted price if it's a daily deal
            const discountedPrice = product.dailyDeal
              ? (product.price * (1 - product.discountPercentage / 100)).toFixed(2)
              : null;

            return (
              <div
                key={product.id}
                className="product-card flex flex-col justify-between border p-6 rounded-lg shadow-lg h-96"
              >
                <Link to={`/${product.id}`} className="flex flex-col h-full">
                  <div className="flex-grow">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="rounded-lg mb-3 object-cover w-full h-56"
                    />
                    <h3 className="text-xl font-bold truncate">{product.name}</h3>
                    <div>
                      {/* Show original price if on sale */}
                      {discountedPrice ? (
                        <p className="text-lg text-gray-500 line-through">₹{product.price}</p>
                      ) : (
                        <p className="text-lg">₹{product.price}</p>
                      )}
                      {/* Show discounted price if available */}
                      {discountedPrice && (
                        <p className="text-xl text-red-600">
                          ₹{discountedPrice}{" "}
                          <span className="text-sm text-gray-500">
                            ({product.discountPercentage}% Off)
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <p className="text-center col-span-full">No products found.</p>
        )}
      </div>
    </div>
  );
}
