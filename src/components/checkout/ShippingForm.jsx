import React from 'react';
import './ShippingForm.css';

function ShippingForm({ formData, errors, onInputChange }) {
  return (
    <section className="checkout-section">
      <h2>Shipping Information</h2>
      <div className="form-row">
        <div className="form-group">
          <label>First Name *</label>
          <input
            type="text"
            name="shippingFirstName"
            value={formData.shippingFirstName}
            onChange={onInputChange}
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
            onChange={onInputChange}
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
            onChange={onInputChange}
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
            onChange={onInputChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label>Address *</label>
        <input
          type="text"
          name="shippingAddress"
          value={formData.shippingAddress}
          onChange={onInputChange}
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
            onChange={onInputChange}
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
            onChange={onInputChange}
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
            onChange={onInputChange}
            className={errors.shippingZip ? 'error' : ''}
          />
          {errors.shippingZip && <span className="error-text">{errors.shippingZip}</span>}
        </div>
      </div>
    </section>
  );
}

export default ShippingForm; 