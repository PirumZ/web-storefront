import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import SockSale from "../Components/SockSale"
import mySockSale from "../Components/JSONs/SocksSale.json"
import "bootstrap/dist/css/bootstrap.min.css";


export default function SaleList() {

  const [socksale] = useState(mySockSale);


  return (
    <div className="sock-list">
        <h2>We Sell Socks Here. I hope you like 'em.</h2>
        <h3>While you're here, take a look at some of our sale items. :)</h3>
    <Container fluid="lg" className="mt-4">
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
