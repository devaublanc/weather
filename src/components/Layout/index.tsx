import { Logo } from "@/ui/Logo";
import { Flex } from "@chakra-ui/react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex minH="100vh" justifyContent={"center"} flex={1} bg="gray.50">
      <Flex
        alignItems={"stretch"}
        flexDir={"column"}
        flex={1}
        maxWidth={500}
        px="4"
        bg="white"
        borderColor={"gray.300"}
        borderWidth={1}
        my={"4"}
        borderRadius={"lg"}
      >
        <header>
          <Logo />
        </header>

        <main>{children}</main>
      </Flex>
    </Flex>
  );
}
