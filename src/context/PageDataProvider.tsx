import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { initiaPageData, IPageDataContext, WithChildren } from "../models";
import { PAGE_DATA_ACTIONS } from "./PageDataActions";
import { pageDataReducer } from "./PageDataReducer";

const PageDataContext = createContext<IPageDataContext>({
  state: initiaPageData,
  dispatch: () => null,
});

const PageDataProvider: FC<WithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(pageDataReducer, initiaPageData);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <PageDataContext.Provider value={contextValue}>
      {children}
    </PageDataContext.Provider>
  );
};

const usePageData = () => useContext(PageDataContext);

const PageTitle: FC<
  { actionTitle?: string; actionLink?: string } & WithChildren
> = ({ children, actionTitle, actionLink }) => {
  const pageData = usePageData();

  useEffect(() => {
    pageData.dispatch({
      type: PAGE_DATA_ACTIONS.SET_PAGE_DATA,
      payload: {
        pageTitle: children ?? "",
        pageActionTitle: actionTitle ?? "",
        pageActionLink: actionLink ?? "",
      },
    });

    return () => {
      pageData.dispatch({
        type: PAGE_DATA_ACTIONS.SET_PAGE_DATA,
        payload: {
          pageTitle: "",
          pageActionTitle: "",
          pageActionLink: "",
        },
      });
    };
  }, [children]);

  //     if (children) {
  //       pageData.dispatch({
  //         type: PAGE_DATA_ACTIONS.SET_PAGE_TITLE,
  //         payload: children,
  //       });
  //     }
  //     return () => {
  //       pageData.dispatch({
  //         type: PAGE_DATA_ACTIONS.SET_PAGE_TITLE,
  //         payload: "",
  //       });
  //     };
  //   }, [children]);

  //   useEffect(() => {
  //     if (actionTitle) {
  //       pageData.dispatch({
  //         type: PAGE_DATA_ACTIONS.SET_ACTION_TITLE,
  //         payload: actionTitle,
  //       });
  //     }
  //     return () => {
  //       pageData.dispatch({
  //         type: PAGE_DATA_ACTIONS.SET_ACTION_TITLE,
  //         payload: "",
  //       });
  //     };
  //   }, [children]);

  //   useEffect(() => {
  //     if (actionTitle) {
  //       pageData.dispatch({
  //         type: PAGE_DATA_ACTIONS.SET_ACTION_LINK,
  //         payload: actionTitle,
  //       });
  //     }
  //     return () => {
  //       pageData.dispatch({
  //         type: PAGE_DATA_ACTIONS.SET_ACTION_LINK,
  //         payload: "",
  //       });
  //     };
  //   }, [children]);

  return <></>;
};

export { PageDataProvider, PageTitle, usePageData };
