import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import SockSale from "../Components/SockSale";
import mySockSale from "../Components/JSONs/SocksSale.json";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SaleList() {
  // Creating a constant for JSON object

  const socksale = mySockSale;

  return (
    // Container linking the JSON elements to be used in the Sock component
    // More specifically, this was designed for the socks on sale on the landing page
    <div className="sock-list">
      <Container fluid className="mt-4">
        <Row lg={4} className="justify-content-center">
          {socksale.map((socksale) => (
            <SockSale
              key={socksale.id}
              name={socksale.name}
              brand={socksale.brand}
              price={socksale.price}
              pricesale={socksale.pricesale}
              fit={socksale.fit}
              material={socksale.material}
              image={socksale.image}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}
