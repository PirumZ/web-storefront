import { useContext } from "react";
import "../Sock.css";
import { Button, Col } from "react-bootstrap";
import { ShopContext } from "./ShopContext";

export default function CartItem(props) {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="sock">
      <div className="image">
        <img src={props.image} alt="It's socks" className="center"></img>
      </div>
      <div className="sock-name">
        <b>Name: </b>
        {props.brand} {props.name}
      </div>
      <div>
        <b>Price: </b>${props.price}
      </div>
      <div className="countHandler">
        <input
          value={cartItems[props.id]}
          onChange={(e) =>
            updateCartItemCount(Number(e.target.value), props.id)
          }
        />
        <Col>
          <Button
            className="bg-primary me-1 mt-2"
            onClick={() => addToCart(props.id)}
          >
            {" "}
            Add{" "}
          </Button>
          <Button
            className="bg-primary ms-1 mt-2"
            onClick={() => removeFromCart(props.id)}
          >
            {" "}
            Remove{" "}
          </Button>
        </Col>
      </div>
    </div>
  );
}
