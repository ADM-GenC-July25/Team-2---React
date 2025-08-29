import { useState } from "react";

const useCheckoutForm = () => {
  const [formData, setFormData] = useState({
    // Shipping Address
    shippingFirstName: "",
    shippingLastName: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Required shipping fields
    const requiredShipping = ["shippingFirstName", "shippingLastName"];

    requiredShipping.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = "This field is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    formData,
    errors,
    handleInputChange,
    validateForm,
    setErrors,
  };
};

export default useCheckoutForm;
