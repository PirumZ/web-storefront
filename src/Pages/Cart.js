//import Container from "react-bootstrap/Container";
//import ProductCart from "../Components/ProductCart";
import React, { useContext } from 'react';
import sockdata from "../Components/JSONs/RegularSocks.json"
import CartItem from '../Components/Cart-Item';
import { ShopContext } from '../Components/ShopContext';



export default function CartPage() {
  const regsock = sockdata;
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {regsock.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      
    </div>
  );
};

