import React from "react";
import { Button } from "react-bootstrap";
import "./Sock.css";

export default function Sock(props) {
  return (
    <div className="sock">
      <div className="sock-name">
        {props.brand} {props.name}
      </div>
      <div className="fit-mat">
        {props.fit} {props.material}
      </div>
      <Button className btn btn-primary p-1 float-end>Add to Cart</Button>
    </div>
  );
}
