import { UniversitiesFiltersType } from "../models";
import { FILTERS_ACTIONS } from "./FiltersActions";

export function filtersReducer(
  state: UniversitiesFiltersType,
  action: { type: any; payload: any }
): UniversitiesFiltersType {
  switch (action.type) {
    case FILTERS_ACTIONS.REGION_UPDATE:
      return {
        university_type: state.university_type,
        region: (state.region = {
          value: action.payload.value,
          label: action.payload.label,
        }),
      };
    case FILTERS_ACTIONS.TYPE_UPDATE:
      return {
        region: state.region,
        university_type: (state.university_type = {
          value: action.payload.value,
          label: action.payload.label,
        }),
      };
  }

  return state;
}
