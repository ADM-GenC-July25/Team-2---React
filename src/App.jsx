import { useState } from "react";
// import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./HomePage";
import MenuItemPage from "./ProductPage";
import ShoppingCartPage from "./ShoppingCartPage";
import MenuPage from "./ProductListingPage";
import CheckoutPage from "./CheckoutPage";
import LoginPage from "./LoginPage";
import menuData from "./assets/menuData";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-green-900 to-purple-900">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage menuData={menuData}/>} />
          <Route path="/products" element={<MenuPage />} />
          <Route path="/menuitem/:id" element={<MenuItemPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
