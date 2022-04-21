import {
  Paper,
  Box,
  Grid,
  Chip,
  Radio,
  Typography,
  Rating,
  Divider,
  FormControl,
  Select,
  MenuItem,
  Button,
  Tab,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

import { FiShoppingCart } from "react-icons/fi";
import { useRouter } from "next/router";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import React, { useState } from "react";
import NextJsCarousel from "../components/Karusel/karusel";

const datas = [
  {
    img: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/stylish/static/media/s5.09769061.jpg",
    shop: "Ice-cream shop",
    title: "B Natural Mixed Fruit",
    price: "$50",
  },
  {
    img: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/stylish/static/media/s6.d102f9aa.jpg",
    shop: "Ice-cream shop",
    title: "Mix StrawBerry Candy",
    price: "$25",
  },
  {
    img: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/stylish/static/media/s7.6242034b.jpg",
    shop: "Ice-cream shop",
    title: "Wafer Cones",
    price: "$15",
  },
  {
    img: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/stylish/static/media/s8.b0912c72.jpg",
    shop: "Boat Headphones",
    title: "Wirelsess Headphones",
    price: "$300",
  },
];



export default function Detail() {
  //stars
  const [value, setValue] = useState(3);

  //radiobuttons
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  //select
  const [size, setSize] = useState([]);

  const handleChangeSize = (event) => {
    const {
      target: { value },
    } = event;
    setSize(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const [valueTab, setValueTab] = useState("1");

  const handleChangeTab = (event, newValueTab) => {
    setValueTab(newValueTab);
  };
  const router = useRouter();
  //stars

  const [valueStars, setValueStars] = useState(2);
  return (
    <Box>
      <Paper sx={{ p: 4, m: 4 ,borderRadius:'20px',boxShadow: '0px 7px 30px 0px rgb(90 114 123 / 11%)',
        backgroundColor:'white'}}>
        <Grid container spacing="16">
          <Grid item md={6} sm={12}>
            <Box sx={{ paddingInlineEnd: { md: 3 } }}>
              <NextJsCarousel />
            </Box>
          </Grid>
          <Grid item md={6} sm={12}>
            <Box display="flex" alignItems="center">
              <Chip
                label="In Stock"
                backgroundColor="#00d395 !important"
              ></Chip>
              <Typography
                component="h6"
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#96a8c5",
                  marginLeft: "8px",
                }}
              >
                Men Shoes
              </Typography>
            </Box>
            <Typography
              component="h3"
              sx={{ fontSize: "30px", fontWeight: "600", my: 2 }}
            >
              Nike branding shoes
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontSize: "16px", fontWeight: "400", color: "#96a8c5" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex
              arcu, tincidunt bibendum felis.
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontSize: "30px", fontWeight: "600", my: 2 }}
            >
              $546.00
            </Typography>
            <Box display="flex" alignItems="center">
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                sx={{ marginRight: "8px" }}
              />
              <Typography
                variant="h6"
                sx={{ cursor: "pointer", fontSize: "16px", fontWeight: "200" }}
                onClick={() => router.push("/analytical")}
              >
                <u>236 reviews</u>
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{ my: 4 }}>
              <Typography fontSize="14px" fontWeight="500">
                Colors
              </Typography>
              <Radio {...controlProps("a")} />
              <Radio {...controlProps("b")} color="secondary" />
              <Radio {...controlProps("c")} color="success" />
              {/* <Radio {...controlProps("d")} color="default" /> */}
              {/* <Radio
                {...controlProps("e")}
                sx={{
                  color: pink[800],
                  "&.Mui-checked": {
                    color: pink[600],
                  },
                }}
              /> */}
            </Box>
            <Divider />
            <Box sx={{ p: 2 }}>
              <Grid container>
                <Grid item md={6} xs={12}>
                  <Box display="flex" alignItems="center" gap="10px">
                    <Typography component="h6" fontSize="14px" fontWeight="500">
                      Size
                    </Typography>
                    <FormControl sx={{ m: 1, width: "50%" }}>
                      <Select
                        value={size}
                        onChange={handleChangeSize}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        placeholder="1"
                      >
                        <MenuItem value="">1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Box display="flex" alignItems="center" gap="10px">
                    <Typography component="h6" fontSize="14px" fontWeight="500">
                      Qty.
                    </Typography>
                    <FormControl sx={{ m: 1, width: "50%" }}>
                      <Select
                        value={size}
                        onChange={handleChangeSize}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        placeholder="1"
                      >
                        <MenuItem value="">1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Divider />
            <Box sx={{ p: 3 }}>
              <Grid container spacing="16">
                <Grid item xs={12} md={6}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "primary.main",
                      color: "white",
                      width: "100%",
                      fontSize: "15px ",
                      fontWeight: "400",
                      paddingY: "12px",
                    }}
                  >
                    Buy Now
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "primary.main",
                      color: "white",
                      width: "100%",
                      fontSize: "15px ",
                      fontWeight: "400",
                      paddingY: "12px",
                    }}
                  >
                    <FiShoppingCart />
                    Add to cart
                  </Button>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{ fontSize: "16px", fontWeight: "400", color: "#757f89" }}
              >
                Dispatched in 2-3 weeks
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: "16px", fontWeight: "400", cursor: "pointer" }}
                onClick={() => router.push("/modern")}
              >
                <u>Why the longer time for delivery? </u>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ p: 4, m: 4 ,borderRadius:'20px',boxShadow: '0px 7px 30px 0px rgb(90 114 123 / 11%)',
        backgroundColor:'white'}}>
        <Box sx={{ width: "100%" }}>
          <TabContext value={valueTab}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChangeTab}>
                <Tab label="Description" value="1" />
                <Tab label="Reviews" value="2" />
                <Tab label="Comments" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Typography
                variant="h6"
                sx={{ fontSize: "24px", fontWeight: "500" }}
              >
                Sed at diam elit. Vivamus tortor odio, pellentesque eu tincidunt
                a, aliquet sit amet lorem pellentesque eu tincidunt a, aliquet
                sit amet lorem.
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#777b88",
                  my: 5,
                }}
              >
                Cras eget elit semper, congue sapien id, pellentesque diam.
                Nulla faucibus diam nec fermentum ullamcorper. Praesent sed
                ipsum ut augue vestibulum malesuada. Duis vitae volutpat odio.
                Integer sit amet elit ac justo sagittis dignissim.
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: "16px", fontWeight: "400", color: "#777b88" }}
              >
                Vivamus quis metus in nunc semper efficitur eget vitae diam.
                Proin justo diam, venenatis sit amet eros in, iaculis auctor
                magna. Pellentesque sit amet accumsan urna, sit amet pretium
                ipsum. Fusce condimentum venenatis mauris et luctus. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae;
              </Typography>
            </TabPanel>
            <TabPanel value="2">
              <Typography
                variant="h6"
                sx={{ fontSize: "24px", fontWeight: "500" }}
              >
                Vivamus tortor odio, pellentesque eu tincidunt a, aliquet sit
                amet lorem pellentesque eu tincidunt a, aliquet sit amet lorem.
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#777b88",
                  my: 5,
                }}
              >
                Cras eget elit semper, congue sapien id, pellentesque diam.
                Nulla faucibus diam nec fermentum ullamcorper. Praesent sed
                ipsum ut augue vestibulum malesuada. Duis vitae volutpat odio.
                Integer sit amet elit ac justo sagittis dignissim.
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: "16px", fontWeight: "400", color: "#777b88" }}
              >
                Quis metus in nunc semper efficitur eget vitae diam. Proin justo
                diam, venenatis sit amet eros in, iaculis auctor magna.
                Pellentesque sit amet accumsan urna, sit amet pretium ipsum.
                Fusce condimentum venenatis mauris et luctus. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae;
              </Typography>
            </TabPanel>
            <TabPanel value="3">
              <Typography
                variant="h6"
                sx={{ fontSize: "24px", fontWeight: "500" }}
              >
                Sed at diam elit. Vivamus tortor odio, pellentesque eu tincidunt
                a, aliquet sit amet lorem pellentesque eu tincidunt a, aliquet
                sit amet lorem.
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#777b88",
                  my: 5,
                }}
              >
                Cras eget elit semper, congue sapien id, pellentesque diam.
                Nulla faucibus diam nec fermentum ullamcorper. Praesent sed
                ipsum ut augue vestibulum malesuada. Duis vitae volutpat odio.
                Integer sit amet elit ac justo sagittis dignissim.
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: "16px", fontWeight: "400", color: "#777b88" }}
              >
                Vivamus quis metus in nunc semper efficitur eget vitae diam.
                Proin justo diam, venenatis sit amet eros in, iaculis auctor
                magna. Pellentesque sit amet accumsan urna, sit amet pretium
                ipsum. Fusce condimentum venenatis mauris et luctus. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae;
              </Typography>
            </TabPanel>
          </TabContext>
        </Box>
      </Paper>
      <Typography
        variant="h6"
        sx={{ fontSize: "24px", fontWeight: "700", m: 4 }}
      >
        Related Products
      </Typography>
      <Box sx={{ m: 4, }}>
        <Grid container spacing="30">
          {datas.map((data,index) => (
            <Grid key={index} item md={4} sm={6} xs={12} lg={3}>
              <Card key={data.title} sx={{ borderRadius: "24px",height:'100%',boxShadow: '0px 7px 30px 0px rgb(90 114 123 / 11%)',
                backgroundColor:'white' }}>
                <CardMedia component="img" image={data.img} alt={data.title} />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontSize: "12px", fontWeight: "light" }}
                  >
                    {data.shop}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "18px", fontWeight: "bolder", mb: 2 }}
                  >
                    {data.title}
                  </Typography>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="body2" color="text.secondary">
                      {data.price}
                    </Typography>
                    <Box>
                      <Rating
                        name="simple-controlled"
                        value={valueStars}
                        onChange={(event, newValueStars) => {
                          setValueStars(newValueStars);
                        }}
                        sx={{ marginRight: "8px" }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
  // const [currency, setCurrency] = useState(1);
  // const [currency2, setCurrency2] = useState(1);

  // const handleChange = (event) => {
  //   setCurrency(event.target.value);
  // };
  // const handleChange2 = (event) => {
  //   setCurrency2(event.target.value);
  // };
  // return (
  //   <Container>
  //     <Box sx={{ padding: "15px" }}>
  //       <Typography>Home / eCommerce Shop</Typography>
  //       <Typography
  //         sx={{ fontSize: "30px", fontWeight: "bold" }}
  //         component="h1"
  //       >
  //         eCommerce Shop
  //       </Typography>
  //     </Box>
  //     <Grid container sx={{ display: "flex" }}>
  //       <Grid item xs={12} sm={12} md={6} sx={{ borderRadius: 1 }}>
  //         <Karusel />
  //       </Grid>
  //       <Grid item xs={12} sm={12} md={6}>
  //         <Box>
  //           <Typography>In Stock</Typography>
  //           <Typography>Men Shoes</Typography>
  //         </Box>
  //         <Typography>Nike branding shoes</Typography>
  //         <Typography>
  //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex
  //           arcu, tincidunt bibendum felis.
  //         </Typography>
  //         <Typography>$546.00</Typography>
  //         <Box>
  //           <Rating name="size-small" defaultValue={2} size="small" />
  //           <Link>
  //             <a>236 reviews</a>
  //           </Link>
  //         </Box>
  //         <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
  //           <Typography>Colors</Typography>
  //           <Box
  //             sx={{
  //               width: "16px",
  //               height: "16px",
  //               backgroundColor: "#03C9D7",
  //               borderRadius: "50%",
  //             }}
  //           ></Box>
  //           <Box
  //             sx={{
  //               width: "16px",
  //               height: "16px",
  //               backgroundColor: "#03C9D7",
  //               borderRadius: "50%",
  //             }}
  //           ></Box>
  //           <Box
  //             sx={{
  //               width: "16px",
  //               height: "16px",
  //               backgroundColor: "#03C9D7",
  //               borderRadius: "50%",
  //             }}
  //           ></Box>
  //         </Box>
  //         <Divider />
  //         <Box sx={{ display: "flex", alignItems: "center", paddingY: 1 }}>
  //           <Typography>Size</Typography>
  //           <TextField
  //             id="outlined-select-currency"
  //             select
  //             value={currency}
  //             onChange={handleChange}
  //             sx={{ flex: 1, color: "black" }}
  //           >
  //             {currencies.map((option) => (
  //               <MenuItem key={option.value} value={option.value}>
  //                 {option.value}
  //               </MenuItem>
  //             ))}
  //           </TextField>
  //           <Typography>Qty.</Typography>
  //           <TextField
  //             id="outlined-select-currency"
  //             select
  //             value={currency2}
  //             onChange={handleChange2}
  //             sx={{ flex: 1, color: "black" }}
  //           >
  //             {currencies.map((option) => (
  //               <MenuItem key={option.value} value={option.value}>
  //                 {option.value}
  //               </MenuItem>
  //             ))}
  //           </TextField>
  //         </Box>
  //         <Divider />
  //         <Box sx={{ display: "flex" }}>
  //           <Button variant="contained">Buy Now</Button>
  //           <Button variant="contained" sx={{ display: "flex" }}>
  //             <FiShoppingCart />
  //             <Typography>Add to Card</Typography>
  //           </Button>
  //         </Box>
  //         <Typography>Dispatched in 2-3 weeks</Typography>
  //         <Link>
  //           <a>Why the longer time for delivery?</a>
  //         </Link>
  //       </Grid>
  //     </Grid>
  //   </Container>
  // );
}
