import { FC } from "react";
import { Card, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

type UniversityFacultiesProps = {
  faculties: [string];
};

export const UniversityFaculties: FC<UniversityFacultiesProps> = ({
  faculties,
}) => {
  const { t } = useTranslation();
  return (
    <Card className="mb-10">
      <Card.Header>
        <Card.Title>{t("Faculties list")}:</Card.Title>
      </Card.Header>
      <Card.Body>
        <Row>
          {faculties.map((fac) => {
            return (
              <h3
                key={fac}
                className="text-gray-800 text-hover-primary fs-2 fw-bold me-3 mb-3"
              >
                {fac}
              </h3>
            );
          })}
        </Row>
      </Card.Body>
    </Card>
  );
};
