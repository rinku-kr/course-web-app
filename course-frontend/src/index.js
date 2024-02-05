
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
    900: "#63171B",
    800: "#822727",
    700: "#9B2C2C",
    600: "#C53030",
    500: "#E53E3E",
    400: "#F56565",
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
