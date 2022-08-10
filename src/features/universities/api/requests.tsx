import axios, { AxiosResponse } from "axios";
import {
  IUniversitiesFiltersContextType,
  UniversitiesQueryResponse,
} from "../models";

const API_URL = process.env.REACT_APP_API_URL;

const getUniversities = (
  filters: IUniversitiesFiltersContextType
): Promise<UniversitiesQueryResponse[]> => {
  return axios
    .get(
      `${API_URL}/universities/?ut=${
        filters.state.university_type.value ?? ""
      }&lc=${filters.state.region.value ?? ""}&exp=json`
    )
    .then((d: AxiosResponse<UniversitiesQueryResponse[]>) => d.data);
};

// const getUniversityById = (id: ID): Promise<University | undefined> => {
//     return axios
//       .get(`${API_URL}/${id}`)
//       .then((response: AxiosResponse<Response<University>>) => response.data)
//       .then((response: Response<University>) => response.data)
//   }

export { getUniversities };
