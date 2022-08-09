import React from "react";
import { Card } from "react-bootstrap";
import Select, { SingleValue } from "react-select";
import { regions, universityTypes } from "../api/filters";
import { FILTERS_ACTIONS } from "../context/FiltersActions";
import { useUniversitiesFilters } from "../context/UniversityFiltersProvider";

function UniversitiesFilterSidebarComponent() {
  const filters = useUniversitiesFilters();

  function regionFilterInputHandler(
    e: SingleValue<{ value: string; label: string }>
  ) {
    filters.dispatch({
      type: FILTERS_ACTIONS.REGION_UPDATE,
      payload: { value: e?.value, label: e?.label },
    });
    console.log(filters);
  }

  function universityTypeFilterInputHandler(
    e: SingleValue<{ value: string; label: string }>
  ) {
    filters.dispatch({
      type: FILTERS_ACTIONS.TYPE_UPDATE,
      payload: { value: e?.value, label: e?.label },
    });
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title>Фільтрація</Card.Title>
      </Card.Header>
      <div className="separator border-gray-200"></div>

      <Card.Body>
        <div className="mb-10">
          <label className="form-label fw-semobold">Облість:</label>

          <div>
            <Select
              defaultValue={
                regions.filter(
                  (el) => el.value === filters.state.region.value
                )[0]
              }
              onChange={regionFilterInputHandler}
              options={regions}
            />
          </div>
        </div>

        <div className="mb-10">
          <label className="form-label fw-semobold">Тип закладу освіти:</label>

          <div>
            <Select
              defaultValue={
                universityTypes.filter(
                  (el) => el.value === filters.state.university_type.value
                )[0]
              }
              onChange={universityTypeFilterInputHandler}
              options={universityTypes}
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default UniversitiesFilterSidebarComponent;
