import React, { useState } from 'react'

// Placeholder cart items with quantity
const initialCartItems = [
  {
    img: 'https://via.placeholder.com/80',
    price: 19.99,
    shortDesc: 'Cool T-shirt',
    longDesc: 'A very cool T-shirt for everyday wear.',
    reviews: ['Great shirt!', 'Very comfortable.'],
    quantity: 1,
  },
  {
    img: 'https://via.placeholder.com/80',
    price: 29.99,
    shortDesc: 'Stylish Hat',
    longDesc: 'A stylish hat for sunny days.',
    reviews: ['Looks awesome!'],
    quantity: 2,
  },
];

function ShoppingCartPage({ onNavigate, onProductClick }) {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promo, setPromo] = useState('');
  const [discount, setDiscount] = useState(0);

  // Quantity handlers
  const handleQuantityChange = (idx, delta) => {
    setCartItems(items => items.map((item, i) =>
      i === idx ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  // Remove item handler
  const handleRemove = (idx) => {
    if (window.confirm('Remove this item from cart?')) {
      setCartItems(items => items.filter((_, i) => i !== idx));
    }
  };

  // Empty cart
  const handleEmptyCart = () => {
    if (window.confirm('Are you sure you want to empty your cart?')) {
      setCartItems([]);
    }
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
    alert('Proceeding to checkout!');
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.07; 
  const shipping = subtotal > 0 ? 5 : 0; 
  const discountAmount = subtotal * discount;
  const total = subtotal + tax + shipping - discountAmount;

  return (
    <div className="shopping-cart-page" style={{ maxWidth: 700, margin: '0 auto', padding: 24 }}>
      <h2>Shopping Cart</h2>
      <button onClick={handleProductListing} style={{ marginBottom: 16, background: '#2980b9', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 16px', cursor: 'pointer' }}>Go to Product Listing</button>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <button onClick={handleEmptyCart} style={{ marginBottom: 16, background: '#e67e22', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 16px', cursor: 'pointer' }}>Empty Cart</button>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cartItems.map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 16, borderBottom: '1px solid #eee', paddingBottom: 12 }}>
                <img 
                  src={item.img} 
                  alt={item.shortDesc} 
                  style={{ width: 80, height: 80, objectFit: 'cover', marginRight: 16, cursor: 'pointer' }} 
                  onClick={() => handleProductClick(idx)}
                  title="Go to Product Page"
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 'bold', cursor: 'pointer' }} onClick={() => handleProductClick(idx)}>{item.shortDesc}</div>
                  <div style={{ color: '#888' }}>${item.price.toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</div>
                  <div style={{ fontSize: 13, color: '#555', margin: '4px 0' }}>{item.longDesc}</div>
                  {item.reviews && item.reviews.length > 0 && (
                    <div style={{ fontSize: 12, color: '#888' }}>
                      <b>Reviews:</b> {item.reviews.join(' | ')}
                    </div>
                  )}
                  <div style={{ marginTop: 8 }}>
                    <button onClick={() => handleQuantityChange(idx, -1)} style={{ marginRight: 4, padding: '2px 8px' }}>-</button>
                    <span style={{ margin: '0 8px' }}>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(idx, 1)} style={{ marginLeft: 4, padding: '2px 8px' }}>+</button>
                  </div>
                </div>
                <button onClick={() => handleRemove(idx)} style={{ marginLeft: 8, background: '#e74c3c', color: '#fff', border: 'none', borderRadius: 4, padding: '6px 12px', cursor: 'pointer' }}>Remove</button>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 24, marginBottom: 16 }}>
            <input 
              type="text" 
              placeholder="Promo code" 
              value={promo} 
              onChange={e => setPromo(e.target.value)}
              style={{ padding: '6px 12px', borderRadius: 4, border: '1px solid #ccc', marginRight: 8 }}
            />
            <button onClick={handleApplyPromo} style={{ background: '#16a085', color: '#fff', border: 'none', borderRadius: 4, padding: '6px 16px', cursor: 'pointer' }}>Apply</button>
          </div>
          <div style={{ textAlign: 'right', fontSize: 16 }}>
            <div>Subtotal: ${subtotal.toFixed(2)}</div>
            <div>Discount: -${discountAmount.toFixed(2)}</div>
            <div>Estimated Tax: ${tax.toFixed(2)}</div>
            <div>Estimated Shipping: ${shipping.toFixed(2)}</div>
            <div style={{ fontWeight: 'bold', fontSize: 20, marginTop: 8 }}>Total: ${total.toFixed(2)}</div>
          </div>
          <div style={{ textAlign: 'right', marginTop: 16 }}>
            <button onClick={handleCheckout} style={{ background: '#27ae60', color: '#fff', border: 'none', borderRadius: 4, padding: '10px 24px', fontSize: 16, cursor: 'pointer' }}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCartPage