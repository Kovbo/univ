import { Col, Container, Row } from "react-bootstrap";
import { PageTitle } from "../context/PageDataProvider";
import {
  UniversitiesList,
  UniversitiesFilterSidebar,
} from "../features/universities";
import { UniversityFiltersProvider } from "../features/universities/context/UniversityFiltersProvider";
import { IPageBreadcrumbs } from "../models";

function Universities() {
  const breadcrumbs: Array<IPageBreadcrumbs> = [
    {
      title: "Головна",
      path: "/",
    },
  ];

  return (
    <Container>
      <PageTitle pageBreadcrumbs={breadcrumbs}>Список університетів</PageTitle>
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
