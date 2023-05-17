import { StarIcon } from "@chakra-ui/icons";
import { Flex, Text, Button, Icon, Img } from "@chakra-ui/react";
import Image from "next/image";
import { TiWeatherPartlySunny } from "react-icons/ti";

export type CityItemProps = {
  cityName: string;
  cityId: number;
  temperature?: number;
  isFavorite?: boolean;
  imageId?: string;
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
  imageId,
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
        <>
          {imageId !== undefined && (
            <Img
              src={`https://openweathermap.org/img/wn/${imageId}@2x.png`}
              width={10}
              height={10}
            />
          )}
          {temperature !== undefined && <Text fontWeight={"bold"}>32 °</Text>}
        </>
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
