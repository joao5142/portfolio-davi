import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/globalStyle";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/styles/theme";

import "react-loading-skeleton/dist/skeleton.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />

      <GlobalStyles />
    </ThemeProvider>
  );
}
