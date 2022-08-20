import { FC, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UniversityProps } from "../models";
import { UniversityEducators } from "./UniversityEducators";
import { UniversityFaculties } from "./UniversityFaculties";
import higher_img from "../../../assets/images/university_type/1.png";
import professional_img from "../../../assets/images/university_type/2.png";
import prehigher_img from "../../../assets/images/university_type/9.png";
import institution_img from "../../../assets/images/university_type/8.png";
import { useTranslation } from "react-i18next";

export const UniversityInfo: FC<UniversityProps> = ({ university }) => {
  const typesImagesMap: { [key: string]: any } = {
    "Заклад вищої освіти": higher_img,
    "Заклад професійної (професійно-технічної) освіти": professional_img,
    "Заклад фахової передвищої освіти": prehigher_img,
    "Наукові інститути (установи)": institution_img,
  };

  const TABS = {
    EDUCATORS: "educators",
    FACULTIES: "faculties",
  };

  const [activeTab, setActiveTab] = useState(TABS.EDUCATORS);
  const { t, i18n } = useTranslation();
  return (
    <>
      <Card key={university.university_id} className="mb-5 university">
        <Card.Body className="pt-9 pb-0">
          <div className="d-flex flex-wrap flex-sm-nowrap mb-6">
            <div className="d-flex flex-center flex-shrink-0 bg-light rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4">
              <img
                className="mw-50px mw-lg-75px"
                src={
                  typesImagesMap[university.university_type_name] || higher_img
                }
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
                      {i18n.language === "en"
                        ? university.university_name_en
                        : university.university_name}{" "}
                    </Link>
                  </div>
                  <div className="d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-600">
                    {university.university_short_name}
                  </div>
                  <div className="d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-600">
                    {t(university.university_type_name)}
                  </div>
                  <div className="d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-600">
                    {t("Faculties")}: {university.facultets.length}
                  </div>
                  <div className="d-flex flex-wrap fw-semibold mb-4 fs-5 pb-5 text-gray-600">
                    {t("Programs")}: {university.educators.length}
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
                        {t(university.koatuu_name_u)}
                      </div>
                    </div>
                    <div className="fw-semibold fs-6 text-gray-400">
                      {t("City")}
                    </div>{" "}
                  </div>
                  <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="fs-4 fw-bold">
                        {university.university_address_u}
                      </div>
                    </div>
                    <div className="fw-semibold fs-6 text-gray-400">
                      {t("Address")}
                    </div>{" "}
                  </div>
                  <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="fs-4 fw-bold">
                        {university.registration_year}
                      </div>
                    </div>
                    <div className="fw-semibold fs-6 text-gray-400">
                      {t("Established in")}
                    </div>
                  </div>
                  <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="fs-4 fw-bold">
                        {t(university.university_financing_type_name)}
                      </div>
                    </div>
                    <div className="fw-semibold fs-6 text-gray-400">
                      {t("Ownership")}
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex overflow-auto h-55px">
                <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold flex-nowrap">
                  <li
                    className="nav-item"
                    onClick={() => setActiveTab(TABS.EDUCATORS)}
                  >
                    <h3
                      className={`nav-link text-active-primary me-6 false ${
                        activeTab === TABS.EDUCATORS && "active"
                      }`}
                    >
                      {t("Programs")}
                    </h3>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => setActiveTab(TABS.FACULTIES)}
                  >
                    <h3
                      className={`nav-link text-active-primary me-6 false ${
                        activeTab === TABS.FACULTIES && "active"
                      }`}
                    >
                      {t("Faculties")}
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>

      {activeTab === TABS.FACULTIES && (
        <UniversityFaculties faculties={university.facultets} />
      )}

      {activeTab === TABS.EDUCATORS && (
        <UniversityEducators educators={university.educators} />
      )}
    </>
  );
};
