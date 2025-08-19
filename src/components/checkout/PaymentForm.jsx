import React from 'react';
import './PaymentForm.css';

function PaymentForm({ formData, errors, onInputChange, onCardNumberChange }) {
  return (
    <section className="checkout-section">
      <h2>Payment Information</h2>
      
      <div className="card-types">
        <label className={`card-type ${formData.cardType === 'visa' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="cardType"
            value="visa"
            checked={formData.cardType === 'visa'}
            onChange={onInputChange}
          />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
        </label>
        <label className={`card-type ${formData.cardType === 'mastercard' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="cardType"
            value="mastercard"
            checked={formData.cardType === 'mastercard'}
            onChange={onInputChange}
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
          onChange={onInputChange}
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
          onChange={onCardNumberChange}
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
            onChange={onInputChange}
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
            onChange={onInputChange}
            placeholder="123"
            maxLength="4"
            className={errors.cvv ? 'error' : ''}
          />
          {errors.cvv && <span className="error-text">{errors.cvv}</span>}
        </div>
      </div>
    </section>
  );
}

export default PaymentForm; 