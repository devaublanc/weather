import { StarIcon } from "@chakra-ui/icons";
import { Flex, Text, Button, Img, Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export type WeatherItemProps = {
  name: string;
  id: string;
  country: string;
  temperature?: number;
  href: string;
  coordinates: {
    lat: string;
    lon: string;
  };
  isFavorite?: boolean;
  prefetch?: boolean;
  icon?: string;
  onClickFavorite?: (id: string) => void;
  onClickRemoveFavorite?: (id: string) => void;
};
export function WeatherItem({
  name,
  id,
  country,
  temperature,
  isFavorite = false,
  icon,
  href,
  prefetch = true,
  onClickRemoveFavorite,
  coordinates,
  onClickFavorite,
}: WeatherItemProps) {
  return (
    <Flex borderBottomWidth={1} p="4" justifyContent={"space-between"}>
      <Box mx="2">
        <Link
          as={NextLink}
          prefetch={prefetch}
          href={href}
          color={"blue.500"}
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
