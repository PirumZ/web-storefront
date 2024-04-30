import { useContext } from "react";
import regsock from "../Components/JSONs/RegularSocks.json";
import { ShopContext } from "../Components/ShopContext";
import CartItem from "../Components/CartItem";
import "../Sock.css"
import { Row } from "react-bootstrap";

export default function CartPage() {
  const { cartItems } = useContext(ShopContext);
  const sockdata = regsock;
  return (
    <div>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div>
      <Row lg={4} md={8} className="justify-content-center">
        {sockdata.map((sock) => {
          if (cartItems[sock.id] !== 0) {
            return (
              <CartItem
                key={sock.name}
                name={sock.name}
                price={sock.price}
                image={sock.image}
                id={sock.id}
              />
            );
          }
          
        })}
        </Row>
      </div>
    </div>
  );
}
