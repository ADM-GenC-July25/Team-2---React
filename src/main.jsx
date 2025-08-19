import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from "./CartContext";

const entryPoint = document.getElementById("root");
createRoot(entryPoint).render(
    <CartProvider>
        <App/>
    </CartProvider>);
