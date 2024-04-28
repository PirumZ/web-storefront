import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import Sock from "./Sock"
import myAthleticSock from "../Components/JSONs/AthleticSocks.json"
import "bootstrap/dist/css/bootstrap.min.css";


export default function SaleList() {

  const [athsock] = useState(myAthleticSock);


  return (
    <div className="sock-list">
        <h2>This is our entire inventory. Please email us if you'd like new additions.</h2>
        <h3 className="header">Athletic Socks</h3>
    <Container fluid className="mt-4">
        <Row lg={4} md={8} className="justify-content-center">
            
            {athsock.map((athsock) => (
              <Sock
                key={athsock.id}
                name={athsock.name}
                brand={athsock.brand}
                price={athsock.price}
                fit={athsock.fit}
                material={athsock.material}
                image={athsock.image}
              />
          ))}
            
        </Row>
    </Container>
    </div>
  );
}
