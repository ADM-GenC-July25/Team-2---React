// import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";
import ShoppingCartPage from "./ShoppingCartPage";
import ProductListingPage from "./ProductListingPage";
import CheckoutPage from "./CheckoutPage";
import LoginPage from "./RegistrationAndLogin/LoginPage";
import RegistrationPage from "./RegistrationAndLogin/RegistrationPage";
import ValidateEmailPage from "./RegistrationAndLogin/ValidateEmailPage";
import ForgotPasswordPage from "./RegistrationAndLogin/ForgotPasswordPage";

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
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/validate-email" element={<ValidateEmailPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
