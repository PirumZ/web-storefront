import { useContext } from "react";
import "../Sock.css";
import { Button, Form, Col } from "react-bootstrap";
import { ShopContext } from "./ShopContext";

export default function CartItem(props) {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="sock">
      <div className="image">
        <img src={props.image} alt="It's socks" width="20%" height="30%"></img>
      </div>
      <div className="sock-name">
        <b>Name: </b>
        {props.brand} {props.name}
      </div>
      <div>
        <b>Price: </b>${props.price}
      </div>
      <div className="countHandler">


        <Col lg={4} md={4}>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder={cartItems[props.id]} onChange={(e) =>
            updateCartItemCount(Number(e.target.value), props.id)
          } />
          </Form.Group>
        </Col>

        <Button className=" me-2" onClick={() => addToCart(props.id)}>
          {" "}
          Add{" "}
        </Button>
        <Button  onClick={() => removeFromCart(props.id)}>
          {" "}
          Remove{" "}
        </Button>
      </div>
    </div>
  );
}
