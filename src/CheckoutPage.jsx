import { useState } from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "./styles/CheckoutPage.css";

import OrderSummary from "./components/checkout/OrderSummary";
import CheckoutSuccess from "./components/checkout/CheckoutSuccess";
import EmptyCart from "./components/checkout/EmptyCart";

// Import custom hook
import useCheckoutForm from "./hooks/useCheckoutForm";
import PersonalInfoForm from "./components/checkout/PersonalInfoForm";

function CheckoutPage() {
  const { cartItems, emptyCart, calculateCosts } = useCart();
  const navigate = useNavigate();

  // Use custom hook for form management
  const {
    formData,
    errors,
    handleInputChange,
    handleCardNumberChange,
    validateForm,
  } = useCheckoutForm();

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  // // Calculate totals
  // const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  // const tax = subtotal * 0.07;
  // const shipping = subtotal > 50 ? 0 : 8.99; // Free shipping over $50
  // const total = subtotal + tax + shipping;

  const { subtotal, tax, total } = calculateCosts();

  // Handle order submission
  const handleSubmitOrder = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
      emptyCart();
    }, 3000);
  };

  // Render different states
  if (orderComplete) {
    return <CheckoutSuccess />;
  }

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  const orderTime = 20;

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-main">
          <h1>Checkout - Pick Up Order</h1>

          {/* 
          <form onSubmit={handleSubmitOrder}>
            <ShippingForm 
              formData={formData}
              errors={errors}
              onInputChange={handleInputChange}
            />
            
            <BillingForm 
              formData={formData}
              errors={errors}
              onInputChange={handleInputChange}
            />
            
            <PaymentForm 
              formData={formData}
              errors={errors}
              onInputChange={handleInputChange}
              onCardNumberChange={handleCardNumberChange}
            />
          </form>*/}
          <p>Please review your order below.</p>
          <PersonalInfoForm
            formData={formData}
            errors={errors}
            onInputChange={handleInputChange}
          />

          <p>
            Your order will be available for pickup in approximately {orderTime}{" "}
            minutes.
          </p>
          <p>Please pickup your order from: Asteroid Belt, Milky Way Galaxy</p>
        </div>

        <OrderSummary
          cartItems={cartItems}
          subtotal={subtotal}
          tax={tax}
          total={total}
          isProcessing={isProcessing}
          onSubmitOrder={handleSubmitOrder}
        />
      </div>
    </div>
  );
}

export default CheckoutPage;
