import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Header() {
    return (
      <header
        className=" text-white py-1"
        style={{ background: "#b4ffcd", fontSize: "20px" }}
      >
        <Container>
          <Row>
            <Col className="text-center">
              <h1>Upgrade Club</h1>
            </Col>
          </Row>
        </Container>
      </header>
    );
}