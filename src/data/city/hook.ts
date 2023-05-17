import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";

import { City } from "./types";
import { fetchCity } from "./queries";

export function useSearchCity(
  cityName: string,
  options?: UseQueryOptions<City[], unknown, City[], QueryKey>
) {
  return useQuery<City[]>(
    ["city", cityName],
    () => fetchCity(cityName),
    options
  );
}
