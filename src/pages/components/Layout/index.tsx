import { Box, Flex } from "@chakra-ui/react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex justifyContent={"center"} flex={1} height={"100vh"}>
      <Flex
        alignItems={"center"}
        flexDir={"column"}
        flex={1}
        bg="red"
        maxWidth={760}
      >
        <header>
          <Box fontSize={"3xl"} fontWeight={"bold"} as="span">
            Weather
          </Box>
        </header>

        <main>{children}</main>
      </Flex>
    </Flex>
  );
}
