import React, { useState } from "react";
import socksData from '../Components/JSONs/RegularSocks.json';

export default function ShoppingCart() {
    
    // Fetch items from JSON file or any other source
    const [cartItems, setCartItems] = useState(socksData);

    // Removes an item from the cart
    const removeFromCart = (sockId) => {
        const updatedCartItems = cartItems.filter(sock => sock.id !== sockId);
        setCartItems(updatedCartItems);
    };

    // Updates the quantity of an item in the cart
    const updateQuantity = (sockId, newQuantity) => {
        const updatedCartItems = cartItems.map(sock => {
            if (sock.id === sockId) {
                return { ...sock, quantity: newQuantity };
            }
            return sock;
        });
        setCartItems(updatedCartItems);
    };

    // Calculate total price of all items in the cart
    const totalPrice = cartItems.reduce((total, sock) => total + (sock.price * sock.quantity), 0);

    return (
        <div>
            {/* Display shopping cart items */}
            {socks.map(sock => (
                <div key={sock.id}>
                    <p>{sock.name}</p>
                    <p>{sock.price}</p>
                    <button onClick={() => removeFromCart(sock.id)}>Remove</button>
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
