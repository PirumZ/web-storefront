import AthleticSock from "../Components/AthleticSock";
import mySocks from "../Components/AthleticSocks.json";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useState } from "react";

export default function ProductPage() {
  const [socks /*, setSocks*/] = useState(mySocks);

  return (
    <Container fluid="lg" className="mt-4">
      <h2>Temp Placement1</h2>
      <div className="sock-list">
        <Row>
          {socks.map((sock) => (
            <Col md={5} lg={5}>
              <AthleticSock
                key={sock.id}
                name={sock.name}
                brand={sock.brand}
                price={sock.price}
                fit={sock.fit}
                material={sock.material}
                image={sock.image}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}
