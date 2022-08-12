import {
  createContext,
  FC,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from "react";
import {
  initiaPageData,
  IPageBreadcrumbs,
  IPageDataContext,
  WithChildren,
} from "../models";
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
  {
    actionTitle?: string;
    actionLink?: string;
    pageBreadcrumbs?: Array<IPageBreadcrumbs>;
  } & WithChildren
> = ({ children, actionTitle, actionLink, pageBreadcrumbs }) => {
  //I use Ref in order to prevent infilite reloads loop inside useEffect.
  const pageDataRef = useRef(usePageData());

  useEffect(() => {
    //Eslint suggests to use variable because the
    const pageData = pageDataRef.current;

    pageData.dispatch({
      type: PAGE_DATA_ACTIONS.SET_PAGE_DATA,
      payload: {
        pageTitle: children ?? "",
        pageActionTitle: actionTitle ?? "",
        pageActionLink: actionLink ?? "",
        pageBreadcrumbs: pageBreadcrumbs ?? "",
      },
    });

    return () => {
      pageData.dispatch({
        type: PAGE_DATA_ACTIONS.SET_PAGE_DATA,
        payload: {
          pageTitle: "",
          pageActionTitle: "",
          pageActionLink: "",
          pageBreadcrumbs: null,
        },
      });
    };
  }, [children, actionLink, actionTitle, pageBreadcrumbs]);

  return <></>;
};

export { PageDataProvider, PageTitle, usePageData };
