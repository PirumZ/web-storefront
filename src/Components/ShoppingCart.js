import { useContext } from "react";
import regsock from "../Components/JSONs/RegularSocks.json";
import { ShopContext } from "../Components/ShopContext";
import CartItem from "../Components/CartItem";
import "../CSS/Sock.css";
import { Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function ShoppingCart() {
    //constants for math and importing data
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
          {/* similar to RegularList and SaleList, but adjusted to only hold
          selected items */}
            <Row lg={4} md={8} className="justify-content-center">
              {sockdata
                .filter((sock) => cartItems[sock.id] !== 0)
                .map((sock) => (
                  <CartItem
                    key={sock.name}
                    name={sock.name}
                    brand={sock.brand}
                    price={sock.price}
                    image={sock.image}
                    id={sock.id}
                  />
                ))}
            </Row>
          </div>
          {totalAmount > 0 ? (
            // display of working subtotal and some buttons to navigate back/forth
            <div className="checkout">
              <p>Subtotal: ${totalAmount}</p>
              <LinkContainer to="/products">
                <Button className="btn btn-primary m-1">Continue Shopping</Button>
              </LinkContainer>
              <LinkContainer to="/checkout">
                <Button className="btn btn-primary m-1">Checkout</Button>
              </LinkContainer>
            </div>
          ) : (
            <div>
              <h1>You Haven't Picked Anything Yet!</h1>
              <h1>GO BACK AND GIVE US MONEY!!!</h1>
            </div>
          )}
        </div>
      </Container>
    );
  
}
