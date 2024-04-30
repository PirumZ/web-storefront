import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Sock from "./Sock";
import myAthleticSock from "../Components/JSONs/AthleticSocks.json";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SaleList() {
  // Creating a constant for JSON object
  const athsock = myAthleticSock;

  return (
    // Container linking the JSON elements to be used in the Sock component
    // More specifically, this was designed for Athletic Socks
    <div className="sock-list">
      <Container fluid className="mt-4">
        <Row lg={4} md={8} className="justify-content-center">
          {athsock.map((athsock) => (
            <Sock
              key={athsock.name}
              name={athsock.name}
              brand={athsock.brand}
              price={athsock.price}
              fit={athsock.fit}
              material={athsock.material}
              image={athsock.image}
              id={athsock.id}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}
