import React from "react";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Error() {
  const { t } = useTranslation();
  return (
    <Card className="d-flex flex-center">
      <Card.Body className="pt-10">{t("Loading error")}</Card.Body>
    </Card>
  );
}

export default Error;
