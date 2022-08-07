import { useQuery } from "@tanstack/react-query";
import { UniversitiesFilters } from "../api/models";
import { getUniversities } from "../api/requests";

export default function useUniversities(filters: UniversitiesFilters) {
  return useQuery(["universities"], () => getUniversities(filters));
}
// export default function useUniversities(region: number | null) {
//   return useQuery(["universities"], () => getUniversities(region));
// }
