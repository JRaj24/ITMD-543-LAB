import React from "react";
import { Link } from "react-router-dom";

export default function Favorites({ favorites }) {
  return (
    <div className="favorites-page p-5">
      <h1 className="text-6xl font-bold text-center uppercase text-[#c49358] mb-8">Your Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {favorites.length > 0 ? (
          favorites.map((product) => (
            <div key={product.id} className="favorite-card">
              <Link to={`/${product.id}`}>
                <div className="p-5 bg-white shadow-md rounded-lg">
                  <img src={product.img} alt={product.name} className="w-full h-auto mb-3 rounded-lg" />
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-lg font-medium text-gray-600">${product.price}</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No favorite products yet. Start adding some!</p>
        )}
      </div>
    </div>
  );
}
