export interface UniversityProps {
  university: IUniversity;
}

export interface IUniversity {
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
  branches: [];
  facultets: [];
  educators: [
    {
      specialization_name: string;
      speciality_code: number;
      qualification_group_name: string;
      speciality_name: string;
      full_time_count: number;
      part_time_count: number;
    }
  ];
  profession_educators: [];
  profession_licenses: [];
  speciality_licenses: [];
}
