import React from "react";
import {Drawer, Box, Typography, IconButton} from '@mui/material'
import { BsXCircle } from "react-icons/bs";



function ShoppingCart() {

  const [state, setState] = React.useState({
    top: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };


  return (
    <div>
      <Drawer
        anchor='right'
        open={state['right']}
        onClose={toggleDrawer('right', false)}
      >
        <Box
          sx={{
            padding: { md: "20px 40px", xs: "5px 10px" },
            display: "flex",
            alignItems: "center",
          }}
          role="presentation"
          onClick={toggleDrawer('right', false)}
          onKeyDown={toggleDrawer('right', false)}
        >
          <Typography variant="h6"> Shopping Cart</Typography>
          <IconButton onClick={() => setState({ ...state, [anchor]: false })}>
            <BsXCircle sx={{ fontWeight: "bold" }}></BsXCircle>
          </IconButton>
        </Box>
      </Drawer>
    </div>
  );
}

export default ShoppingCart;
