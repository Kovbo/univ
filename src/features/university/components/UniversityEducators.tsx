import { FC } from "react";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Educators } from "../models";

type UniversityFacultiesProps = {
  educators: [Educators];
};

export const UniversityEducators: FC<UniversityFacultiesProps> = ({
  educators,
}) => {
  const { t } = useTranslation();
  return (
    <Card className="mb-10">
      <Card.Header>
        <Card.Title>{t("Programs")}:</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="table-responsive">
          {/*begin::Table*/}
          <table className="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9">
            {/*begin::Thead*/}
            <thead className="border-gray-200 fs-5 fw-semibold bg-lighten">
              <tr>
                <th className="min-w-250px">{t("Specialty")}</th>
                <th className="min-w-100px">{t("Educational level")}</th>
                <th className="min-w-150px">{t("Name of the program")}</th>
                <th className="min-w-150px">{t("Full-time places")}</th>
                <th className="min-w-150px">{t("Part-time places")}</th>
              </tr>
            </thead>
            {educators.map((educator, index) => {
              return (
                <tbody key={index} className="fw-6 fw-semibold text-gray-600">
                  <tr>
                    <td>
                      <span className="text-hover-primary text-gray-800">
                        {educator.speciality_name}
                      </span>
                    </td>
                    <td>
                      <span className="badge badge-light-success fs-7 fw-bold">
                        {t(educator.qualification_group_name)}
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
};
