import React, { useState } from 'react'
import { useCart } from './CartContext'
import { useNavigate } from 'react-router-dom'
import { useDeliveryMethod } from './DeliveryMethodContext';
import './styles/ShoppingCartPage.dark.css'

function ShoppingCartPage({ onNavigate, onProductClick }) {
  const { cartItems, removeFromCart, updateQuantity, emptyCart, calculateCosts } = useCart();
  const navigate = useNavigate();
  const [promo, setPromo] = useState('');
  const [discount, setDiscount] = useState(0);

  // Remove item handler
  const handleRemove = (idx) => {
    if (window.confirm('Remove this item from cart?')) {
      const item = cartItems[idx];
      removeFromCart(item.id || item.shortDesc);
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
    updateQuantity(item.id || item.shortDesc, newQty);
  };

  // Navigate to product listing
  const handleProductListing = () => {
    if (onNavigate) onNavigate('products');
  };

  // Navigate to product page
  const handleProductClick = (idx) => {
    if (onProductClick) onProductClick(idx);
  };

  // Checkout handler 
  const handleCheckout = () => {
    navigate('/checkout');
  };

  // Calculate totals
  console.log(cartItems)
  const {subtotal, tax, shipping, total} = calculateCosts();
  const discountAmount = subtotal * discount;

  const numberOfItems = cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0);

  const DeliveryPickupSelector = () => {
    const { method, setMethod } = useDeliveryMethod();
    return (
      <div style={{ margin: '2rem 0' }}>
        <div style={{ fontWeight: 'bold', marginBottom: '1rem', letterSpacing: '1px' }}>METHOD</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
            <input
              type="radio"
              name="deliveryMethod"
              value="delivery"
              checked={method === 'delivery'}
              onChange={() => setMethod('delivery')}
              style={{ accentColor: '#222', width: 18, height: 18 }}
            />
            Delivery
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
            <input
              type="radio"
              name="deliveryMethod"
              value="pickup"
              checked={method === 'pickup'}
              onChange={() => setMethod('pickup')}
              style={{ accentColor: '#222', width: 18, height: 18 }}
            />
            Pickup
          </label>
        </div>
      </div>
    );
  };

  return (
    <div className="shopping-cart-page-wrapper">
      <div className="shopping-cart-main">
        <div className="shopping-cart-page-dark">
          <div className="shopping-cart-header">Shopping cart</div>
          <div className="shopping-cart-desc2">You have {numberOfItems} item{numberOfItems !== 1 ? 's' : ''} in your cart</div>
          <ul className="shopping-cart-list">
            {cartItems.map((item, idx) => (
              <li key={idx} className="shopping-cart-item">
                <img
                  src={item.img || '/default-product.jpg'}
                  alt={item.shortDesc || item.name}
                  className="shopping-cart-img"
                  onClick={() => handleProductClick(idx)}
                  title="Go to Product Page"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    backgroundColor: '#667eea',
                    borderRadius: '8px',
                    display: 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    marginRight: '18px'
                  }}
                >
                  🍽️
                </div>
                <div className="shopping-cart-details" onClick={() => handleProductClick(idx)}>
                  <div className="shopping-cart-title">{item.shortDesc || item.name}</div>
                  <div className="shopping-cart-desc">{item.longDesc || item.description}</div>
                </div>
                <div className="shopping-cart-qty">
                  <button onClick={e => { e.stopPropagation(); handleQuantityChange(idx, -1); }} className="shopping-cart-qty-btn">-</button>
                  <span style={{ margin: '0 8px', fontWeight: 600, fontSize: '1.1rem' }}>{item.quantity}</span>
                  <button onClick={e => { e.stopPropagation(); handleQuantityChange(idx, 1); }} className="shopping-cart-qty-btn">+</button>
                </div>
                <div className="shopping-cart-price">${item.price.toFixed(2)}</div>
                <button onClick={() => handleRemove(idx)} className="shopping-cart-remove" title="Remove"><span role="img" aria-label="delete">🗑️</span></button>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-details-panel">
          <div className="summary-row"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
          <div className="summary-row"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
          <div className="summary-row"><span>Tax</span><span>${tax.toFixed(2)}</span></div>
          <div className="summary-row total"><span>Total</span><span>${total.toFixed(2)}</span></div>
          <div className='flex flex-row justify-between items-center'>
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
            <button className="checkout-btn" onClick={handleEmptyCart}>
              Empty Cart
            </button>
          </div>
        </div>
      </div>
      <DeliveryPickupSelector />
    </div>
  );
}

export default ShoppingCartPage