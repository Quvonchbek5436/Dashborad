import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Rating,
} from "@mui/material";
import {useSelector} from "react-redux";

export default function Listing() {

  const datas = useSelector((state) => state.messages.datas)
  // const [valueStars, setValueStars] = useState();
  return (
    <Box sx={{ px: 3 }}>
      <Grid container spacing={4}>
        {datas.map((data,index) => (
          <Grid key={index} item md={4} sm={6} xs={12} lg={3}>
            <Card  sx={{ borderRadius: "24px",height:'100%',boxShadow: '0px 7px 30px 0px rgb(90 114 123 / 11%)',
              backgroundColor:'white', }}>
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
                      value={data.stars}
                      // onChange={(event, ) => {
                      //   setValueStars();
                      // }}
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
  );
}
