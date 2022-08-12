import React, { FC, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UniversityProps } from "../models";

export const UniversityInfoComponent: FC<UniversityProps> = ({
  university,
}) => {
  console.log(university);

  const typesMap: { [key: string]: number } = {
    "Заклад вищої освіти": 1,
    "Заклади професійної (професійно-технічної) освіти": 2,
    "Заклади фахової передвищої освіти": 9,
    "Наукові інститути (установи)": 8,
  };

  const [showEducators, setShowEducators] = useState(true);
  const [showFaculties, setShowFaculties] = useState(false);

  function switchTab(type: string) {
    if (type === "educators") {
      setShowEducators(true);
      setShowFaculties(false);
    }
    if (type === "faculties") {
      setShowEducators(false);
      setShowFaculties(true);
    }
  }
  const facultiesElement = (
    <Card className="mb-10">
      <Card.Header>
        <Card.Title>Список факультетів:</Card.Title>
      </Card.Header>
      <Card.Body>
        <Row>
          {university.facultets.map((fac) => {
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

  const educatorsElement = (
    <Card className="mb-10">
      <Card.Header>
        <Card.Title>Освітні програми:</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="table-responsive">
          {/*begin::Table*/}
          <table className="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9">
            {/*begin::Thead*/}
            <thead className="border-gray-200 fs-5 fw-semibold bg-lighten">
              <tr>
                <th className="min-w-250px">Спеціальність</th>
                <th className="min-w-100px">Освітній рівень</th>
                <th className="min-w-150px">Назва програми</th>
                <th className="min-w-150px">К-ть міць (денна форма)</th>
                <th className="min-w-150px">К-ть міць (заочна форма)</th>
              </tr>
            </thead>
            {university.educators.map((educator, index) => {
              return (
                <tbody key={index} className="fw-6 fw-semibold text-gray-600">
                  <tr>
                    <td>
                      <a href="#" className="text-hover-primary text-gray-800">
                        {educator.speciality_name}
                      </a>
                    </td>
                    <td>
                      <span className="badge badge-light-success fs-7 fw-bold">
                        {educator.qualification_group_name}
                      </span>
                    </td>
                    <td>{educator.specialization_name}</td>
                    <td>{educator.full_time_count}</td>
                    <td>{educator.part_time_count}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </Card.Body>
    </Card>
  );

  return (
    <>
      <Card key={university.university_id} className="mb-5 university">
        <Card.Body className="pt-9 pb-0">
          <div className="d-flex flex-wrap flex-sm-nowrap mb-6">
            <div className="d-flex flex-center flex-shrink-0 bg-light rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4">
              <img
                className="mw-50px mw-lg-75px"
                src={`/university_type/${
                  typesMap[university.university_type_name] || 1
                }.png`}
                alt="university_type"
              />
            </div>
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-1">
                    <Link
                      to={"/universities/" + university.university_id}
                      className="text-gray-800 text-hover-primary fs-2 fw-bold me-3"
                    >
                      {university.university_name}
                    </Link>
                  </div>
                  <div className="d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-600">
                    {university.university_short_name}
                  </div>
                  <div className="d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-600">
                    {university.university_type_name}
                  </div>
                  <div className="d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-600">
                    Факультетів: {university.facultets.length}
                  </div>
                  <div className="d-flex flex-wrap fw-semibold mb-4 fs-5 pb-5 text-gray-600">
                    Світніх програм: {university.educators.length}
                  </div>
                  <div className="d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-600">
                    {university.university_phone}
                  </div>
                  <div className="d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-600">
                    {university.university_email}
                  </div>
                  <div className="d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-600">
                    {university.university_director_post}:{" "}
                    {university.university_director_fio}{" "}
                  </div>
                  <div className="d-flex flex-wrap fw-semibold mb-4 fs-5 text-primary">
                    {university.university_site}
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap justify-content-start">
                <div className="d-flex flex-wrap">
                  <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="fs-4 fw-bold">
                        {university.koatuu_name_u}
                      </div>
                    </div>
                    <div className="fw-semibold fs-6 text-gray-400">Місто</div>{" "}
                  </div>
                  <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="fs-4 fw-bold">
                        {university.university_address_u}
                      </div>
                    </div>
                    <div className="fw-semibold fs-6 text-gray-400">Адреса</div>{" "}
                  </div>
                  <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="fs-4 fw-bold">
                        {university.registration_year}
                      </div>
                    </div>
                    <div className="fw-semibold fs-6 text-gray-400">
                      Рік заснування
                    </div>
                  </div>
                  <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="fs-4 fw-bold">
                        {university.university_financing_type_name}
                      </div>
                    </div>
                    <div className="fw-semibold fs-6 text-gray-400">
                      Власність
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex overflow-auto h-55px">
                <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold flex-nowrap">
                  <li
                    className="nav-item"
                    onClick={() => switchTab("educators")}
                  >
                    <h3
                      className={`nav-link text-active-primary me-6 false ${
                        showEducators && "active"
                      }`}
                    >
                      Освітні програми
                    </h3>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => switchTab("faculties")}
                  >
                    <h3
                      className={`nav-link text-active-primary me-6 false ${
                        showFaculties && "active"
                      }`}
                    >
                      Факультети
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>

      {showFaculties && facultiesElement}

      {showEducators && educatorsElement}
    </>
  );
};
