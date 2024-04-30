import React from "react";
import { Button } from "react-bootstrap";
import "../Sock.css";
import ProductPage from "../Pages/Products";
import ShoppingCart from "./ShoppingCart";

export default function Sock(props) {

  const addToCart = () => {
    // Call the addToCart function passed as a prop with the sock item
    props.addToCart(props.sock);
  };

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
      <Button className="btn btn-primary" onClick={() => addToCart(ShoppingCart)}>Add to Cart</Button>
    </div>
  );
}
