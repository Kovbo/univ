export type Response<T> = {
  data?: T;
  payload?: {
    message?: string;
    errors?: {
      [key: string]: Array<string>;
    };
    pagination?: any;
  };
};
export type UniversitiesFilters = {
  region: number | null;
  value: string;
};

export type Universities = {
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
};

export type UniversitiesQueryResponse = Response<Array<Universities>>;
