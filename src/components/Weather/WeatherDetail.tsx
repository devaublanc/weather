import { useWeather } from "@/data/weather/hook";
import { Flex, Heading, Spinner } from "@chakra-ui/react";

export type WeatherDetailProps = {
  lat: string;
  lon: string;
};

export function WeatherDetail({ lat, lon }: WeatherDetailProps) {
  const { data, isLoading } = useWeather(lat, lon);

  if (isLoading) return <Loader />;

  return (
    <Flex justifyContent={"center"}>
      <Heading>{data?.name}</Heading>
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
