import Container from "react-bootstrap/Container";
import CheckoutForm from "../Components/CheckoutForm";
export default function CheckoutPage() {

  return (
    <div>
    <Container fluid="lg" className="mt-4">
      <h2>Checkout</h2>

    </Container>
    <div/* Will call the checkout form to determine total */>
      <h2>Checkout</h2>
      <CheckoutForm />
    </div>
    </div>
  );
}
