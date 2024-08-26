import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../App.css"; // Asegúrate de crear e importar el archivo CSS

export default function Inicio() {
  return (
    <Container fluid className="text-center py-5 bg-light">
      <Row>
        <Col>
          <h1 className="display-4 font-weight-bold mb-4">
            ¡Bienvenidos a Upgrade Club!
          </h1>
          <p className="lead mb-5 text-muted">
            Sumérgete en el mundo cinéfilo y viaja en el tiempo explorando los
            grandes éxitos de series y películas de todas las épocas
          </p>
          <Button variant="primary" size="lg" href="/Products">
            Ver Catálogo
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={4} className="d-flex justify-content-center mb-4">
          <Card className="shadow-sm border-0" style={{ width: "35rem" }}>
            <Card.Img
              variant="top"
              src="http://peticiones.online/images/series/series02.jpg"
            />
            <Card.Body style={{ padding: "1rem" }}>
              <Card.Title className="font-weight-bold">Lo más visto</Card.Title>
              <Card.Text className="text-muted">
                ¡Descubre la serie/película más vista del mes!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex justify-content-center mb-4">
          <Card className="shadow-sm border-0" style={{ width: "35rem" }}>
            <Card.Img
              variant="top"
              src="https://es.web.img3.acsta.net/pictures/20/08/05/09/15/4715259.jpg"
            />
            <Card.Body style={{ padding: "1rem" }}>
              <Card.Title className="font-weight-bold">¡NOVEDADES!</Card.Title>
              <Card.Text className="text-muted">
                Recientemente añadida a nuestra colección
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex justify-content-center mb-4">
          <Card className="shadow-sm border-0" style={{ width: "35rem" }}>
            <Card.Img
              variant="top"
              className="w-100 h-100"
              src="http://peticiones.online/images/series/series03.jpg"
            />
            <Card.Body style={{ padding: "1rem" }}>
              <Card.Title className="font-weight-bold">
                Nº 1 en España
              </Card.Title>
              <Card.Text className="text-muted">
                Revive la nostalgia con los grandes éxitos de nuestra colección
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
