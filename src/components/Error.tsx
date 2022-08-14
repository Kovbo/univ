import React from "react";
import { Card } from "react-bootstrap";

function Error() {
  return (
    <Card className="d-flex flex-center">
      <Card.Body className="pt-10">Помилка при завантаженні даних</Card.Body>
    </Card>
  );
}

export default Error;
