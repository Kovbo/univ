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

export interface IPageBreadcrumbs {
  title: string;
  path: string;
}

export type PageData = {
  pageTitle: string;
  pageActionLink: string;
  pageActionTitle: string;
  pageBreadcrumbs?: Array<IPageBreadcrumbs>;
};

export interface IPageDataContext {
  state: PageData;
  dispatch: React.Dispatch<{ type: string; payload: unknown }>;
}

export const initiaPageData: PageData = {
  pageTitle: "",
  pageActionLink: "",
  pageActionTitle: "",
};
