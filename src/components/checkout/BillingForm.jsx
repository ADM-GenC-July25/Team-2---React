import React from 'react';
import './BillingForm.css';

function BillingForm({ formData, errors, onInputChange }) {
  return (
    <section className="checkout-section">
      <h2>Billing Information</h2>
      <div className="form-group checkbox-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="sameAsShipping"
            checked={formData.sameAsShipping}
            onChange={onInputChange}
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
                onChange={onInputChange}
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
                onChange={onInputChange}
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
              onChange={onInputChange}
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
                onChange={onInputChange}
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
                onChange={onInputChange}
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
                onChange={onInputChange}
                className={errors.billingZip ? 'error' : ''}
              />
              {errors.billingZip && <span className="error-text">{errors.billingZip}</span>}
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default BillingForm; 