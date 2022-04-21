import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SalaryChart from "../components/charts/SalaryChart";
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
import AreaChart from "../components/charts/AreaChart";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
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

const Analytical = (props) => {
  return (
    <>
      <Box>
        <Grid container spacing={4} sx={{ mb: 3 }}>
          <Grid item lg={6} xs={12}>
            <Grid container spacing={4} sx={{ mb: 3 }}>
              <Grid item xs={12} spacing={4}>
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
                    <Typography sx={{ fontSize: "21px", fontWeight: "500" }}>
                      Hey Julia,
                    </Typography>
                    <Typography sx={{ fontSize: "21px", fontWeight: "500" }}>
                      Download latest report
                    </Typography>
                    <Button
                      sx={{
                        maxWidth: "100px",
                        backgroundColor: "primary.main",
                        color: "text.white",
                        "&:hover": { backgroundColor: "primary.main" },
                      }}
                    >
                      Download
                    </Button>
                  </SpaceBox>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={4} sx={{ mb: 3 }}>
                  <Grid item md={6} xs={12}>
                    <Item sx={{ backgroundColor: "secondary.main" }}>
                      <CustomBox>
                        <SpaceBox>
                          <Typography
                            sx={{
                              fontSize: "21px",
                              fontWeight: "500",
                              color: "text.white",
                            }}
                          >
                            Total Earnings
                          </Typography>
                          <Box>
                            <Typography
                              sx={{
                                fontSize: "30px",
                                fontWeight: "500",
                                color: "text.white",
                              }}
                            >
                              $93,438.78
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "14px",
                                fontWeight: "400",
                                color: "#e0e0e0",
                              }}
                            >
                              Monthly Revenue
                            </Typography>
                          </Box>
                        </SpaceBox>
                        <IconButton
                          sx={{
                            backgroundColor: "#e0e0e0",
                            color: "text.dark",
                            "&:hover": { backgroundColor: "#e0e0e0" },
                          }}
                        >
                          <FiDollarSign />
                        </IconButton>
                      </CustomBox>
                    </Item>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Item height="auto !important" sx={{ padding: 0 }}>
                      <CustomBox sx={{ padding: "30px" }}>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: "16px",
                              fontWeight: "500",
                              color: "text.secondary",
                            }}
                          >
                            Monthly Sales
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "24px",
                              fontWeight: "700",
                              fontweight: "500",
                            }}
                          >
                            3,246
                          </Typography>
                        </Box>
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
                      <AreaChart />
                    </Item>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
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
              <SalesLineChart />
            </Item>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mb: 3 }}>
          <Grid item md={4} xs={12}>
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
          <Grid item md={8} xs={12}>
            <Item>
              <ChartHeader chartName="Product Performance"></ChartHeader>
              <TableC></TableC>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Analytical;
