import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import Meta from "../components/Meta";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Meta />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
