import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { PageTitle } from "../context/PageDataProvider";
import {
  UniversitiesList,
  UniversitiesFilterSidebar,
} from "../features/universities";
import { UniversityFiltersProvider } from "../features/universities/context/UniversityFiltersProvider";
import { IPageBreadcrumbs } from "../models";

function Universities() {
  const { t } = useTranslation();
  const breadcrumbs: Array<IPageBreadcrumbs> = [
    {
      title: t("Home menu"),
      path: "/",
    },
  ];

  return (
    <Container>
      <PageTitle pageBreadcrumbs={breadcrumbs}>
        {t("Universities list")}
      </PageTitle>
      <UniversityFiltersProvider>
        <Row>
          <Col xl={3}>
            <UniversitiesFilterSidebar />
          </Col>

          <Col xl={9}>
            <UniversitiesList />
          </Col>
        </Row>
      </UniversityFiltersProvider>
    </Container>
  );
}

export default Universities;
