import { GlobalStyles } from "@mui/material";

const inputGlobalStyles = (mode) => (
  <GlobalStyles
    styles={{
      ...(mode === "light" ? {} : {}),
      body: {
        margin: "0",
        padding: "0",
      },
      Button: {
        textTransform: "capitalize !important",
      },
      ".imgg": {
        background: `url(https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/stylish/static/media/welcome-bg2-2x-svg.97ed12dc.svg)`,
        backgroundSize: "contain",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      },

      ".MuiListItem-root ": {
        padding: "0 !important",
      },
      ".MuiContainer-root": {},
      ".css-labe24-MuiPaper-root-MuiAppBar-root": {
        backgroundColor: "white !important",
      },
      ".header": {
        background: `linear-gradient( rgba(0, 0, 0, 0.2) 100%, rgba(0, 0, 0, 0.2)100%),url("./images/back.png")`,
        minHeight: "100vh",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      ".MuiDrawer-root": {
        position: "sticky !important",
        top: "0 !important",
        left: "20px !important",
      },
      ".MuiPaper-elevation": {
        backgroundColor: "white !important",
      },
      ".MuiButtonGroup-groupedOutlined": {
        borderColor: "#00d395 !important",
        color: "#00d395 !important",
      },
      ".MuiButtonGroup .css-sm1u9g": {
        borderRadius: "5px !important",
      },
      ".MuiChip-root ": {
        backgroundColor: "#ff8b75 !important",
        color: "white !important",
        borderRadius: "5px !important",
      },
    }}
  />
);

export default inputGlobalStyles;
