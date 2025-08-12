import React from 'react'
import { useCart } from './CartContext'
import { useNavigate } from 'react-router-dom'
import './ShoppingCartPage.dark.css'

function ShoppingCartPage({ onNavigate, onProductClick }) {
  const { cartItems, removeFromCart, updateQuantity, emptyCart } = useCart();
  const navigate = useNavigate();
  const [promo, setPromo] = React.useState('');
  const [discount, setDiscount] = React.useState(0);

  // Remove item handler
  const handleRemove = (idx) => {
    if (window.confirm('Remove this item from cart?')) {
      removeFromCart(cartItems[idx].shortDesc);
    }
  };

  // Empty cart
  const handleEmptyCart = () => {
    if (window.confirm('Are you sure you want to empty your cart?')) {
      emptyCart();
    }
  };

  // Quantity handlers
  const handleQuantityChange = (idx, delta) => {
    const item = cartItems[idx];
    const newQty = Math.max(1, item.quantity + delta);
    updateQuantity(item.shortDesc, newQty);
  };

  // Navigate to product listing
  const handleProductListing = () => {
    if (onNavigate) onNavigate('products');
  };

  // Navigate to product page
  const handleProductClick = (idx) => {
    if (onProductClick) onProductClick(idx);
  };

  // Promo code handler 
  const handleApplyPromo = () => {
    if (promo === 'SAVE10') {
      setDiscount(0.1); 
      alert('Promo code applied!');
    } else {
      setDiscount(0);
      alert('Invalid promo code.');
    }
  };

  // Checkout handler 
  const handleCheckout = () => {
    navigate('/checkout');
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.07; 
  const shipping = subtotal > 0 ? 5 : 0; 
  const discountAmount = subtotal * discount;
  const total = subtotal + tax + shipping - discountAmount;

  return (
    <div className="shopping-cart-page-wrapper">
      <div className="shopping-cart-main">
      <div className="shopping-cart-page-dark">
        <div className="shopping-cart-header">Shopping cart</div>
        <div className="shopping-cart-desc2">You have {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart</div>
        <ul className="shopping-cart-list">
          {cartItems.map((item, idx) => (
            <li key={idx} className="shopping-cart-item">
              <img 
                src={item.img} 
                alt={item.shortDesc} 
                className="shopping-cart-img"
                onClick={() => handleProductClick(idx)}
                title="Go to Product Page"
              />
              <div className="shopping-cart-details" onClick={() => handleProductClick(idx)}>
                <div className="shopping-cart-title">{item.shortDesc}</div>
                <div className="shopping-cart-desc">{item.longDesc}</div>
              </div>
              <div className="shopping-cart-qty">
                <button onClick={e => { e.stopPropagation(); handleQuantityChange(idx, -1); }} className="shopping-cart-qty-btn">-</button>
                <span style={{ margin: '0 8px', fontWeight: 600, fontSize: '1.1rem' }}>{item.quantity}</span>
                <button onClick={e => { e.stopPropagation(); handleQuantityChange(idx, 1); }} className="shopping-cart-qty-btn">+</button>
              </div>
              <div className="shopping-cart-price">${(item.price * item.quantity).toFixed(0)}</div>
              <button onClick={() => handleRemove(idx)} className="shopping-cart-remove" title="Remove"><span role="img" aria-label="delete">🗑️</span></button>
            </li>
          ))}
        </ul>
      </div>
      <div className="card-details-panel">
        <div style={{ fontWeight: 700, fontSize: '1.25rem', color: '#fff', textAlign: 'center', width: '100%', marginBottom: 18 }}>Card Details</div>
        <div style={{ marginBottom: 16, fontWeight: 600, color: '#b2becd' }}>Card type</div>
        <div className="card-type-row">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Name on card</label>
          <input type="text" placeholder="Name" />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Card Number</label>
          <input type="text" placeholder="1111 2222 3333 4444" />
        </div>
        <div className="card-fields-row">
          <div>
            <label>Expiration date</label>
            <input type="text" placeholder="mm/yy" />
          </div>
          <div>
            <label>CVV</label>
            <input type="text" placeholder="123" />
          </div>
        </div>
        <div style={{ borderTop: '1.5px solid #23272a', margin: '18px 0 12px 0' }}></div>
        <div className="summary-row"><span>Subtotal</span><span>${subtotal.toFixed(0)}</span></div>
        <div className="summary-row"><span>Shipping</span><span>${shipping.toFixed(0)}</span></div>
        <div className="summary-row total"><span>Total (Tax incl.)</span><span>${total.toFixed(0)}</span></div>
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
    </div>
  );
}

export default ShoppingCartPage