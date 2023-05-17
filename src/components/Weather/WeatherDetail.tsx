import { useWeather } from "@/data/weather/hook";
import {
  Heading,
  Img,
  Spinner,
  Stack,
  Text,
  Flex,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";

export type WeatherDetailProps = {
  lat: string;
  lon: string;
};

export function WeatherDetail({ lat, lon }: WeatherDetailProps) {
  const { data, isLoading } = useWeather(lat, lon);

  if (isLoading) return <Loader />;
  const icon = data?.weather[0].icon;
  const temperature = data?.main.temp;

  return (
    <Flex flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
      <Heading fontSize={"xl"} textAlign={"center"}>
        {data?.name}
      </Heading>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          w={"80px"}
          h={"80px"}
        />
        {temperature !== undefined && (
          <Text fontSize={"xl"} fontWeight={"bold"}>
            {Math.round(temperature)} °
          </Text>
        )}
      </Flex>
      <Stack mb="4">
        <Text>Humidity : {data?.main.humidity}</Text>
        <Text>Feels like : {Math.round(data?.main.feels_like as number)}°</Text>
        <Text>Temp min : {Math.round(data?.main.temp_min as number)}°</Text>
        <Text>Temp max : {Math.round(data?.main.temp_max as number)}°</Text>
        <Text>Clouds : {data?.clouds.all}%</Text>
      </Stack>

      <Link href={`/`}>
        <ChakraLink
          as={"span"}
          color={"blue.500"}
          fontWeight={"bold"}
        >{`< Back to Home`}</ChakraLink>
      </Link>
    </Flex>
  );
}

const Loader = () => {
  return (
    <Flex justify={"center"}>
      <Spinner size={"xl"} />
    </Flex>
  );
};
