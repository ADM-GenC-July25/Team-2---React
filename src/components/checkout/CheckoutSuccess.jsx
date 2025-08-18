import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckoutSuccess.css';

function CheckoutSuccess() {
  const navigate = useNavigate();

  return (
    <div className="checkout-page">
      <div className="checkout-success">
        <div className="success-icon">✓</div>
        <h1>Order Confirmed!</h1>
        <p>Thank you for your purchase. Your order has been successfully placed.</p>
        <div className="success-actions">
          <button onClick={() => navigate('/')} className="btn-primary">
            Continue Shopping
          </button>
          <button onClick={() => navigate('/products')} className="btn-secondary">
            Browse Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSuccess; 