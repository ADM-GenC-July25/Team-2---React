import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./HomePage";
import ShoppingCartPage from "./ShoppingCartPage";
import CheckoutPage from "./CheckoutPage";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import Footer from "./components/Footer";
import MenuItemPage from "./MenuItemPage";
import MenuPage from "./MenuPage";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<MenuPage />} />
          <Route path="/menuitem/:id" element={<MenuItemPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
