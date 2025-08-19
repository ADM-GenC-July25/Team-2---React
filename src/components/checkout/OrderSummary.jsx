import React from 'react';
import './OrderSummary.css';

function OrderSummary({ cartItems, subtotal, tax, shipping, total, isProcessing, onSubmitOrder }) {
  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      
      <div className="order-items">
        {cartItems.map((item, index) => (
          <div key={index} className="order-item">
            <img src={item.img} alt={item.shortDesc} />
            <div className="item-details">
              <div className="item-name">{item.shortDesc}</div>
              <div className="item-quantity">Qty: {item.quantity}</div>
            </div>
            <div className="item-price">${(item.price).toFixed(2)}</div>
          </div>
        ))}
      </div>

      <div className="order-totals">
        <div className="total-row">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="total-row">
          <span>Shipping</span>
          <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="total-row">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="total-row total">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button
        type="submit"
        onClick={onSubmitOrder}
        disabled={isProcessing}
        className={`place-order-btn ${isProcessing ? 'processing' : ''}`}
      >
        {isProcessing ? 'Processing...' : `Place Order - $${total.toFixed(2)}`}
      </button>
    </div>
  );
}

export default OrderSummary; 