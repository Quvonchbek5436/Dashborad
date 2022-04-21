import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import makeTheme from "../styles/makeTheme";
import inputGlobalStyles from "../styles/GlobalStyle";

import { createContext, useState } from "react";
import { useSelector } from "react-redux";

export default function ThemeComponent({ children }) {
  const [mode, setMode] = useState("light");
  // const [color, setColor] = useState("BLUE_THEME");


  const color = useSelector((state) => state.darkMode.palettesKey)
  const state = useSelector((state) => state)

  const theme = makeTheme(mode, color);
  return (
    <ThemeProvider theme={theme}>
      {inputGlobalStyles(mode)}
      {children}
    </ThemeProvider>
  );
}
