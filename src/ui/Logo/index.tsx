import { Heading } from "@chakra-ui/react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <Heading py="10" textAlign={"center"}>
        WeatherApp 🌤
      </Heading>
    </Link>
  );
}
