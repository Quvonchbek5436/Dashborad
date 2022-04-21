import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Typography,
  IconButton,
} from "@mui/material";
import { BsXCircle } from "react-icons/bs";

function Counter() {
  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  //reset counter
  const reset = () => {
    setCounter(0);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          padding: "24px 0px 32px",
          alignItems: "center",
        }}
      >
        <Box sx={{ marginRight: "10px" }}>
          <img
            src="https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/stylish/static/media/s1.69341801.jpg"
            alt=""
            width="90px"
            height="70px"
            sx={{ borderRadius: "30px" }}
          />
        </Box>
        <Box sx={{}}>
          <Typography
            component="h6"
            variant="h5"
            sx={{ fontSize: "16px", fontWeight: "500" }}
          >
            butterscotch ice-cream
          </Typography>
          <Typography
            component="h6"
            variant="h5"
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              paddingY: "6px",
              color: "text.secondary",
            }}
          >
            Milk product
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontSize: "16px", fontWeight: "500", marginRight: "8px" }}
              variant="h5"
            >
              $250
            </Typography>

            <Box>
              <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
              >
                <Button onClick={decrease}>-</Button>
                <Button>{counter}</Button>
                <Button onClick={increase}>+</Button>
              </ButtonGroup>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Counter;
