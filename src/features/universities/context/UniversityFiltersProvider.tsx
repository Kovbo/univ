import { FC, createContext, useContext, useMemo, useReducer } from "react";
import { WithChildren } from "../../../models";
import {
  initialUniversitiesFilters,
  IUniversitiesFiltersContextType,
} from "../models";
import { filtersReducer } from "./FiltersReducer";

const FiltersContext = createContext<IUniversitiesFiltersContextType>({
  state: initialUniversitiesFilters,
  dispatch: () => null,
});

const UniversityFiltersProvider: FC<WithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(
    filtersReducer,
    initialUniversitiesFilters
  );

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <FiltersContext.Provider value={contextValue}>
      {children}
    </FiltersContext.Provider>
  );
};

const useUniversitiesFilters = () => useContext(FiltersContext);

export { UniversityFiltersProvider, useUniversitiesFilters };
