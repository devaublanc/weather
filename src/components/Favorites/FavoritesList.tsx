import { useFavorites } from "@/stores/favoritesStore";
import { FavoriteItem } from "@/components/Favorites/FavoriteItem";
import { Box, Text, Heading } from "@chakra-ui/react";

export function FavoritesList() {
  const { cities } = useFavorites();
  return (
    <Box m="2">
      <Heading fontWeight={"bold"} fontSize={"xl"} alignItems={"center"} mb="2">
        Favorites
      </Heading>
      {cities.length === 0 && <Text>No favorites yet...</Text>}
      {cities.map((city, key) => {
        return (
          <FavoriteItem
            key={`city_${city.id}_${key}`}
            cityName={city.name}
            cityId={city.id}
          />
        );
      })}
    </Box>
  );
}
