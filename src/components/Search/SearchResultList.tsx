import { City } from "@/data/city/types";
import { useFavorites } from "@/stores/favoritesStore";
import { CityItem } from "@/ui/CityItem";

import { Text, Flex, Spinner } from "@chakra-ui/react";
import { useCallback } from "react";

export type SearchResultList = {
  cities: City[];
  isLoading: boolean;
};
export function SearchResultList({ cities, isLoading }: SearchResultList) {
  const { addCity } = useFavorites();

  const onAddCityToFavorite = useCallback(
    (city: City) => {
      addCity(city);
    },
    [addCity]
  );

  return (
    <Flex flexDir={"column"} p="2" w="100%">
      {isLoading && <Spinner my="2" alignSelf={"center"} />}

      {cities.length === 0 && !isLoading && (
        <Text textAlign={"center"}>No cities found</Text>
      )}

      {cities.map((city, key) => {
        return (
          <CityItem
            onClick={() => {}}
            onClickFavorite={() => onAddCityToFavorite(city)}
            cityId={city.id}
            cityName={city.name}
            key={`city_${city.id}_${key}`}
          />
        );
      })}
    </Flex>
  );
}
