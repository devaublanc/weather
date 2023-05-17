import { useFavorites } from "@/stores/favoritesStore";
import { FavoriteItem } from "@/components/Favorites/FavoriteItem";
import { Box, Text, Heading } from "@chakra-ui/react";
import Link from "next/link";

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
          <Link
            href={`/city/${city.coord.lat},${city.coord.lon}`}
            key={`city_${city.id}_${key}`}
          >
            <FavoriteItem cityName={city.name} cityId={city.id} />
          </Link>
        );
      })}
    </Box>
  );
}
