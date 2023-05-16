import { Flex, Text } from "@chakra-ui/react";

export function WeatherPreview() {
  return (
    <Flex bg="white" justifyContent={"space-between"} p="2">
      <Text fontSize={"xl"}>Paris</Text>
      <Text fontSize={"xl"}>17deg</Text>
    </Flex>
  );
}
