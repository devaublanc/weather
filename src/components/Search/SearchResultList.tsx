import { City } from "@/data/city/types";
import { useFavoritesCity } from "@/stores/favoritesStore";
import { WeatherItem } from "@/ui/WeatherItem";

import { Text, Flex, Spinner, useToast } from "@chakra-ui/react";
import { useCallback } from "react";

export type SearchResultList = {
  cities: City[];
  isLoading: boolean;
};
export function SearchResultList({ cities, isLoading }: SearchResultList) {
  const { addFavorite } = useFavoritesCity();
  const toast = useToast();

  const onAddCityToFavorite = useCallback(
    (city: City) => {
      addFavorite({
        coord: city.coord,
        id: `${city.coord.lat}_${city.coord.lon}`,
        name: city.name,
      });
      toast({
        title: "Favorite added",
        colorScheme: "green",
        description: `${city.name} added to your favorites.`,
        duration: 3000,
        isClosable: true,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [addFavorite]
  );

  return (
    <Flex flexDir={"column"} p="2" w="100%">
      {isLoading && <Spinner my="2" alignSelf={"center"} />}

      {cities.length === 0 && !isLoading && (
        <Text textAlign={"center"}>No cities found</Text>
      )}

      {cities.map((city, key) => {
        return (
          <WeatherItem
            onClick={() => {}}
            country={city.sys.country}
            onClickFavorite={() => onAddCityToFavorite(city)}
            id={`${city.coord.lat}_${city.coord.lon}`}
            name={city.name}
            key={`city_${city.id}_${key}`}
          />
        );
      })}
    </Flex>
  );
}
