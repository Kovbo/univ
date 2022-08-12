import { useQuery } from "@tanstack/react-query";
import { getUniversity } from "../api/requests";

export default function useUniversity(id: string | number | undefined) {
  return useQuery([`university_${id}`], () => getUniversity(id), {
    cacheTime: 0,
    keepPreviousData: false,
    refetchOnWindowFocus: false,
  });
}
