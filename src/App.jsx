// import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./HomePage";
// import MenuItemPage from "./ProductPage";
import ShoppingCartPage from "./ShoppingCartPage";
// import MenuPage from "./ProductListingPage";
import CheckoutPage from "./CheckoutPage";

import LoginPage from "./RegistrationAndLogin/LoginPage";
import RegistrationPage from "./RegistrationAndLogin/RegistrationPage";
import menuData from "./assets/menuData";
import Footer from "./components/Footer";
import MenuPage from "./MenuPage";
import MenuItemPage from "./MenuItemPage";

function App() {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-green-900 to-purple-900">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage menuData={menuData} />} />
          <Route path="/products" element={<MenuPage />} />
          <Route path="/menuitem/:id" element={<MenuItemPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
