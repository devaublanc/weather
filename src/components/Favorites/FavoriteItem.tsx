import { useWeather } from "@/data/weather/hook";
import { useFavoritesCity } from "@/stores/favoritesStore";
import { WeatherItem } from "@/ui/WeatherItem";
import { Spinner, useToast } from "@chakra-ui/react";

export type FavoriteCityProps = {
  lat: string;
  lon: string;
  name: string;
};
export function FavoriteItem({ lat, lon, name }: FavoriteCityProps) {
  const { data: weather, isLoading } = useWeather(lat, lon);
  const { removeFavorite } = useFavoritesCity();
  const toast = useToast();

  const onClickRemoveFavorite = () => {
    removeFavorite(`${lat}_${lon}`);
    toast({
      title: "Favorite removed",
      colorScheme: "green",
      description: `${name} removed from your favorites.`,
      duration: 3000,
      isClosable: true,
    });
  };

  if (isLoading) return <Spinner />;
  if (!weather) return null;

  return (
    <WeatherItem
      isFavorite
      coordinates={{
        lat,
        lon,
      }}
      country={weather.sys.country}
      name={name}
      icon={weather.weather[0].icon}
      onClickRemoveFavorite={onClickRemoveFavorite}
      id={`${weather.coord.lat}_${weather.coord.lon}`}
      temperature={weather.main.temp}
      href={`/city/${weather.coord.lat},${weather.coord.lon}`}
    />
  );
}
