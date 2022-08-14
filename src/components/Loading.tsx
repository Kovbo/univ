import React from "react";
import { Card } from "react-bootstrap";

function Loading() {
  return (
    <Card className="d-flex flex-center">
      <Card.Body className="pt-10">Завантаження</Card.Body>
    </Card>
  );
}

export default Loading;
