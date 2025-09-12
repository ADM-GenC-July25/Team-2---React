import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/OrderPage.css";
import Base64Image from "./components/Base64Img";

function OrderPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // State for order management form
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [formData, setFormData] = useState({
    orderId: "",
    firstName: "",
    lastName: "",
  });
  const [updateOrderItems, setUpdateOrderItems] = useState([]);
  const [actionType, setActionType] = useState(""); // 'update' or 'delete'
  const [isProcessing, setIsProcessing] = useState(false);

  // Get order data from navigation state or use sample data for testing
  const orderData = location.state?.orderData;

  const formatPrice = (price) => {
    return typeof price === "number" ? price.toFixed(2) : "0.00";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const quantity = Math.max(0, parseInt(newQuantity) || 0);
    setUpdateOrderItems((prev) =>
      prev.map((item) =>
        item.itemId === itemId ? { ...item, quantity } : item
      )
    );
  };

  const handleUpdateOrder = () => {
    setActionType("update");
    // Pre-populate form with current order data
    setFormData({
      orderId: orderData?.id || "",
      firstName: orderData?.firstName || "",
      lastName: orderData?.lastName || "",
    });
    // Pre-populate order items with current quantities
    setUpdateOrderItems(
      orderData?.orderItems?.map((item) => ({
        id: item.id,
        itemId: item.itemId,
        name: item.item?.name || "Unknown Item",
        price: item.item?.price || 0,
        quantity: item.quantity,
      })) || []
    );
    setShowOrderForm(true);
  };

  const handleCancelOrder = () => {
    setActionType("delete");
    // Pre-populate form with current order data
    setFormData({
      orderId: orderData?.id || "",
      firstName: orderData?.firstName || "",
      lastName: orderData?.lastName || "",
    });
    setShowOrderForm(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.orderId || !formData.firstName || !formData.lastName) {
      alert("Please fill in all fields");
      return;
    }

    setIsProcessing(true);

    const BASE_URL =
      "http://978337-team2-orderservice-env.eba-ewnv3rxm.us-west-2.elasticbeanstalk.com";

    try {
      let endpoint;
      let requestOptions;

      if (actionType === "update") {
        endpoint = `${BASE_URL}/update/${formData.orderId}`;

        // Use the same body structure as create order with updated data
        const updateOrderData = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          orderItems: updateOrderItems
            .filter((item) => item.quantity > 0) // Only include items with quantity > 0
            .map((item) => ({
              itemId: item.itemId,
              quantity: item.quantity,
            })),
        };

        requestOptions = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateOrderData),
        };
      } else {
        // Delete uses query parameters
        const queryParams = new URLSearchParams({
          firstName: formData.firstName,
          lastName: formData.lastName,
        });
        endpoint = `${BASE_URL}/delete/${
          formData.orderId
        }?${queryParams.toString()}`;
        requestOptions = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        };
      }

      const response = await fetch(endpoint, requestOptions);

      if (response.ok) {
        if (actionType === "update") {
          const result = await response.json();
          alert("Order updated successfully!");
          // Refresh the page with updated order data
          navigate("/order", {
            state: {
              orderData: result,
            },
            replace: true,
          });
        } else {
          // Delete API returns a string, display that string
          const deleteMessage = await response.text();
          alert(deleteMessage);
          navigate("/");
        }
      } else {
        const errorText = await response.text();
        throw new Error(errorText || `Failed to ${actionType} order`);
      }
    } catch (error) {
      console.error(`Error ${actionType}ing order:`, error);
      alert(`Failed to ${actionType} order. ${error.message}`);
    } finally {
      setIsProcessing(false);
      setShowOrderForm(false);
      setFormData({ orderId: "", firstName: "", lastName: "" });
      setUpdateOrderItems([]);
    }
  };

  const handleFormCancel = () => {
    setShowOrderForm(false);
    setFormData({ orderId: "", firstName: "", lastName: "" });
    setUpdateOrderItems([]);
    setActionType("");
  };

  if (!orderData) {
    return (
      <div className="order-page">
        <div className="order-container">
          <h1>Order Not Found</h1>
          <p>We couldn't find your order details.</p>
          <button onClick={() => navigate("/")} className="btn-primary">
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="order-page">
      <div className="order-container">
        <div className="order-header">
          <div className="success-icon">✓</div>
          <h1>Order Confirmed!</h1>
          <p className="order-id">Order #{orderData.id}</p>
          <p className="customer-name">
            Thank you, {orderData.firstName} {orderData.lastName}!
          </p>
        </div>

        <div className="order-content">
          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="order-items">
              {orderData.orderItems.map((orderItem, index) => (
                <div key={orderItem.id || index} className="order-item">
                  <div className="item-image">
                    <Base64Image
                      Base64Image={orderItem.item.img}
                      alt={orderItem.item.description}
                      className="menuitem-image"
                    />
                  </div>
                  <div className="item-details">
                    <h3>{orderItem.item.name}</h3>
                    <p className="item-description">
                      {orderItem.item.description}
                    </p>
                    <div className="item-meta">
                      <span className="category">
                        {orderItem.item.category}
                      </span>
                      {orderItem.item.spiceLevel && (
                        <span className="spice-level">
                          🌶️ {orderItem.item.spiceLevel.replace(/-/g, " ")}
                        </span>
                      )}
                    </div>
                    {orderItem.customerOrder && (
                      <p className="special-instructions">
                        <strong>Special Instructions:</strong>{" "}
                        {orderItem.customerOrder}
                      </p>
                    )}
                    {orderItem.item.allergens &&
                      orderItem.item.allergens.length > 0 && (
                        <p className="allergens">
                          <strong>Allergens:</strong>{" "}
                          {orderItem.item.allergens
                            .join(", ")
                            .replace(/-/g, " ")}
                        </p>
                      )}
                  </div>
                  <div className="item-pricing">
                    <div className="quantity">Qty: {orderItem.quantity}</div>
                    <div className="price">
                      ${formatPrice(orderItem.item.price)}
                    </div>
                    <div className="subtotal">
                      ${formatPrice(orderItem.item.price * orderItem.quantity)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-totals">
            <h2>Order Totals</h2>
            <div className="totals-breakdown">
              <div className="total-line">
                <span>Subtotal:</span>
                <span>${formatPrice(orderData.subtotal)}</span>
              </div>
              <div className="total-line">
                <span>Tax:</span>
                <span>${formatPrice(orderData.tax)}</span>
              </div>
              <div className="total-line total-final">
                <span>Total:</span>
                <span>${formatPrice(orderData.total)}</span>
              </div>
              <div className="payment-status">
                <span
                  className={`status ${orderData.payed ? "paid" : "pending"}`}
                >
                  {orderData.payed ? "✓ Paid" : "⏳ Payment Pending"}
                </span>
              </div>
            </div>
          </div>

          <div className="pickup-info">
            <h2>Pickup Information</h2>
            <div className="pickup-details">
              <p>
                <strong>Location:</strong> Asteroid Belt, Milky Way Galaxy
              </p>
              <p>
                <strong>Estimated Pickup Time:</strong> 20 minutes
              </p>
              <p className="pickup-note">
                Please bring this order confirmation and a valid ID for pickup.
              </p>
            </div>
          </div>
        </div>

        <div className="order-actions">
          <button onClick={() => navigate("/")} className="btn-primary">
            Continue Shopping
          </button>
          <button
            onClick={() => navigate("/products")}
            className="btn-secondary"
          >
            Browse Menu
          </button>
          <button onClick={handleUpdateOrder} className="btn-update">
            Update Order
          </button>
          <button onClick={handleCancelOrder} className="btn-cancel">
            Cancel Order
          </button>
        </div>
      </div>

      {/* Order Management Form Modal */}
      {showOrderForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{actionType === "update" ? "Update Order" : "Delete Order"}</h2>
            <p>
              {actionType === "update"
                ? "Enter your order details to update your order:"
                : "Enter your order details to delete your order:"}
            </p>

            <form onSubmit={handleFormSubmit} className="order-form">
              <div className="form-group">
                <label htmlFor="orderId">Order ID:</label>
                <input
                  type="text"
                  id="orderId"
                  name="orderId"
                  value={formData.orderId}
                  onChange={handleInputChange}
                  placeholder="Enter your order ID"
                  required
                  readOnly={orderData?.id}
                />
              </div>

              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                  required
                  readOnly={orderData?.id}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                  required
                  readOnly={orderData?.id}
                />
              </div>

              {orderData?.orderItems && orderData.orderItems.length > 0 && (
                <div className="form-group">
                  <label>
                    {actionType === "update"
                      ? "Order Items:"
                      : "Items to be deleted:"}
                  </label>
                  <div className="order-items-edit">
                    {actionType === "update"
                      ? // Update mode - editable quantities
                        updateOrderItems.map((item) => (
                          <div key={item.itemId} className="edit-item">
                            <div className="item-info">
                              <span className="item-name">{item.name}</span>
                              <span className="item-price">
                                ${item.price.toFixed(2)}
                              </span>
                            </div>
                            <div className="quantity-control">
                              <label htmlFor={`qty-${item.itemId}`}>Qty:</label>
                              <input
                                type="number"
                                id={`qty-${item.itemId}`}
                                min="0"
                                value={item.quantity}
                                onChange={(e) =>
                                  handleQuantityChange(
                                    item.itemId,
                                    e.target.value
                                  )
                                }
                                className="quantity-input"
                              />
                            </div>
                          </div>
                        ))
                      : // Delete mode - read-only display
                        orderData.orderItems.map((orderItem) => (
                          <div key={orderItem.itemId} className="edit-item">
                            <div className="item-info">
                              <span className="item-name">
                                {orderItem.item?.name || "Unknown Item"}
                              </span>
                              <span className="item-price">
                                ${(orderItem.item?.price || 0).toFixed(2)}
                              </span>
                            </div>
                            <div className="quantity-control">
                              <span className="quantity-display">
                                Qty: {orderItem.quantity}
                              </span>
                            </div>
                          </div>
                        ))}
                    <p className="quantity-note">
                      {actionType === "update"
                        ? "Set quantity to 0 to remove an item from your order."
                        : "All items in this order will be deleted."}
                    </p>
                  </div>
                </div>
              )}

              <div className="form-actions">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className={
                    actionType === "update" ? "btn-update" : "btn-cancel"
                  }
                >
                  {isProcessing
                    ? "Processing..."
                    : actionType === "update"
                    ? "Update Order"
                    : "Delete Order"}
                </button>
                <button
                  type="button"
                  onClick={handleFormCancel}
                  className="btn-secondary"
                  disabled={isProcessing}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderPage;
