import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Sock from "../Components/Sock";
import myRegularSock from "../Components/JSONs/RegularSocks.json";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RegularList() {
  // Creating a constant for JSON object
  const regsock = myRegularSock;

  return (
    // Container linking the JSON elements to be used in the Sock component
    // More specifically, this was designed for Regular Socks
    <div className="sock-list">
      <Container className="mt-4">
        <Row lg={4} md={8} className="justify-content-center">
          {regsock.map((regsock) => (
            <Sock
              key={regsock.name}
              name={regsock.name}
              brand={regsock.brand}
              price={regsock.price}
              fit={regsock.fit}
              material={regsock.material}
              image={regsock.image}
              id={regsock.id}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}
