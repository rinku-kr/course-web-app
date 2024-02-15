
import { ColorModeScript } from "@chakra-ui/react";
import React, { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

// Extend the theme!
const colors = {
  primary: {
    900: "#1C4532",
    800: "#22543D",
    700: "#276749",
    600: "#2F855A",
    500: "#38A169",
    400: "#48BB78",
  },
  secondary: {
    900: "#5F370E",
    800: "#744210",
    700: "#975A16",
    600: "#B7791F",
    500: "#D69E2E",
    400: "#ECC94B",
  }
};
 const fonts ={
    body: "Raleway, system-ui, sans-serif",
    heading: "Raleway, serif",
  }

const theme = extendTheme({ colors, fonts });

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <App />
    </ChakraProvider>
  </StrictMode>
);
