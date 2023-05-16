import { useFavorites } from "@/stores/favoritesStore";
import { CityPreview } from "@/ui/CityPreview";
import { Box, Text } from "@chakra-ui/react";

export function Favorites() {
  const { cities } = useFavorites();
  console.log("=======cotu", cities);
  return (
    <Box m="2">
      <Text fontWeight={"bold"} fontSize={"xl"}>
        Favorites
      </Text>
      {cities.map(city => {
        return (
          <CityPreview
            key={`city_${city.id}`}
            cityName={city.name}
            cityId={city.id}
            cityCoordinates={city.coord}
          />
        );
      })}
    </Box>
  );
}
