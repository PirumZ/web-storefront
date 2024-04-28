import React from "react";
import { Button } from "react-bootstrap";
import "../Sock.css";

export default function SockSale(props) {
  return (
    <div className="sock">
    <div className="image">
      <img src={props.image} alt="It's socks" width="20%" height="30%"></img>
    </div>
      <div className="sock-name">
       <b>Name:</b> {props.brand} {props.name}
      </div>
      <div className="fit-mat">
       <b>Fit and Mat:</b> {props.fit} {props.material}
      </div>
      <div>
        <b>Price: </b><s>${props.price}</s> ${props.pricesale}
      </div>
      <Button className="btn btn-primary">Add to Cart</Button>
    </div>
  );
}
