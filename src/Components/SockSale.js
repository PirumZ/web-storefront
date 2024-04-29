import React from "react";
import { Button } from "react-bootstrap";
import "../Sock.css";

export default function SockSale(props) {
  return (
    // Pretty basic component designating the layout of all of the sale socks
    // utilizes props to import data from JSONs
    <div className="sock">
      <div className="image">
        <img src={props.image} alt="It's socks" width="20%" height="30%"></img>
      </div>
      <div className="sock-name">
        <b>Name:</b> {props.brand} {props.name}
      </div>
      <div className="fit-mat">
        <b>Fit:</b> {props.fit}
      </div>
      <div>
        <b>Material: </b> {props.material}
      </div>
      <div>
        <b>Price: </b>
        <s>${props.price}</s> ${props.pricesale}
      </div>
      {/*Button designed to add said item to the shopping cart*/}
      <Button className="btn btn-primary">Add to Cart</Button>
    </div>
  );
}
