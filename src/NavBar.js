import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="sticky-top" >
      <Container>
        <Navbar.Brand href="#home">Just Socks, That's it</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">Products</Nav.Link>
            <Nav.Link href="#link">Shopping Cart</Nav.Link>
            <Nav.Link href="#link">Checkout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
