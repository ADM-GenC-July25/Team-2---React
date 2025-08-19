import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EmptyCart.css';

function EmptyCart() {
  const navigate = useNavigate();

  return (
    <div className="checkout-page">
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Add some items to your cart to proceed with checkout.</p>
        <button onClick={() => navigate('/products')} className="btn-primary">
          Browse Products
        </button>
      </div>
    </div>
  );
}

export default EmptyCart; 