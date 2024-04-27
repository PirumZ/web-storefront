import React from 'react';

export default function CheckoutForm() {
    return (
        <form>
            {/* Payment method */}
            <label>Payment Method:</label>
            <select>
                <option value="credit">Credit Card</option>
                <option value="paypal">PayPal</option>
            </select>

            {/* Shipping method */}
            <label>Shipping Method:</label>
            <select>
                <option value="standard">Standard Shipping</option>
                <option value="express">Express Shipping</option>
            </select>

            {/* Billing address */}
            <label>Billing Address:</label>
            <input type="text" />

            {/* Shipping address */}
            <label>Shipping Address:</label>
            <input type="text" />

            {/* Total after taxes */}
            <p>Total (including 6% tax): $0.00</p>

            {/* Checkout button */}
            <button type="submit">Checkout</button>
        </form>
    );
}


