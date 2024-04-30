import React, { useState } from "react";

export default function ShoppingCart(prop) {
    
    // Fetch items from JSON file or any other source
    const [cartItems, setCartItems] = useState([]);

    // Removes an item from the cart
    const removeFromCart = (propId) => {
        const updatedCartItems = cartItems.filter(prop => prop.id !== propId);
        setCartItems(updatedCartItems);
    };

    // Updates the quantity of an item in the cart
    const updateQuantity = (propId, newQuantity) => {
        const updatedCartItems = cartItems.map(prop => {
            if (prop.id === propId) {
                return { ...prop, quantity: newQuantity };
            }
            return prop;
        });
        setCartItems(updatedCartItems);
    };

    // Calculate total price of all items in the cart
    const totalPrice = cartItems.reduce((total, prop) => total + (prop.price * prop.quantity), 0);

    return (
        <div>
            {/* Display shopping cart items */}
            {cartItems.map(prop => (
                <div key={prop.id}>
                    <p>{prop.name}</p>
                    <p>{prop.price}</p>
                    <button onClick={() => removeFromCart(prop.id)}>Remove</button>
                    <input 
                        type="number" 
                        defaultValue={0} 
                        min={0} 
                        onChange={(e) => updateQuantity(prop.id, parseInt(e.target.value))}
                    />
                </div>
            ))}
            {/* Display pre-tax total price */}
            <p>Total: ${totalPrice.toFixed(2)}</p>
        </div>
    );
}
