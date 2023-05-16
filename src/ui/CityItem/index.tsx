import { StarIcon } from "@chakra-ui/icons";
import { Flex, Text, Button, Icon } from "@chakra-ui/react";
import { TiWeatherPartlySunny } from "react-icons/ti";

export type CityItemProps = {
  cityName: string;
  cityId: number;
  temperature?: number;
  isFavorite?: boolean;
  onClick: (cityId: number) => void;
  onClickFavorite?: (cityId: number) => void;
  onClickRemoveFavorite?: (cityId: number) => void;
};
export function CityItem({
  cityName,
  cityId,
  onClick,
  temperature,
  isFavorite = false,
  onClickRemoveFavorite,
  onClickFavorite,
}: CityItemProps) {
  return (
    <Flex
      cursor={"pointer"}
      onClick={() => onClick(cityId)}
      borderBottomWidth={1}
      p="4"
      justifyContent={"space-between"}
    >
      <Flex alignItems={"center"} mx="2">
        <Text fontSize={"l"} fontWeight={"bold"} mr="2">
          {cityName}
        </Text>
        {temperature !== undefined && (
          <>
            <Icon as={TiWeatherPartlySunny} w={8} h={8} color="red.500" />
            <Text fontWeight={"bold"}>32 °</Text>
          </>
        )}
      </Flex>
      <Flex>
        {onClickRemoveFavorite !== undefined && isFavorite && (
          <Button
            leftIcon={<StarIcon />}
            size={"xs"}
            mx="1"
            onClick={() => onClickRemoveFavorite(cityId)}
          >
            Unstar
          </Button>
        )}
        {onClickFavorite !== undefined && !isFavorite && (
          <Button
            leftIcon={<StarIcon />}
            size={"xs"}
            mx="1"
            onClick={() => onClickFavorite(cityId)}
          >
            Star
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
