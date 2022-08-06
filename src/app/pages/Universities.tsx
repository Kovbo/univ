import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function Universities() {
  return (
    <Container>
      <Row>
        <Col xl={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Filters</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={9}>
          <Card>
            <Card.Body>
              <Card.Title>Universities</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Universities;
