import { FavoriteItem } from "@/components/Favorites/FavoriteItem";
import { Weather } from "@/data/weather/types";
import { Stack } from "@chakra-ui/react";

export const FavoritesList = function ({ weathers }: { weathers: Weather[] }) {
  return (
    <Stack>
      {weathers.map((weather, key) => (
        <FavoriteItem
          lat={weather.coord.lat}
          lon={weather.coord.lon}
          key={`city_${weather.id}_${key}`}
        />
      ))}
    </Stack>
  );
};
