import React, { useState } from "react";

export default function ShoppingCart({cartItems, removeFromCart, updateQuantity}) {
    
    // Calculate total price of all items in the cart
    const totalPrice = cartItems.reduce(
        (total, item) => total + (item.price * item.quantity), 0
    );

    return (
        <div>
            {/* Display shopping cart items */}
            {cartItems.map(item => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    <input 
                        type="number" 
                        defaultValue={0} 
                        min={0} 
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    />
                </div>
            ))}
            {/* Display pre-tax total price */}
            <p>Total: ${totalPrice.toFixed(2)}</p>
        </div>
    );
}
