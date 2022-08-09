import { Col, Container, Row } from "react-bootstrap";
import {
  UniversitiesList,
  UniversitiesFilterSidebar,
} from "../features/universities";
import { UniversityFiltersProvider } from "../features/universities/context/UniversityFiltersProvider";

function Universities() {
  return (
    <Container>
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
