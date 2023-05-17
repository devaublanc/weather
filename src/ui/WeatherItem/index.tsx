import { StarIcon } from "@chakra-ui/icons";
import { Flex, Text, Button, Icon, Img, Box, Link } from "@chakra-ui/react";

export type WeatherItemProps = {
  name: string;
  id: string;
  country: string;
  temperature?: number;
  coordinates: {
    lat: string;
    lon: string;
  };
  isFavorite?: boolean;
  icon?: string;
  onClick: (id: string) => void;
  onClickFavorite?: (id: string) => void;
  onClickRemoveFavorite?: (id: string) => void;
};
export function WeatherItem({
  name,
  id,
  onClick,
  country,
  temperature,
  isFavorite = false,
  icon,
  onClickRemoveFavorite,
  coordinates,
  onClickFavorite,
}: WeatherItemProps) {
  return (
    <Flex borderBottomWidth={1} p="4" justifyContent={"space-between"}>
      <Box mx="2">
        <Link
          color={"blue.500"}
          onClick={() => onClick(id)}
          fontSize={"l"}
          fontWeight={"bold"}
        >
          {name}
        </Link>
        <Text fontSize={"sm"} color={"gray.400"}>
          {country} ({coordinates.lat}_{coordinates.lon})
        </Text>
      </Box>
      <Flex alignItems={"center"}>
        {icon !== undefined && (
          <Img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            width={10}
            height={10}
          />
        )}
        {temperature !== undefined && (
          <Text fontWeight={"bold"}>{Math.round(temperature)} °</Text>
        )}

        {onClickRemoveFavorite !== undefined && isFavorite && (
          <Button
            leftIcon={<StarIcon />}
            size={"xs"}
            mx="2"
            onClick={() => onClickRemoveFavorite(id)}
          >
            Unstar
          </Button>
        )}
        {onClickFavorite !== undefined && !isFavorite && (
          <Button
            leftIcon={<StarIcon />}
            size={"xs"}
            mx="2"
            onClick={() => onClickFavorite(id)}
          >
            Star
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
