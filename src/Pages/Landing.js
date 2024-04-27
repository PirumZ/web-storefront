import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import SockSale from "../Components/SockSale"
import mySockSale from "../Components/SocksSale.json"

export default function LandingPage() {

  const [socksale] = useState(mySockSale);


  return (
    <div className="sock-list">
        <h2>We Sell Socks Here. I hope you like 'em.</h2>
    <Container fluid="lg" className="mt-4">
        <Row>
            <Col>
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
            </Col>
        </Row>
    </Container>
    </div>
  );
}
