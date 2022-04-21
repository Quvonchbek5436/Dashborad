import React from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
  Paper,
  Grid,
  Badge,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import RevenueChart from "../components/charts/RevenueChart";
import FullBarChart from "../components/charts/FullBarChart";
import CustomersLineChart from "../components/charts/CustomersLineChart";
import PieCharts from "../components/charts/PieCharts";
import { BartChart } from "../components/charts/BartChart";
import DoughnutChart from "../components/charts/DoughnutChart";
import DropDown from "../components/dropDown/DropDown";
import TableC from "../components/table/TableC";
import NewChart from "../components/charts/NewChart";
import CardWithImg from "../components/cards/CardWithImg";
import MixedChart from "../components/charts/MixedChart";
import Radar from "../components/charts/Radar";
import TimeLine from "../components/TimeLine";
import { FiShoppingBag, FiDollarSign } from "react-icons/fi";
import ChartHeader from "../components/charts/ChartHeader";
import ActionHeader from "../components/ActionHeader";
import SalesLineChart from "../components/charts/SalesLineChart";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: "white ",
  boxSizing: "border-box",
  padding: "30px",
  height: "100%",
  borderRadius: "20px",
  mb: 3,
  boxShadow: "0px 7px 30px 0px rgb(90 114 123 / 11%)",
  minHeight: "200px",
}));

const SpaceBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
});

const CustomBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  height: "100%",
});

const CenteredBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const SpacedBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const CustomIconButton = styled(IconButton)({
  backgroundColor: "primary.main",
  color: "text.white",
  "&:hover": { backgroundColor: "primary.main" },
});

