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
export interface PageData {
  pageTitle?: string;
  // setPageTitle: (_title: string) => void;
  pageActionLink?: string;
  // setPageActionLink: (_actionLink: string) => void;
  pageActionTitle?: string;
  // setPageActionTitle: (_actionTitle: string) => void;
}

export interface IPageDataContext {
  state: PageData;
  dispatch: React.Dispatch<{ type: string; payload: unknown }>;
}

export const initiaPageData: PageData = {
  pageTitle: "qweqwe",
  pageActionLink: "",
  pageActionTitle: "",
};
