import "./ShippingForm.css";

function PersonalInfoForm({ formData, errors, onInputChange }) {
  return (
    <section className="checkout-section">
      <h2>Personal Information</h2>
      <div className="form-row">
        <div className="form-group">
          <label>First Name *</label>
          <input
            type="text"
            name="shippingFirstName"
            value={formData.shippingFirstName}
            onChange={onInputChange}
            className={errors.shippingFirstName ? "error" : ""}
          />
          {errors.shippingFirstName && (
            <span className="error-text">{errors.shippingFirstName}</span>
          )}
        </div>
        <div className="form-group">
          <label>Last Name *</label>
          <input
            type="text"
            name="shippingLastName"
            value={formData.shippingLastName}
            onChange={onInputChange}
            className={errors.shippingLastName ? "error" : ""}
          />
          {errors.shippingLastName && (
            <span className="error-text">{errors.shippingLastName}</span>
          )}
        </div>
      </div>
    </section>
  );
}

export default PersonalInfoForm;
