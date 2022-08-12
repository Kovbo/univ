import axios, { AxiosResponse } from "axios";
import { IUniversity } from "../models";

const API_URL = process.env.REACT_APP_API_URL;

const getUniversity = (
  id: number | string | undefined
): Promise<IUniversity> => {
  return axios
    .get(`${API_URL}/university/?id=${id}&exp=json`)
    .then((response: AxiosResponse<IUniversity>) => response.data);
};

export { getUniversity };
