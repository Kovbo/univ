import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Select, { SingleValue } from "react-select";
import { FILTERS_ACTIONS } from "../context/FiltersActions";
import { useUniversitiesFilters } from "../context/UniversityFiltersProvider";
import useSelectableFilters from "../hooks/useSelectableFilters";

export function UniversitiesFilterSidebar() {
  const filters = useUniversitiesFilters();
  const { t } = useTranslation();
  const {
    selectedRegion,
    selectedUniversityType,
    regionsTranslated,
    universityTypesTranslated,
  } = useSelectableFilters();

  function regionFilterInputHandler(
    e: SingleValue<{ value: string; label: string }>
  ) {
    filters.dispatch({
      type: FILTERS_ACTIONS.REGION_UPDATE,
      payload: { value: e?.value, label: e?.label },
    });
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
    <Card className="mb-5">
      <Card.Header>
        <Card.Title>{t("Filters card title")}</Card.Title>
      </Card.Header>
      <div className="separator border-gray-200"></div>

      <Card.Body>
        <div className="mb-10">
          <label className="form-label fw-semobold">{t("Region")}:</label>

          <div>
            <Select
              value={selectedRegion}
              onChange={regionFilterInputHandler}
              options={regionsTranslated}
            />
          </div>
        </div>

        <div className="mb-10">
          <label className="form-label fw-semobold">
            {t("University type")}:
          </label>

          <div>
            <Select
              value={selectedUniversityType}
              onChange={universityTypeFilterInputHandler}
              options={universityTypesTranslated}
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
