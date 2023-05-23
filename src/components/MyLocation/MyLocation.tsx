import { useMyLocation } from "@/hooks/useMyLocation";
import { WeatherItem } from "@/ui/WeatherItem";
import { Text, Flex, Heading, Spinner } from "@chakra-ui/react";

export function MyLocation() {
  const { isLoading, error, weather } = useMyLocation();

  return (
    <Flex flexDir={"column"} mt="10" mb="10" justifyContent={"center"}>
      <Heading
        textAlign={"center"}
        fontWeight={"bold"}
        fontSize={"2xl"}
        alignItems={"center"}
        mb="4"
      >
        📍 My Location
      </Heading>
      {error && <Text textAlign={"center"}>{error.message}</Text>}
      {isLoading && error === null && <Spinner alignSelf={"center"} />}
      {weather !== undefined && (
        <WeatherItem
          coordinates={weather.coord}
          href={`/city/${weather.coord.lat},${weather.coord.lon}`}
          icon={weather.weather[0].icon}
          temperature={weather.main.temp}
          country={weather.sys.country}
          id={`${weather.coord.lat}_${weather.coord.lon}`}
          name={weather.name}
        />
      )}
    </Flex>
  );
}
