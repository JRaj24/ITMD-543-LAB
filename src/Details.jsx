import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Data from "./data";
import { ShopContext } from "./shopContext";

export default function Details({ favorites, setFavorites }) {
  const { addToCart, cartItems } = useContext(ShopContext);

  const params = useParams();
  const productId = Number(params.Productid);
  const product = Data.find((product) => product.id === productId);

  const [wishlist, setWishlist] = useState(
    favorites.some((fav) => fav.id === productId) // Check if already in favorites
  );

  const favToggle = () => {
    if (wishlist) {
      // Remove from favorites
      setFavorites(favorites.filter((fav) => fav.id !== productId));
    } else {
      // Add to favorites
      setFavorites([...favorites, product]);
    }
    setWishlist((prevState) => !prevState);
  };

  const itemAmount = cartItems[productId] || 0;

  const navigate = useNavigate();

  const cart = () => {
    addToCart(productId);
    navigate(`/cart?productId=${productId}`);
  };

  return (
    <div>
      <h1 className="text-center text-white font-bold text-5xl"></h1>
      {product ? (
        <div>
          <div className="flex flex-col justify-start items-center p-5 rounded-3xl md:flex-row md:mt-5">
            <div className="flex flex-col justify-center items-center p-5 pt-5 pb-5 m-5">
              <img
                src={product.img}
                alt={product.name}
                className="rounded-3xl max-w-xs md:max-w-sm md:mx-10"
              />
            </div>

            <div className="flex flex-col justify-start ml-10 -mt-5 items-center md:max-w-xl md:items-start">
              <h2 className="text-[#f2c48b] mt-8 text-4xl font-bold text-center md:text-left md:mt-0">
                {product.name}
              </h2>
              <p className="text-[#f2c48b] mt-5 text-2xl font-bold">
                ₹{product.price}
              </p>
              <h3 className="text-black mt-10 font-medium text-xl text-center md:text-left">
                {product.description}
              </h3>

              {/* Action Buttons */}
              <div className="flex flex-row gap-4 mt-12 justify-center items-center">
                <button
                  className="bg-[#d0bea7] hover:bg-white hover:text-[#d0bea7] border border-[#d0bea7] duration-300 w-72 uppercase font-semibold px-4 py-4 rounded-lg"
                  id="cart"
                  onClick={cart}
                >
                  Add to cart {itemAmount > 0 && <>({itemAmount})</>}
                </button>

                <button
                  className="bg-[#d0bea7] flex items-center justify-center hover:bg-white hover:text-[#d0bea7] border border-[#d0bea7] duration-300 w-72 uppercase font-semibold px-4 py-4 rounded-lg"
                  onClick={favToggle}
                >
                  {wishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                  <img
                    src={
                      wishlist ? "/images/onclick.png" : "/images/wishlist.png"
                    }
                    alt="wishlist"
                    className="mx-2 w-6 h-6"
                    id="wishlist"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-2xl font-semibold text-gray-500">
          Product not found
        </p>
      )}
    </div>
  );
}
