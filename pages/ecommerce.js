import React from "react";
import { Grid, Box, Paper, Typography, IconButton } from "@mui/material";
import Earnings from "../components/cards/Earnings";
import FourCard from "../components/cards/FourCard";
import RevenueChart from "../components/charts/RevenueChart";
import { FiDollarSign, FiShoppingBag } from "react-icons/fi";

function ecommerce() {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={4}>
        <Grid item lg={4} xs={12}>
          <Earnings />
        </Grid>
        <Grid item lg={8} xs={12}>
          <FourCard />
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mt: 1 }}>
        <Grid item lg={8} xs={12}>
          <Paper sx={{ p: 4, borderRadius: "10px" }}>
            <RevenueChart />
          </Paper>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            height="100%"
          >
            <Paper sx={{ p: 4, borderRadius: "20px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "text.dark",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  Total Earnings
                </Typography>
                <IconButton
                  sx={{
                    backgroundColor: "error.main",
                    color: "text.white",
                  }}
                >
                  <FiDollarSign />
                </IconButton>
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: "black",
                    mt: "30px",
                    mb: "10px",
                    fontSize: "30px",
                    fontWeight: "500",
                  }}
                >
                  $93,438.78
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "text.secondary",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  Monthly Revenue
                </Typography>
              </Box>
            </Paper>
            <Paper sx={{ p: 4, borderRadius: "20px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "text.dark",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  Purchases
                </Typography>
                <IconButton
                  sx={{
                    backgroundColor: "primary.main",
                    color: "text.white",
                  }}
                >
                  <FiShoppingBag />
                </IconButton>
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: "black",
                    mt: "30px",
                    mb: "10px",
                    fontSize: "30px",
                    fontWeight: "500",
                  }}
                >
                  2,367
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "text.secondary",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  Monthly Sales
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ecommerce;
