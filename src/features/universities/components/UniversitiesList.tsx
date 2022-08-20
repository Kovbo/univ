import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading";
import { useUniversitiesFilters } from "../context/UniversityFiltersProvider";
import useUniversities from "../hooks/useUniversities";
import higher_img from "../../../assets/images/university_type/1.png";
import professional_img from "../../../assets/images/university_type/2.png";
import prehigher_img from "../../../assets/images/university_type/9.png";
import institution_img from "../../../assets/images/university_type/8.png";
import { useTranslation } from "react-i18next";

export function UniversitiesList() {
  const filters = useUniversitiesFilters();
  const { t, i18n } = useTranslation();

  const imagesMap: { [key: string]: any } = {
    "1": higher_img,
    "2": professional_img,
    "9": prehigher_img,
    "8": institution_img,
  };

  const { isLoading, error, data: universities } = useUniversities(filters);

  if (error) return <Card>{t("Loading error")}</Card>;

  const univsCards = universities?.map((univ: any) => {
    // if (univ.close_date || !univ.university_name_en) return;

    return (
      !univ.close_date &&
      univ.university_name_en && (
        <Card key={univ.university_id} className="mb-5 university">
          <Card.Body className="pt-9 pb-0">
            <div className="d-flex flex-wrap flex-sm-nowrap mb-6">
              <div className="d-flex flex-center flex-shrink-0 bg-light rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4">
                <img
                  className="mw-50px mw-lg-75px"
                  src={imagesMap[filters.state.university_type.value]}
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
                        {i18n.language === "en"
                          ? univ.university_name_en
                          : univ.university_name}
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
                        <div className="fs-4 fw-bold">
                          {t(univ.koatuu_name_u)}
                        </div>
                      </div>
                      <div className="fw-semibold fs-6 text-gray-400">
                        {t("City")}
                      </div>{" "}
                    </div>
                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                      <div className="d-flex align-items-center">
                        <div className="fs-4 fw-bold">
                          {univ.university_address_u}
                        </div>
                      </div>
                      <div className="fw-semibold fs-6 text-gray-400">
                        {t("Address")}
                      </div>{" "}
                    </div>
                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                      <div className="d-flex align-items-center">
                        <div className="fs-4 fw-bold">
                          {univ.registration_year}
                        </div>
                      </div>
                      <div className="fw-semibold fs-6 text-gray-400">
                        {t("Established in")}
                      </div>
                    </div>
                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                      <div className="d-flex align-items-center">
                        <div className="fs-4 fw-bold">
                          {t(univ.university_financing_type_name)}
                        </div>
                      </div>
                      <div className="fw-semibold fs-6 text-gray-400">
                        {t("Ownership")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      )
    );
  });

  return <div>{isLoading ? <Loading /> : univsCards}</div>;
}
