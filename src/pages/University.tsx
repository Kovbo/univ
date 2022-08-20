import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { PageTitle } from "../context/PageDataProvider";
import { UniversityInfo } from "../features/university";
import useUniversity from "../features/university/hooks/useUniversity";
import { IPageBreadcrumbs } from "../models";

function University() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();

  const { isLoading, isError, data: university } = useUniversity(id);

  const breadcrumbs: Array<IPageBreadcrumbs> = [
    {
      title: t("Home menu"),
      path: "/",
    },
    {
      title: t("Universities menu"),
      path: "/universities",
    },
  ];

  return (
    <Container>
      <PageTitle pageBreadcrumbs={breadcrumbs}>
        {i18n.language === "en"
          ? university?.university_name_en
          : university?.university_short_name}
        {/* {university?.university_short_name || t("University")} */}
      </PageTitle>

      <Row>
        <Col xl={12}>
          {isLoading && <Loading />}
          {isError && <Error />}
          {university && <UniversityInfo university={university} />}
        </Col>
      </Row>
    </Container>
  );
}

export default University;
