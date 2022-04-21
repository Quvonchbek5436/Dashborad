import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { FiMoreHorizontal } from "react-icons/fi";

export default function ActionHeader({ name }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography sx={{ fontSize: "21px", fontWeight: "500" }}>
        {name}
      </Typography>
      <IconButton>
        <FiMoreHorizontal />
      </IconButton>
    </Box>
  );
}
