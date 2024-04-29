import React from "react";

export default function CheckoutForm() {

  // State to store form data
  const [formData, setFormData] = useState({
    paymentMethod: 'credit',
    shippingMethod: 'standard',
    billingAddress: '',
    shippingAddress: '',
    subtotal: 0,
  });

  // Function to handle form changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Calculate total including tax
  const calculateTotal = () => {
    const taxRate = 0.06; // 6% tax rate
    const subtotal = formData.subtotal;
    const taxAmount = subtotal * taxRate;
    return subtotal + taxAmount;
  };
  
  return (
    <form>
      {/* Payment method */}
      <label>Payment Method:</label>
      <select name="paymentMethod" onChange={handleFormChange}>
        <option value="credit">Credit Card</option>
        <option value="paypal">PayPal</option>
      </select>

      {/* Shipping method */}
      <label>Shipping Method:</label>
      <select shippingMethod onChange={handleFormChange}>
        <option value="standard">Standard Shipping</option>
        <option value="express">Express Shipping</option>
      </select>

      {/* Billing address */}
      <label>Billing Address:</label>
      <input type="text" name="billingAddress" onChange={handleFormChange} />

      {/* Shipping address */}
      <label>Shipping Address:</label>
      <input type="text" name="shippingAddress" onChange={handleFormChange} />

      {/* Total after taxes */}
      <p>Total (including 6% tax): ${calculateTotal().toFixed(2)}</p>

      {/* Invoice Section */}
        <div>
          <h3>Invoice</h3>
          <p>Payment Method: {formData.paymentMethod}</p>
          <p>Shipping Method: {formData.shippingMethod}</p>
          <p>Billing Address: {formData.billingAddress}</p>
          <p>Shipping Address: {formData.shippingAddress}</p>
          <p>Subtotal: ${formData.subtotal.toFixed(2)}</p>
          <p>Tax (6%): ${(formData.subtotal * 0.06).toFixed(2)}</p>
          <p>Total: ${calculateTotal().toFixed(2)}</p>
        </div>
  
      {/* Checkout button */}
      <button type="submit">Checkout</button>
    </form>
  );
}
