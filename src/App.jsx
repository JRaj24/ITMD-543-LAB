import Navbar from "./navbar.jsx";
import Home from "./Home.jsx";
import Hero from "./Hero.jsx";
import Quiz from "./Quiz.jsx";
import SignUp from "./SignUp.jsx";
import SignIn from "./SignIn.jsx";
import Details from "./Details.jsx";
import Cart from "./Cart.jsx";
import Products from "./Products.jsx";
import BrowseProducts from "./browse_products.jsx";
import Favorites from "./Favorites.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextProvider from "./shopContext.jsx";
import React, { useState } from "react";

export default function App() {
  const [favorites, setFavorites] = useState([]); // State for managing favorites

  return (
    <div className="bg-white min-h-screen">
      <ContextProvider>
        <Router>
          <Navbar />
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />
            <Route path="/hero" element={<Hero />} />

            {/* Product Related Routes */}
            <Route path="/products" element={<Products />} />
            <Route
              path="/browse-products"
              element={
                <BrowseProducts
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              }
            />
            <Route
              path="/:Productid"
              element={
                <Details
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              }
            />

            {/* User Authentication Routes */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />

            {/* Cart */}
            <Route path="/cart" element={<Cart />} />

            {/* Favorites */}
            <Route
              path="/favorites"
              element={<Favorites favorites={favorites} />}
            />

            {/* Other */}
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}
