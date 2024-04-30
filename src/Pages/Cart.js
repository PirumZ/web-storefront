import React, { useState } from 'react';
import ShoppingCart from '../Components/ShoppingCart';

export default function CartPage() {

  // Fetch items from the shopping cart
  const [cartItems, setCartItems] = useState([]);

  // Adds an item to the cart
  const addToCart = (item) => {
      setCartItems([...cartItems, item]);
  };

  // Removes an item from the cart
  const removeFromCart = (itemId) => {
      const updatedCartItems = cartItems.filter(item => item.id !== itemId);
      setCartItems(updatedCartItems);
  };

  // Updates the quantity of an item in the cart
  const updateQuantity = (itemId, newQuantity) => {
      const updatedCartItems = cartItems.map(item => {
          if (item.id === itemId) {
              return { ...item, quantity: newQuantity };
          }
          return item;
      });
      setCartItems(updatedCartItems);
  };

  return (
    // Will call the shopping chart to display items
    <div>
      <h2>Shopping Cart</h2>
      <ShoppingCart
       cartItems={cartItems}
       removeFromCart={removeFromCart}
       updateQuantity={updateQuantity}
      />
    </div>
  );
}
