import SaleList from "../Components/SaleList";
import PageButton from "../Components/PageButton";

export default function LandingPage() {
  return(
    // Page users first interact with on the site
    // Components are imported to fill out content
  <div>
    <h2>We Sell Socks Here. I hope you like 'em.</h2>
    <h3>While you're here, take a look at some of our sale items. :)</h3>
    <PageButton />
    <SaleList />
  </div>
  );
}
