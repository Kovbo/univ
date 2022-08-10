import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUniversitiesFilters } from "../context/UniversityFiltersProvider";
import useUniversities from "../hooks/useUniversities";

function UniversitiesListComponent() {
  const filters = useUniversitiesFilters();

  const { isLoading, error, data: universities } = useUniversities(filters);

  if (error) return <Card>Помилка при завантаження даних</Card>;

  const univsCards = universities?.map((univ: any) => {
    return (
      <Card key={univ.university_id} className="mb-5 university">
        <Card.Body className="pt-9 pb-0">
          <div className="d-flex flex-wrap flex-sm-nowrap mb-6">
            <div className="d-flex flex-center flex-shrink-0 bg-light rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4">
              {/* {filters.state.university_type === 1} */}
              <img
                className="mw-50px mw-lg-75px"
                src={`/university_type/${filters.state.university_type.value}.png`}
                alt="university_type"
              />
            </div>
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-1">
                    <Link
                      to={"/universities/" + univ.university_id}
                      className="text-gray-800 text-hover-primary fs-2 fw-bold me-3"
                    >
                      {univ.university_name}
                    </Link>
                  </div>
                  <div className="d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-400">
                    {univ.university_short_name}
                  </div>
                  <div className="d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-400">
                    {univ.university_phone}
                  </div>
                  <div className="d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-400">
                    {univ.university_email}
                  </div>
                  <div className="d-flex flex-wrap fw-semibold mb-4 fs-5 text-primary">
                    {univ.university_site}
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap justify-content-start">
                <div className="d-flex flex-wrap">
                  <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="fs-4 fw-bold">{univ.koatuu_name_u}</div>
                    </div>
                    <div className="fw-semibold fs-6 text-gray-400">Місто</div>{" "}
                  </div>
                  <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="fs-4 fw-bold">
                        {univ.university_address_u}
                      </div>
                    </div>
                    <div className="fw-semibold fs-6 text-gray-400">Адреса</div>{" "}
                  </div>
                  <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="fs-4 fw-bold">
                        {univ.registration_year}
                      </div>
                    </div>
                    <div className="fw-semibold fs-6 text-gray-400">
                      Рік заснування
                    </div>
                  </div>
                  <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="fs-4 fw-bold">
                        {univ.university_financing_type_name}
                      </div>
                    </div>
                    <div className="fw-semibold fs-6 text-gray-400">
                      Власність
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div>
      {isLoading ? (
        <Card className="d-flex flex-center">
          <Card.Body className="pt-10">Завантаження</Card.Body>
        </Card>
      ) : (
        univsCards
      )}
    </div>
  );
}

export default UniversitiesListComponent;
