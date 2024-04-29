/*import React, { createContext, useState } from 'react';
import athdata from "../Components/JSONs/AthleticSocks.json";

export const ShopContext = createContext(null);

function getDefaultCart(){
    let cart = {}
    for (let i = 0; i < athdata.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
}  

export default function ShopContextProvider(props) {

    const [cartItems, setCartItems] = useState(getDefaultCart);

    function addToCart(itemId){
      setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }
  return (
  <ShopContext.Provider>
    {props.children}
  </ShopContext.Provider>
  )
};*/
