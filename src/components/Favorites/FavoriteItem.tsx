import { useWeather } from "@/data/weather/hook";
import { useFavoritesCity } from "@/stores/favoritesStore";
import { WeatherItem } from "@/ui/WeatherItem";
import { Spinner, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback } from "react";

export type FavoriteCityProps = {
  lat: string;
  lon: string;
};
export function FavoriteItem({ lat, lon }: FavoriteCityProps) {
  const { data: weather, isLoading } = useWeather(lat, lon);
  const { removeFavorite } = useFavoritesCity();
  const router = useRouter();
  const toast = useToast();
  const onClickRemoveFavorite = useCallback(() => {
    if (!weather?.coord.lat || !weather?.coord.lon) return;
    removeFavorite(`${weather.coord.lat}_${weather.coord.lon}`);
    toast({
      title: "Favorite removed",
      colorScheme: "green",
      description: `${weather.name} removed from your favorites.`,
      duration: 3000,
      isClosable: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weather?.coord.lat, weather?.coord.lon, removeFavorite]);

  if (isLoading) return <Spinner />;
  if (!weather) return null;

  return (
    <WeatherItem
      isFavorite
      country={weather.sys.country}
      name={weather.name}
      icon={weather.weather[0].icon}
      onClickRemoveFavorite={onClickRemoveFavorite}
      id={`${weather.coord.lat}_${weather.coord.lon}`}
      temperature={weather.main.temp}
      onClick={() => {
        router.push(`/city/${weather.coord.lat},${weather.coord.lon}`);
      }}
    />
  );
}
