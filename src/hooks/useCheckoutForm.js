import { useState } from 'react';

const useCheckoutForm = () => {
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

  return {
    formData,
    errors,
    handleInputChange,
    handleCardNumberChange,
    validateForm,
    setErrors
  };
};

export default useCheckoutForm; 