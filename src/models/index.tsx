import { ReactNode } from "react";

export type WithChildren = {
  children?: ReactNode;
};

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
