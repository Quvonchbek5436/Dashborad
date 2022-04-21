import { Grid, Paper, IconButton, Typography } from "@mui/material";
import React from "react";
import { FiUsers, FiPackage, FiRefreshCw, FiBarChart } from "react-icons/fi";

function createData(icon, tcolor, bgColor, bigNum, change, changeColor, text) {
  return { icon, tcolor, bgColor, bigNum, change, changeColor, text };
}
const datas = [
  createData(
    <FiUsers />,
    "#15e8ea",
    "#defcfb",
    "39,354",
    "-9",
    "red",
    "Customers"
  ),
  createData(
    <FiPackage />,
    "#ffd402",
    "#fff6e5",
    "4,396",
    "+23",
    "green",
    "Products"
  ),
  createData(
    <FiBarChart />,
    "#fc4972",
    "#fff1f5",
    "39,354",
    "+38",
    "green",
    "Sales"
  ),
  createData(
    <FiRefreshCw />,
    "#00d395",
    "#e5fdf2",
    "835",
    "-12",
    "red",
    "Refunds"
  ),
];

export default function FourCard() {
  return (
    <Paper sx={{ p: 4, borderRadius: "10px" }}>
      <Grid container spacing={2}>
        {datas.map((data,index) => (
          <Grid key={index} item md={3} xs={6}>
            <IconButton
              sx={{
                color: data.tcolor,
                backgroundColor: data.bgColor,
                width: "55px",
                height: "55px",
              }}
            >
              {data.icon}
            </IconButton>
            <Typography
              color="text.dark"
              sx={{ fontSize: "21px", fontWeight: "500", mt: 2, mb: 0 }}
            >
              {data.bigNum}
              <Typography
                component="span"
                variant="span"
                color={data.changeColor}
                sx={{ fontSize: "12px", fontWeight: "400", marginLeft: "8px" }}
              >
                {data.change} %
              </Typography>
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "400" }}
              color="text.secondary"
            >
              {data.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
