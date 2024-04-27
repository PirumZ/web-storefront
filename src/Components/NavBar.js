import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Container>
        <Navbar.Brand to="/">Just Socks, That's it</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/products">Products</Link>
            <Link to="/cart">Shopping Cart</Link>
            <Link to="/checkout">Checkout</Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}