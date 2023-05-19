import { fetchWeather } from "@/data/weather/queries";
import { Weather } from "@/data/weather/types";
import { useFavoritesCity } from "@/stores/favoritesStore";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect, useMemo, useState } from "react";

export function useFavoritesWeather() {
  const { favorites } = useFavoritesCity();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  const prefetchWeather = useCallback(async () => {
    await Promise.all(
      favorites
        .filter(({ coord: { lat, lon } }) => {
          return !queryClient.getQueryData(["weather", lat, lon]);
        })
        .map(({ coord: { lat, lon } }) =>
          queryClient.prefetchQuery(["weather", lat, lon], () =>
            fetchWeather(lat, lon)
          )
        )
    );
  }, [favorites, queryClient]);

  const getWeatherData = useCallback(
    (lat: string, lon: string): Weather | undefined => {
      return queryClient.getQueryData(["weather", lat, lon]);
    },
    [queryClient]
  );

  useEffect(() => {
    if (favorites.length) {
      setIsLoading(true);
      prefetchWeather().then(() => setIsLoading(false));
    }
  }, [favorites, prefetchWeather]);

  const groupedWeatherList = useMemo(() => {
    const weatherSortedByTemp = favorites
      .map(({ name, coord: { lat, lon } }) => {
        const data = getWeatherData(lat, lon);

        // Always use coord and name from favorites, because mismatch can happen between search api and weather api
        if (data) {
          return {
            ...data,
            coord: {
              lat,
              lon,
            },
            name: name,
          };
        }
        return data;
      })
      .filter(weather => weather !== undefined && weather !== null)
      .sort((a, b) => (b as Weather).main.temp - (a as Weather).main.temp);

    const hottestWeather = weatherSortedByTemp.slice(
      0,
      Math.floor(weatherSortedByTemp.length / 2)
    ) as Weather[];
    const coldestWeather = weatherSortedByTemp.slice(
      weatherSortedByTemp.length / 2,
      weatherSortedByTemp.length
    ) as Weather[];
    return {
      hottestWeather,
      coldestWeather,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorites, isLoading, getWeatherData]);

  return {
    isLoading,
    groupedWeatherList,
  };
}
