import { PageData } from "../models";
import { PAGE_DATA_ACTIONS } from "./PageDataActions";

export function pageDataReducer(
  state: PageData,
  action: { type: any; payload: any }
): PageData {
  switch (action.type) {
    case PAGE_DATA_ACTIONS.SET_PAGE_DATA:
      return {
        pageTitle: action.payload.pageTitle,
        pageActionTitle: action.payload.pageActionTitle,
        pageActionLink: action.payload.pageActionLink,
        pageBreadcrumbs: action.payload.pageBreadcrumbs,
      };
  }

  return state;
}
