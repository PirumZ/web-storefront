import React from "react";
import "../Sock.css";

export default function SockSale(props) {
  return (
    // Pretty basic component designating the layout of all of the sale socks
    // utilizes props to import data from JSONs
    <div className="sock">
      <div className="image">
        <img src={props.image} alt="It's socks" className="center"></img>
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
        <s>${props.price}</s> ${props.pricesale} per pair
      </div>
      </div>
  );
}
