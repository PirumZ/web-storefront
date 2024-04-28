import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import Sock from "../Components/Sock"
import myRegularSock from "../Components/JSONs/RegularSocks.json"
import "bootstrap/dist/css/bootstrap.min.css";


export default function RegularList() {

  const [regsock] = useState(myRegularSock);


  return (
    <div className="sock-list">
        <h3 className="header">Regular Socks</h3>
    <Container fluid className="mt-4">
        <Row lg={4} md={8} className="justify-content-center">
            
            {regsock.map((regsock) => (
              <Sock
                key={regsock.id}
                name={regsock.name}
                brand={regsock.brand}
                price={regsock.price}
                fit={regsock.fit}
                material={regsock.material}
                image={regsock.image}
              />
          ))}
            
        </Row>
    </Container>
    </div>
  );
}
