import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
