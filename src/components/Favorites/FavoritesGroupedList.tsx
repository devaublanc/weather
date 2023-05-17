import { Box, Text, Heading, Spinner, Flex } from "@chakra-ui/react";
import { useFavoritesWeather } from "@/hooks/useFavoritesWeather";
import { FavoritesList } from "./FavoritesList";

export function FavoritesGroupedLists() {
  const { isLoading, groupedWeatherList } = useFavoritesWeather();
  const hasNoResults =
    groupedWeatherList.hottestWeather.length === 0 &&
    groupedWeatherList.coldestWeather.length === 0;

  const shouldDisplaySubtitle =
    [...groupedWeatherList.hottestWeather, ...groupedWeatherList.coldestWeather]
      .length > 1;

  if (isLoading) {
    return (
      <Flex justifyContent={"center"}>
        <Spinner />
      </Flex>
    );
  }

  if (hasNoResults && !isLoading) {
    return <Text>No favorites yet...</Text>;
  }

  return (
    <Box m="2">
      <Heading
        textAlign={"center"}
        fontWeight={"bold"}
        fontSize={"xl"}
        alignItems={"center"}
        mb="2"
      >
        Favorites
      </Heading>

      {shouldDisplaySubtitle && (
        <Heading mt="4" fontSize={"l"}>
          Hottest
        </Heading>
      )}
      <FavoritesList weathers={groupedWeatherList.hottestWeather} />

      {shouldDisplaySubtitle && (
        <Heading mt="4" fontSize={"l"}>
          Coldest
        </Heading>
      )}
      <FavoritesList weathers={groupedWeatherList.coldestWeather} />
    </Box>
  );
}
