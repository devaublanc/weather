import { Box, Text, Heading, Spinner, Flex, Divider } from "@chakra-ui/react";
import { useFavoritesWeather } from "@/hooks/useFavoritesWeather";
import { FavoritesList } from "./FavoritesList";

export function FavoritesGroupedLists() {
  const { isLoading, groupedWeatherList } = useFavoritesWeather();
  const hasNoResults =
    groupedWeatherList.hottestWeather.length === 0 &&
    groupedWeatherList.coldestWeather.length === 0;

  const favoritesCount = [
    ...groupedWeatherList.hottestWeather,
    ...groupedWeatherList.coldestWeather,
  ].length;

  const shouldDisplaySubtitle = favoritesCount > 1;

  if (hasNoResults && !isLoading) {
    return (
      <Text mt="10" mb="10" textAlign={"center"}>
        No favorites yet...
      </Text>
    );
  }

  return (
    <Box mt="10" mb="10">
      <Heading
        textAlign={"center"}
        fontWeight={"bold"}
        fontSize={"2xl"}
        alignItems={"center"}
        mb="4"
      >
        ⭐️ Favorites ({favoritesCount})
        {isLoading && <Spinner ml="2" size={"sm"} />}
      </Heading>

      {shouldDisplaySubtitle && (
        <Heading mt="10" textAlign={"center"} fontSize={"xl"}>
          🥵 Hottest
        </Heading>
      )}
      <FavoritesList favoritesWeather={groupedWeatherList.hottestWeather} />

      {shouldDisplaySubtitle && (
        <Heading mt="10" fontSize={"xl"} textAlign={"center"}>
          🥶 Coldest
        </Heading>
      )}
      <FavoritesList favoritesWeather={groupedWeatherList.coldestWeather} />
    </Box>
  );
}
