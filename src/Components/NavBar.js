import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Container>
        <LinkContainer to="/"><Navbar.Brand>Just Socks, That's It</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/products"><Nav.Link>Products</Nav.Link></LinkContainer>
            <LinkContainer to="/cart"><Nav.Link>Shopping Cart</Nav.Link></LinkContainer>
            <LinkContainer to="/checkout"><Nav.Link>Checkout</Nav.Link></LinkContainer>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}