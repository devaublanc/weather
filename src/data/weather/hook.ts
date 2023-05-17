import { useQuery } from "@tanstack/react-query";

import { Weather } from "./types";
import { fetchWeather } from "./queries";

export function useWeather(lat: number, lon: number) {
  return useQuery<Weather>(["weather", lat, lon], () => fetchWeather(lat, lon));
}