const Modern = (props) => {
  return (
    <>
      <Box>
        <Grid container spacing={4} sx={{ mb: 3 }}>
          <Grid item lg={5} md={4} xs={12}>
            <Item
              sx={{
                backgroundImage:
                  "url('https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/stylish/static/media/welcome-bg2-2x-svg.97ed12dc.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "right",
              }}
            >
              <SpaceBox>
                <Typography sx={{ fontSize: "18px", fontWeight: "500" }}>
                  Congratulation Julia
                </Typography>
                <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
                  $39,358{" "}
                  <Typography
                    component="span"
                    sx={{ ml: 2, fontSize: "14px", fontWeight: "700" }}
                  >
                    &#8598; +9%
                  </Typography>
                </Typography>
                <Button
                  sx={{
                    maxWidth: "100px",
                    backgroundColor: "secondary.main",
                    color: "text.white",
                    "&:hover": { backgroundColor: "secondary.main" },
                  }}
                >
                  Download
                </Button>
              </SpaceBox>
            </Item>
          </Grid>
          <Grid item lg={3} md={4} xs={12}>
            <Item>
              <CustomBox>
                <SpaceBox>
                  <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
                    Purchases
                  </Typography>
                  <Box>
                    <Typography sx={{ fontSize: "30px", fontWeight: "500" }}>
                      2,367
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "text.secondary",
                      }}
                    >
                      Monthly Sales
                    </Typography>
                  </Box>
                </SpaceBox>
                <IconButton
                  sx={{
                    backgroundColor: "primary.main",
                    color: "text.white",
                    "&:hover": { backgroundColor: "primary.main" },
                  }}
                >
                  <FiShoppingBag />
                </IconButton>
              </CustomBox>
            </Item>
          </Grid>
          <Grid item lg={4} md={4} xs={12}>
            <Item>
              <CustomBox>
                <SpaceBox>
                  <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
                    Total Earnings
                  </Typography>
                  <Box>
                    <Typography sx={{ fontSize: "30px", fontWeight: "500" }}>
                      $93,438.78
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "text.secondary",
                      }}
                    >
                      Monthly Revenue
                    </Typography>
                  </Box>
                </SpaceBox>
                <IconButton
                  sx={{
                    backgroundColor: "secondary.main",
                    color: "text.white",
                    "&:hover": { backgroundColor: "seondary.main" },
                  }}
                >
                  <FiDollarSign />
                </IconButton>
              </CustomBox>
            </Item>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mb: 3 }}>
          <Grid item lg={8} xs={12}>
            <Item>
              <ChartHeader chartName="Revenue Updates" />
              <RevenueChart />
            </Item>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} lg={12}>
                <Item sx={{ backgroundColor: "primary.main" }}>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "text.white",
                    }}
                  >
                    Monthly Earnings
                  </Typography>
                  <FullBarChart />
                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "text.white",
                    }}
                  >
                    $39,358{" "}
                    <Typography
                      component="span"
                      sx={{ ml: 2, fontSize: "14px", fontWeight: "700" }}
                    >
                      &#8598; +9%
                    </Typography>
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} lg={12}>
                <Item sx={{ backgroundColor: "secondary.main" }}>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "text.white",
                    }}
                  >
                    Customers
                  </Typography>
                  <CustomersLineChart />
                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "text.white",
                    }}
                  >
                    750
                    <Typography
                      component="span"
                      sx={{ ml: 2, fontSize: "14px", fontWeight: "700" }}
                    >
                      &#8598; +9%
                    </Typography>
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mb: 3 }}>
          <Grid item xs={12} lg={4}>
            <Item>
              <ChartHeader chartName="Total Sales"></ChartHeader>
              <Divider sx={{ my: 2 }} />
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                height="auto"
              >
                <CustomBox height="auto !important">
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                  >
                    Sales Yearly
                  </Typography>
                  <Typography
                    sx={{
                      color: "text.dark",
                      fontSize: "24px",
                      fontWeight: "700",
                    }}
                  >
                    8,364,398
                  </Typography>
                </CustomBox>
                <Box
                  sx={{
                    mx: "auto",
                    py: 2,
                    width: { lg: "70%", md: "30%", xs: "30%" },
                  }}
                >
                  <DoughnutChart />
                </Box>

                <Box display="flex" justifyContent="space-around">
                  <CenteredBox>
                    <Badge color="primary" variant="dot" sx={{}} />
                    <Typography marginLeft="8px">2021</Typography>
                  </CenteredBox>
                  <CenteredBox>
                    <Badge color="secondary" variant="dot" />
                    <Typography marginLeft="8px">2022</Typography>
                  </CenteredBox>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid item md={12} lg={8}>
            <Item>
              <ChartHeader chartName="Product Performance"></ChartHeader>
              <TableC></TableC>
            </Item>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mb: 3 }}>
          <Grid item lg={6} xs={12}>
            <Item>
              <ActionHeader name="Daily Activities"></ActionHeader>
              <Box width="100%">
                <TimeLine />
              </Box>
            </Item>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Item>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: "21px", fontWeight: "500" }}>
                  Sales Overview
                </Typography>
                <Box display="flex" gap="20px">
                  <CenteredBox>
                    <Badge color="primary" variant="dot" sx={{}} />
                    <Typography marginLeft="10px">Ample</Typography>
                  </CenteredBox>
                  <CenteredBox>
                    <Badge color="secondary" variant="dot" />
                    <Typography marginLeft="10px">Pixel Admin</Typography>
                  </CenteredBox>
                </Box>
              </Box>
              <SalesLineChart></SalesLineChart>
            </Item>
          </Grid>
        </Grid>
        {/* <Grid container spacing={3} sx={{ mt: "0px" }}>
          <Grid item lg={4} xs={12} height="100%">
            <CardWithImg height="100%" />
          </Grid>
          <Grid item lg={4} xs={12} height="100%">
            <Paper sx={{ p: 4, borderRadius: "20px" }}>
              <MixedChart height="100%" />
            </Paper>
          </Grid>
          <Grid item lg={4} xs={12} height="100%">
            <Paper sx={{ p: 4, borderRadius: "20px" }}>
              <Radar height="100%" />
            </Paper>
          </Grid>
        </Grid> */}
      </Box>
    </>
  );
};

export default Modern;
