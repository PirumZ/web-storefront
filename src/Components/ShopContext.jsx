import React, { createContext, useState } from "react";
import sockdata from "../Components/JSONs/RegularSocks.json";

/* pretty much just a page full of functions for adding, removing, and editing cart amounts
 along with calculating the total at any given moment
 pretty much everything here was heavily influenced by PedroTech's video
 that can be found at https://youtu.be/tEMrD9t85v4?si=NfcPL3IpsXfPscDO  */

export const ShopContext = createContext(null);
//creation of an empty cart
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < sockdata.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
// huge function for math and item counts
export default function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  // math to quantify the total of the items pre-tax
  const getTotalCartAmount = () => {
    var totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        var itemInfo = sockdata.find((sock) => sock.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };
  const getTotalCartAmountPostTax = () => {
    // similar to the above function, used to calculate total post tax
    var totalAmount = 0;
    var tax = 0;
    var totalAmountPT = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        var itemInfo = sockdata.find((sock) => sock.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
        tax = totalAmount * 0.06;
        totalAmountPT = totalAmount + tax;
      }
    }
    return totalAmountPT;
  };
  // below functions are used to add, remove, and update item count as implied by the name
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };
  // constant used to send data to other files in the application
  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    getTotalCartAmountPostTax,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
