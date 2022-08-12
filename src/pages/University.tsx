import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { PageTitle } from "../context/PageDataProvider";
import { UniversityInfo } from "../features/university";
import useUniversity from "../features/university/hooks/useUniversity";
import { IPageBreadcrumbs } from "../models";

function University() {
  const { id } = useParams();

  const { isLoading, error, data: university } = useUniversity(id);

  const breadcrumbs: Array<IPageBreadcrumbs> = [
    {
      title: "Головна",
      path: "/",
    },
    {
      title: "Университети",
      path: "/universities",
    },
  ];

  return (
    <Container>
      <PageTitle pageBreadcrumbs={breadcrumbs}>
        {university?.university_short_name || "Університет"}
      </PageTitle>
      <Row>
        <Col xl={12}>
          {university && <UniversityInfo university={university} />}
        </Col>
      </Row>
    </Container>
  );
}

export default University;
