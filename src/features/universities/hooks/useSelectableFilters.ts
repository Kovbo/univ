import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { regions, universityTypes } from "../api/filters";
import { FILTERS_ACTIONS } from "../context/FiltersActions";
import { useUniversitiesFilters } from "../context/UniversityFiltersProvider";

export default function useSelectableFilters() {
  const filters = useUniversitiesFilters();
  const { t } = useTranslation();

  //   Translate dropdown options
  const universityTypesTranslated = universityTypes.map((type) =>
    translateFilter(type)
  );
  const regionsTranslated = regions.map((region) => translateFilter(region));
  function translateFilter(item: { value: string; label: string }) {
    return {
      ...item,
      label: t(item.label),
    };
  }

  const [selectedRegion, setSelectedRegion] = useState(
    regionsTranslated.find((el) => el.value === filters.state.region.value)
  );
  const [selectedUniversityType, setSelectedUniversityType] = useState(
    universityTypesTranslated.find(
      (el) => el.value === filters.state.university_type.value
    )
  );

  //Setting selected filters based on URL query string
  const { search } = useLocation();
  const query = useMemo(() => new URLSearchParams(search), [search]);

  useEffect(() => {
    if (query.get("type")) {
      filters.dispatch({
        type: FILTERS_ACTIONS.TYPE_UPDATE,
        payload: {
          value: query.get("type"),
          label: universityTypes.find((el) => el.value === query.get("type"))
            ?.label,
        },
      });
    }
    if (query.get("region")) {
      filters.dispatch({
        type: FILTERS_ACTIONS.REGION_UPDATE,
        payload: {
          value: query.get("region"),
          label: regions.find((el) => el.value === query.get("region"))?.label,
        },
      });
    }
  });

  //Synchronizing selected options after updating state
  useEffect(() => {
    setSelectedRegion(
      regionsTranslated.find((el) => el.value === filters.state.region.value)
    );
    setSelectedUniversityType(
      universityTypesTranslated.find(
        (el) => el.value === filters.state.university_type.value
      )
    );
  }, [
    filters.state.region.value,
    filters.state.university_type.value,
    regionsTranslated,
    universityTypesTranslated,
  ]);

  return {
    selectedRegion,
    selectedUniversityType,
    regionsTranslated,
    universityTypesTranslated,
  };
}
