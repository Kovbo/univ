import { Response } from "../../../models";
import { regions, universityTypes } from "../api/filters";

const defaultFilters = {
  region_id: "80",
  university_type: "1",
};

export type UniversitiesFiltersType = {
  region: { value: string; label: string };
  university_type: { value: string; label: string };
};

export const initialUniversitiesFilters: UniversitiesFiltersType = {
  region: regions.filter((el) => el.value === defaultFilters.region_id)[0],
  university_type: universityTypes.filter(
    (el) => el.value === defaultFilters.university_type
  )[0],
};

export interface IUniversitiesFiltersContextType {
  state: UniversitiesFiltersType;
  dispatch: React.Dispatch<{ type: string; payload: unknown }>;
}

export interface IUniversities {
  university_name: string;
  university_id: string;
  university_parent_id: string;
  university_short_name: string;
  university_name_en: string;
  is_from_crimea: string;
  registration_year: string;
  university_edrpou: string;
  university_type_name: string;
  university_financing_type_name: string;
  university_governance_type_name: string;
  post_index: string;
  katottgcode: string;
  region_name: string;
  koatuu_name: string;
  university_address: string;
  post_index_u: string;
  katottgcodeu: string;
  region_name_u: string;
  koatuu_name_u: string;
  university_address_u: string;
  university_phone: string;
  university_email: string;
  university_site: string;
  university_director_post: string;
  university_director_fio: string;
  close_date: string;
  primitki?: string;
}

export type UniversitiesQueryResponse = Response<Array<IUniversities>>;
