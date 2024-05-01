import CheckoutForm from "../Components/CheckoutForm";
export default function CheckoutPage() {

  return (
    <div/* Will call the checkout form to determine total and generate the invoice */>
      <h2>Checkout</h2>
      <CheckoutForm />
    </div>
  );
}
