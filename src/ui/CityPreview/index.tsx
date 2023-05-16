import { Coordinates } from "@/data/city/types";
import { Flex, Text } from "@chakra-ui/react";

export type CityPreviewProps = {
  cityId: number;
  cityName: string;
  cityCoordinates: Coordinates;
};
export function CityPreview({
  cityId,
  cityName,
  cityCoordinates,
}: CityPreviewProps) {
  return (
    <Flex bg="white" justifyContent={"space-between"} p="2">
      <Text fontSize={"xl"}>{cityName}</Text>
      <Text>{10}deg</Text>
      <Text>
        coords lat:{cityCoordinates.lat}/{cityCoordinates.lon}
      </Text>
    </Flex>
  );
}
