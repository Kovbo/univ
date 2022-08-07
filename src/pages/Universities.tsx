import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  UniversitiesList,
  UniversitiesFilterSidebar,
} from "../features/universities";

function Universities() {
  return (
    <Container>
      <Row>
        <Col xl={3}>
          <UniversitiesFilterSidebar />
        </Col>

        <Col xl={9}>
          <UniversitiesList />
        </Col>
      </Row>
    </Container>
  );
}

export default Universities;
