import { useQuery } from "@tanstack/react-query";

import { City } from "./types";
import { fetchCity } from "./queries";

export function useSearchCity(cityName: string) {
  return useQuery<City[]>(["city", cityName], () => fetchCity(cityName), {});
}
