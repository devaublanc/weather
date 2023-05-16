import { City } from "@/data/city/types";

import { Text, Flex, Spinner } from "@chakra-ui/react";

export type CityListProps = {
  cities: City[];
  onClickCity: (city: City) => void;
  isLoading: boolean;
  onClickFavorite: (city: City) => void;
};
export function CityList({
  cities,
  onClickCity,
  onClickFavorite,
  isLoading,
}: CityListProps) {
  return (
    <Flex flexDir={"column"} alignItems={"stretch"} p="2" w="100%">
      {isLoading && <Spinner />}
      {cities.length === 0 && !isLoading && (
        <Text textAlign={"center"}>No cities found</Text>
      )}
      {cities.map((city, key) => {
        return (
          <Flex
            onClick={() => onClickCity(city)}
            cursor={"pointer"}
            align={"center"}
            justifyContent={"space-between"}
            p="2"
            marginY={"2"}
            key={`city_${city.id}_${key}`}
            borderBottom={"1px"}
            borderColor={"gray.200"}
          >
            {city.name}
            <Text color={"blue.500"} onClick={() => onClickFavorite(city)}>
              Add to favorites
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
}
