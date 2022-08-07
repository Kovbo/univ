import React from "react";
import { Card } from "react-bootstrap";
import Select from "react-select";
import regions from "../api/filters";

function UniversitiesFilterSidebar() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

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
            <Select options={regions} />
          </div>
        </div>

        <div className="mb-10">
          <label className="form-label fw-semobold">Тип власності:</label>

          <div className="d-flex">
            <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
              <input className="form-check-input" type="checkbox" value="1" />
              <span className="form-check-label">Державні</span>
            </label>

            <label className="form-check form-check-sm form-check-custom form-check-solid">
              <input
                className="form-check-input"
                type="checkbox"
                value="2"
                defaultChecked={true}
              />
              <span className="form-check-label">Приватні</span>
            </label>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default UniversitiesFilterSidebar;
