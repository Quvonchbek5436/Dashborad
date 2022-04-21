import { createTheme } from "@mui/material";

const palettes = {
  BLUE_THEME: {
    primary: {
      main: "#0080f5",
    },
    secondary: {
      main: "#3800b7",
    },
    danger: {
      main: "#fc4972",
    },
    success: {
      main: "#00d395",
    },
    // info: {
    //   main: "",
    // },
    warning: {
      main: "#ffd402",
    },
    blur: {
      main: "rgba(151,209,251,0.3)",
    },
  },
  GREEN_THEME: {
    primary: {
      main: "#00dac5",
    },
    secondary: {
      main: "#006d74",
    },
    danger: {
      main: "#fc4972",
    },
    success: {
      main: "#00d395",
    },

    warning: {
      main: "#ffd402",
    },
    blur: {
      main: "rgba(112,243,232,0.3)",
    },
  },
  PURPLE_THEME: {
    primary: {
      main: "#9500fe",
    },
    secondary: {
      main: "#52008d",
    },
    danger: {
      main: "#fc4972",
    },
    success: {
      main: "#00d395",
    },
    warning: {
      main: "#ffd402",
    },
    blur: {
      main: "rgba(211,165,255,0.3)",
    },
  },
  RED_THEME: {
    primary: {
      main: "#ff008a",
    },
    secondary: {
      main: "#6b004c",
    },
    danger: {
      main: "#fc4972",
    },
    success: {
      main: "#00d395",
    },
    warning: {
      main: "#ffd402",
    },
    blur: {
      main: "rgba(255,176,209,0.3)",
    },
  },
  INDIGO_THEME: {
    primary: {
      main: "#3800b7",
    },
    secondary: {
      main: "#1e1c7b",
    },
    danger: {
      main: "#fc4972",
    },
    success: {
      main: "#00d395",
    },
    warning: {
      main: "#ffd402",
    },
    blur: {
      main: "rgba(165,175,226,0.3)",
    },
  },
  ORANGE_THEME: {
    primary: {
      main: "#00d0d8",
    },
    secondary: {
      main: "#ff8b75",
    },
    danger: {
      main: "#fc4972",
    },
    success: {
      main: "#00d395",
    },
    warning: {
      main: "#ffd402",
    },
    blur: {
      main: "rgba(118,239,240,0.3)",
    },
  },
};

const makeTheme = (mode, color) =>
  createTheme({
    mode,
    palette: {
      text: {
        dark: "#2a2021",
        secondary: "#a6a6a6",
        white: "white",
      },
      primary: {
        main: "#00d395",
      },
      ...palettes[color],
    },
    shape: {
      borderRadius: "6px",
    },
    typography: {
      fontFamily: "Dm Sans, sans-serif",
    },
  });
export default makeTheme;
