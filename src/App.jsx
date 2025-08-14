import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./HomePage";
import ShoppingCartPage from "./ShoppingCartPage";
import CheckoutPage from "./CheckoutPage";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import menuData from "./assets/menuData";
import Footer from "./components/Footer";
import MenuPage from "./MenuPage";
import MenuItemPage from "./MenuItemPage";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider >
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
    </CartProvider>
  );
}

export default App;
