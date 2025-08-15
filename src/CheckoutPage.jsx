import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import './styles/CheckoutPage.css';

function CheckoutPage() {
  const { cartItems, emptyCart, calculateCosts } = useCart();
  const navigate = useNavigate();
  
  // Form states
  const [formData, setFormData] = useState({
    // Shipping Address
    shippingFirstName: '',
    shippingLastName: '',
    shippingEmail: '',
    shippingPhone: '',
    shippingAddress: '',
    shippingCity: '',
    shippingState: '',
    shippingZip: '',
    shippingCountry: 'United States',
    
    // Billing Address
    billingFirstName: '',
    billingLastName: '',
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingZip: '',
    billingCountry: 'United States',
    sameAsShipping: true,
    
    // Payment
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    cardType: 'visa'
  });

  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  // // Calculate totals
  // const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  // const tax = subtotal * 0.07;
  // const shipping = subtotal > 50 ? 0 : 8.99; // Free shipping over $50
  // const total = subtotal + tax + shipping;

  const {subtotal, tax, shipping, total} = calculateCosts();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Required shipping fields
    const requiredShipping = [
      'shippingFirstName', 'shippingLastName', 'shippingEmail', 
      'shippingAddress', 'shippingCity', 'shippingState', 'shippingZip'
    ];
    
    requiredShipping.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = 'This field is required';
      }
    });

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.shippingEmail && !emailRegex.test(formData.shippingEmail)) {
      newErrors.shippingEmail = 'Please enter a valid email address';
    }

    // Billing address validation (if different from shipping)
    if (!formData.sameAsShipping) {
      const requiredBilling = [
        'billingFirstName', 'billingLastName', 'billingAddress', 
        'billingCity', 'billingState', 'billingZip'
      ];
      
      requiredBilling.forEach(field => {
        if (!formData[field].trim()) {
          newErrors[field] = 'This field is required';
        }
      });
    }

    // Payment validation
    if (!formData.cardNumber.replace(/\s/g, '')) {
      newErrors.cardNumber = 'Card number is required';
    } else if (formData.cardNumber.replace(/\s/g, '').length < 13) {
      newErrors.cardNumber = 'Invalid card number';
    }

    if (!formData.cardName.trim()) {
      newErrors.cardName = 'Cardholder name is required';
    }

    if (!formData.expiryDate || !formData.expiryDate.match(/^\d{2}\/\d{2}$/)) {
      newErrors.expiryDate = 'Enter date as MM/YY';
    }

    if (!formData.cvv || formData.cvv.length < 3) {
      newErrors.cvv = 'Invalid CVV';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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

  // Format card number for display
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  // Handle card number formatting
  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setFormData(prev => ({ ...prev, cardNumber: formatted }));
  };

  if (orderComplete) {
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

  if (cartItems.length === 0) {
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

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-main">
          <h1>Checkout</h1>
          
          <form onSubmit={handleSubmitOrder}>
            {/* Shipping Information */}
            <section className="checkout-section">
              <h2>Shipping Information</h2>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name *</label>
                  <input
                    type="text"
                    name="shippingFirstName"
                    value={formData.shippingFirstName}
                    onChange={handleInputChange}
                    className={errors.shippingFirstName ? 'error' : ''}
                  />
                  {errors.shippingFirstName && <span className="error-text">{errors.shippingFirstName}</span>}
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input
                    type="text"
                    name="shippingLastName"
                    value={formData.shippingLastName}
                    onChange={handleInputChange}
                    className={errors.shippingLastName ? 'error' : ''}
                  />
                  {errors.shippingLastName && <span className="error-text">{errors.shippingLastName}</span>}
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="shippingEmail"
                    value={formData.shippingEmail}
                    onChange={handleInputChange}
                    className={errors.shippingEmail ? 'error' : ''}
                  />
                  {errors.shippingEmail && <span className="error-text">{errors.shippingEmail}</span>}
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="shippingPhone"
                    value={formData.shippingPhone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Address *</label>
                <input
                  type="text"
                  name="shippingAddress"
                  value={formData.shippingAddress}
                  onChange={handleInputChange}
                  className={errors.shippingAddress ? 'error' : ''}
                />
                {errors.shippingAddress && <span className="error-text">{errors.shippingAddress}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>City *</label>
                  <input
                    type="text"
                    name="shippingCity"
                    value={formData.shippingCity}
                    onChange={handleInputChange}
                    className={errors.shippingCity ? 'error' : ''}
                  />
                  {errors.shippingCity && <span className="error-text">{errors.shippingCity}</span>}
                </div>
                <div className="form-group">
                  <label>State *</label>
                  <input
                    type="text"
                    name="shippingState"
                    value={formData.shippingState}
                    onChange={handleInputChange}
                    className={errors.shippingState ? 'error' : ''}
                  />
                  {errors.shippingState && <span className="error-text">{errors.shippingState}</span>}
                </div>
                <div className="form-group">
                  <label>ZIP Code *</label>
                  <input
                    type="text"
                    name="shippingZip"
                    value={formData.shippingZip}
                    onChange={handleInputChange}
                    className={errors.shippingZip ? 'error' : ''}
                  />
                  {errors.shippingZip && <span className="error-text">{errors.shippingZip}</span>}
                </div>
              </div>
            </section>

            {/* Billing Information */}
            <section className="checkout-section">
              <h2>Billing Information</h2>
              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="sameAsShipping"
                    checked={formData.sameAsShipping}
                    onChange={handleInputChange}
                  />
                  Same as shipping address
                </label>
              </div>

              {!formData.sameAsShipping && (
                <>
                  <div className="form-row">
                    <div className="form-group">
                      <label>First Name *</label>
                      <input
                        type="text"
                        name="billingFirstName"
                        value={formData.billingFirstName}
                        onChange={handleInputChange}
                        className={errors.billingFirstName ? 'error' : ''}
                      />
                      {errors.billingFirstName && <span className="error-text">{errors.billingFirstName}</span>}
                    </div>
                    <div className="form-group">
                      <label>Last Name *</label>
                      <input
                        type="text"
                        name="billingLastName"
                        value={formData.billingLastName}
                        onChange={handleInputChange}
                        className={errors.billingLastName ? 'error' : ''}
                      />
                      {errors.billingLastName && <span className="error-text">{errors.billingLastName}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Address *</label>
                    <input
                      type="text"
                      name="billingAddress"
                      value={formData.billingAddress}
                      onChange={handleInputChange}
                      className={errors.billingAddress ? 'error' : ''}
                    />
                    {errors.billingAddress && <span className="error-text">{errors.billingAddress}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>City *</label>
                      <input
                        type="text"
                        name="billingCity"
                        value={formData.billingCity}
                        onChange={handleInputChange}
                        className={errors.billingCity ? 'error' : ''}
                      />
                      {errors.billingCity && <span className="error-text">{errors.billingCity}</span>}
                    </div>
                    <div className="form-group">
                      <label>State *</label>
                      <input
                        type="text"
                        name="billingState"
                        value={formData.billingState}
                        onChange={handleInputChange}
                        className={errors.billingState ? 'error' : ''}
                      />
                      {errors.billingState && <span className="error-text">{errors.billingState}</span>}
                    </div>
                    <div className="form-group">
                      <label>ZIP Code *</label>
                      <input
                        type="text"
                        name="billingZip"
                        value={formData.billingZip}
                        onChange={handleInputChange}
                        className={errors.billingZip ? 'error' : ''}
                      />
                      {errors.billingZip && <span className="error-text">{errors.billingZip}</span>}
                    </div>
                  </div>
                </>
              )}
            </section>

            {/* Payment Information */}
            <section className="checkout-section">
              <h2>Payment Information</h2>
              
              <div className="card-types">
                <label className={`card-type ${formData.cardType === 'visa' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="cardType"
                    value="visa"
                    checked={formData.cardType === 'visa'}
                    onChange={handleInputChange}
                  />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
                </label>
                <label className={`card-type ${formData.cardType === 'mastercard' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="cardType"
                    value="mastercard"
                    checked={formData.cardType === 'mastercard'}
                    onChange={handleInputChange}
                  />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" />
                </label>
              </div>

              <div className="form-group">
                <label>Cardholder Name *</label>
                <input
                  type="text"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  className={errors.cardName ? 'error' : ''}
                />
                {errors.cardName && <span className="error-text">{errors.cardName}</span>}
              </div>

              <div className="form-group">
                <label>Card Number *</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="1111 2222 3333 4444"
                  maxLength="19"
                  className={errors.cardNumber ? 'error' : ''}
                />
                {errors.cardNumber && <span className="error-text">{errors.cardNumber}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Expiry Date *</label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    maxLength="5"
                    className={errors.expiryDate ? 'error' : ''}
                  />
                  {errors.expiryDate && <span className="error-text">{errors.expiryDate}</span>}
                </div>
                <div className="form-group">
                  <label>CVV *</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    maxLength="4"
                    className={errors.cvv ? 'error' : ''}
                  />
                  {errors.cvv && <span className="error-text">{errors.cvv}</span>}
                </div>
              </div>
            </section>
          </form>
        </div>

        {/* Order Summary */}
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
                <div className="item-price">${item.price.toFixed(2)}</div>
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
            onClick={handleSubmitOrder}
            disabled={isProcessing}
            className={`place-order-btn ${isProcessing ? 'processing' : ''}`}
          >
            {isProcessing ? 'Processing...' : `Place Order - $${total.toFixed(2)}`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;