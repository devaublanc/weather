import { City } from "@/data/city/types";
import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Spinner } from "@chakra-ui/react";

export type CityListProps = {
  cities: City[];
  onClickCity: (city: City) => void;
  isLoading: boolean;
  onStar: (city: City) => void;
};
export function CityList({
  cities,
  onClickCity,
  onStar,
  isLoading,
}: CityListProps) {
  return (
    <Box w="100%">
      {isLoading && <Spinner />}
      {cities.map(city => {
        return (
          <Flex
            onClick={() => onClickCity(city)}
            cursor={"pointer"}
            align={"center"}
            justifyContent={"space-between"}
            p="2"
            marginY={"2"}
            key={`city_${city.id}`}
            borderBottom={"1px"}
            borderColor={"gray.20"}
          >
            {city.name}
            <StarIcon onClick={() => onStar(city)} />
          </Flex>
        );
      })}
    </Box>
  );
}
