import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { ShopContext } from "../Components/ShopContext";
import { useContext } from "react";

export default function CheckoutForm() {
  const { getTotalCartAmountPostTax } = useContext(ShopContext);
  const totalAmountBeforeRound = getTotalCartAmountPostTax();
  const totalAmount = totalAmountBeforeRound.toFixed(2);

  const [formData, setFormData] = useState({
    email: "",
    paymentMethod: "",
    shippingMethod: "",
    billingAddress: "",
    shippingAddress: "",
  });
  const [invoice, setInvoice] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(function (prevData) {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Generate invoice
    const generatedInvoice = {
      email: formData.email,
      paymentMethod: formData.paymentMethod,
      shippingMethod: formData.shippingMethod,
      billingAddress: formData.billingAddress,
      shippingAddress: formData.shippingAddress,
      total: 0, // Placeholder for total
    };

    // Set the generated invoice in the state
    setInvoice(generatedInvoice);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formCardSelect">
          <Form.Label>How Can We Take Your Money?</Form.Label>
          <Form.Select
            aria-label="card-select"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option>Pick a Card, Any Card</option>
            <option value="Credit Card">
              Credit Card (MasterCard, Visa, Chase, etc)
            </option>
            <option value="Debit Card">Debit Card</option>
            <option value="PayPal/Venmo">PayPal/Venmo</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="formShipping">
          <Form.Label>How Quickly Should We Get That to You?</Form.Label>
          <Form.Select
            aria-label="shipping-select"
            name="shippingMethod"
            value={formData.shippingMethod}
            onChange={handleChange}
          >
            <option>Pick the expensive option</option>
            <option value="Standing Shipping">Standing Shipping</option>
            <option value="Express Shipping">Express Shipping</option>
            <option value="Overnight Shipping">Overnight Shipping</option>
          </Form.Select>
        </Form.Group>

        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="formBillingAddress">
              <Form.Label>Billing Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Where can we bill you?"
                name="billingAddress"
                value={formData.billingAddress}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="formShippingAddress">
              <Form.Label>Shipping Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Where would you like this to go?"
                name="shippingAddress"
                value={formData.shippingAddress}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        {invoice && (
          <div className="mt-3">
            <h3>Generated Invoice</h3>
            <p>
              <b>Email:</b> {invoice.email}
            </p>
            <p>
              <b>Payment Method:</b> {invoice.paymentMethod}
            </p>
            <p>
              <b>Shipping Method:</b> {invoice.shippingMethod}
            </p>
            <p>
              <b>Billing Address:</b> {invoice.billingAddress}
            </p>
            <p>
              <b>Shipping Address:</b> {invoice.shippingAddress}
            </p>
            <p>
              <b>Total:</b> ${totalAmount}
            </p>
            <small>Thank you for money</small>
          </div>
        )}
        <Button variant="primary" type="submit" className="mt-2">
          Generate Invoice
        </Button>
      </Form>
    </Container>
  );
}
