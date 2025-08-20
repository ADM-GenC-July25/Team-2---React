import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./CartContext.jsx";
import { LoginProvider } from "./components/LoginRegistration/LoginContext.jsx";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <LoginProvider>
      <App />
    </LoginProvider>
  </CartProvider>
);
