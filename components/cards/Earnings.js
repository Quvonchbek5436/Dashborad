import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import React from "react";

export default function Earnings() {
  return (
    <Box>
      <Paper
        sx={{
          p: 4,
          borderRadius: "10px",
          backgroundImage:
            "url('https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/stylish/static/media/welcome-bg-2x-svg.25338f53.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "left center",
        }}
      >
        <Box display="flex" justifyContent="space-between" height="100%">
          <Box>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "18px",
                color: "text.secondary",
              }}
            >
              Earnings
            </Typography>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "18px",
                color: "text.dark",
              }}
            >
              $63,438.78
            </Typography>
            <Button
              variant="contained"
              backgroundColor="primary.main"
              sx={{ mt: 2 }}
            >
              Download
            </Button>
          </Box>
          <Box>
            <IconButton
              sx={{
                backgroundColor: "error.main",
                color: "text.white",
                width: "45px",
                height: "45px",
                borderRadius: "50% ",
                minWidth: "0",
                padding: "0",
                boxSizing: "border-box",
              }}
            >
              $
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
