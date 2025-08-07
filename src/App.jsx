import { useState } from "react";
// import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";
import ShoppingCartPage from "./ShoppingCartPage";
import ProductListingPage from "./ProductListingPage";
import CheckoutPage from "./CheckoutPage";
import LoginPage from "./LoginPage";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
