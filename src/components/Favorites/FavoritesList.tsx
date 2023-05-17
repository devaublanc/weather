import { FavoriteItem } from "@/components/Favorites/FavoriteItem";
import { Weather } from "@/data/weather/types";
import { Stack } from "@chakra-ui/react";

export const FavoritesList = function ({
  favoritesWeather,
}: {
  favoritesWeather: Weather[];
}) {
  return (
    <Stack>
      {favoritesWeather.map((weather, key) => (
        <FavoriteItem
          name={weather.name}
          lat={weather.coord.lat}
          lon={weather.coord.lon}
          key={`city_${weather.id}_${key}`}
        />
      ))}
    </Stack>
  );
};
