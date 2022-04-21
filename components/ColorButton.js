import { IconButton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { themePalette } from "../Redux/actions/doing";
import makeTheme from "../styles/makeTheme";

export default function ColorButton({ color, title }) {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <IconButton
      onClick={() => {themePalette(title)}}
      sx={{
        // backgroundColor: color,
        backgroundColor: color,
        "&:hover": { backgroundColor: color },
        width: "40px",
        height: "40px",
      }}
    ></IconButton>
  );
}
