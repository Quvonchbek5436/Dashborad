import * as React from "react";
import { Box, Typography, Select, FormControl, MenuItem } from "@mui/material";

export default function ChartHeader({ chartName }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontSize: "21px", fontWeight: "500" }}>
        {chartName}
      </Typography>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">March, 2021</MenuItem>
          <MenuItem value={10}>April, 2021</MenuItem>
          <MenuItem value={20}>May, 2021</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
