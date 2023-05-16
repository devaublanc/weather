import { Flex, Heading } from "@chakra-ui/react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex justifyContent={"center"} flex={1} height={"100vh"}>
      <Flex alignItems={"stretch"} flexDir={"column"} flex={1} maxWidth={760}>
        <header>
          <Heading py="10" textAlign={"center"}>
            Weather
          </Heading>
        </header>

        <main>{children}</main>
      </Flex>
    </Flex>
  );
}
