import Sock from "./Sock";
import mySocks from "./Socks.json";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useState } from "react";

export default function SockList() {
    const [socks/*, setSocks*/] = useState(mySocks);

    return (
        <Container className="mt-4 ms-4">
        <h2>God, I'm so good at web design</h2>
            <div className="sock-list">
                <Row>
                    {socks.map((sock) => (
                    <Col md={5} lg={5}>
                        <Sock
                        key = {sock.id}
                        name = {sock.name}
                        brand = {sock.brand}
                        price = {sock.price}
                        fit = {sock.fit}
                        material = {sock.material}
                        image = {sock.image}
                        />
                    </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
}