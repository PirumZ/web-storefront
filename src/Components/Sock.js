import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import "../Sock.css";
//import ProductPage from "../Pages/Products";
import { ShopContext } from "./ShopContext";

export default function Sock(props) {

  const { addToCart,cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[props.id];

  return (
    // Pretty basic component designating the layout of all of the normal and athletic socks
    // utilizes props to import data from JSONs
    <div className="sock">
      <div className="image">
        <img src={props.image} alt="It's socks" width="20%" height="30%"></img>
      </div>
      <div className="sock-name">
        <b>Name: </b>
        {props.brand} {props.name}
      </div>
      <div className="fit-mat">
        <b>Fit: </b>
        {props.fit}
      </div>
      <div>
        <b>Material:</b> {props.material}
      </div>
      <div>
        <b>Price: </b>
        ${props.price}
      </div>
      {/*Button designed to add said item to the shopping cart*/}
      <Button className="btn btn-primary" onClick={() => addToCart(props.id)}>
      Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      
      </Button>
    </div>
  );
}
