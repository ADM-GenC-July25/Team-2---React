import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import './styles/CheckoutPage.css';

// Import new components
import ShippingForm from './components/checkout/ShippingForm';
import BillingForm from './components/checkout/BillingForm';
import PaymentForm from './components/checkout/PaymentForm';
import OrderSummary from './components/checkout/OrderSummary';
import CheckoutSuccess from './components/checkout/CheckoutSuccess';
import EmptyCart from './components/checkout/EmptyCart';

// Import custom hook
import useCheckoutForm from './hooks/useCheckoutForm';

function CheckoutPage() {
  const { cartItems, emptyCart } = useCart();
  const navigate = useNavigate();
  
  // Use custom hook for form management
  const { formData, errors, handleInputChange, handleCardNumberChange, validateForm } = useCheckoutForm();
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0);
  const tax = subtotal * 0.07;
  const shipping = subtotal > 50 ? 0 : 8.99; // Free shipping over $50
  const total = subtotal + tax + shipping;

  // Handle order submission
  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      alert('Your cart is empty');
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

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-main">
          <h1>Checkout</h1>
          
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
          </form>
        </div>

        <OrderSummary 
          cartItems={cartItems}
          subtotal={subtotal}
          tax={tax}
          shipping={shipping}
          total={total}
          isProcessing={isProcessing}
          onSubmitOrder={handleSubmitOrder}
        />
      </div>
    </div>
  );
}

export default CheckoutPage;