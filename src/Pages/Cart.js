import { useContext } from "react";
import regsock from "../Components/JSONs/RegularSocks.json";
import { ShopContext } from "../Components/ShopContext";
import CartItem from "../Components/CartItem";
import "../Sock.css";
import { Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function CartPage() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmountBeforeRound = getTotalCartAmount();
  const totalAmount = totalAmountBeforeRound.toFixed(2);
  const sockdata = regsock;
  return (
    <Container>
      <div>
        <div>
          <h1>Your Cart Items</h1>
        </div>
        <div>
          <Row lg={3} md={8} className="justify-content-center">
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
        {totalAmount > 0 ?(
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <LinkContainer to="/products">
            <Button className="btn btn-primary m-1">Continue Shopping</Button>
          </LinkContainer>
          <LinkContainer to="/checkout">
            <Button className="btn btn-primary m-1">Checkout</Button>
          </LinkContainer>
        </div>
        ):(
          <div>
          <h1>You Haven't Picked Anything Yet!</h1>
          <h1>GO BACK AND GIVE US MONEY!!!</h1>
          </div>
        )}
      </div>
    </Container>
  );
}
