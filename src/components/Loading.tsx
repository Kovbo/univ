import React from "react";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Loading() {
  const { t } = useTranslation();

  return (
    <Card className="d-flex flex-center">
      <Card.Body className="pt-10">{t("Loading")}</Card.Body>
    </Card>
  );
}

export default Loading;
