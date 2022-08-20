import { useQuery } from "@tanstack/react-query";
import { getUniversities } from "../api/requests";
import { IUniversitiesFiltersContextType } from "../models";

export default function useUniversities(
  filters: IUniversitiesFiltersContextType
) {
  return useQuery(
    [
      `universities_${filters.state.region.value}_${filters.state.university_type.value}`,
    ],
    () => getUniversities(filters),
    {
      cacheTime: 0,
      keepPreviousData: false,
      refetchOnWindowFocus: false,
    }
  );
}
