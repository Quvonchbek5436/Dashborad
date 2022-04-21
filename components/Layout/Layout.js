import * as React from "react";
import { useEffect, useState } from "react";
import {
  Toolbar,
  IconButton,
  Badge,
  Box,
  AppBar,
  Typography,
  Drawer,
  FormControl,
  OutlinedInput,
  Avatar,
  Popover,
  Divider,
  Button,
  Dialog,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import Image from "next/image";
// import { useTheme } from "@mui/material/styles";
import Lists from "../List";
import Logo from "../../public/Logo.svg";
//icons
import {
  FiShoppingCart,
  FiMenu,
  FiSearch,
  FiChevronDown,
  FiSettings,
} from "react-icons/fi";
import { BiComment } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsXCircle } from "react-icons/bs";
import Counter from "../Counter";
import Messages from "../Messages";
import Notifications from "../Notifications";
import ColorButton from "../ColorButton";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";

export default function Layout({ children }) {
  const router = useRouter();
  const Theme = useSelector((state) => state.darkMode);

  const key = Theme.palettesKey;
  const ThemeColor = Theme.palettes;

  //search-drawer-modal
  const [state, setState] = React.useState({
    top: false,
    right: false,
  });

  //shoppingCart
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  //settings-popover

  const [anchorElS, setAnchorElS] = React.useState(null);

  const handleClickS = (event) => {
    setAnchorElS(event.currentTarget);
  };

  const handleCloseS = () => {
    setAnchorElS(null);
  };

  const openS = Boolean(anchorElS);
  const idS = openS ? "simple-popover" : undefined;
  //aside
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  //popover
  const [anchorElP, setAnchorElP] = React.useState(null);

  const handleClickP = (event) => {
    setAnchorElP(event.currentTarget);
  };

  const handleCloseP = () => {
    setAnchorElP(null);
  };

  const openP = Boolean(anchorElP);
  const id = openP ? "simple-popover" : undefined;

  //popover2

  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const open2 = Boolean(anchorEl2);
  const id2 = open2 ? "simple-popover" : undefined;

  //dialog
  const [opendialog, setOpendialog] = React.useState(false);

  const handleClickOpendialog = () => {
    setOpendialog(true);
  };

  const handleClosedialog = () => {
    setOpendialog(false);
  };

  const [windowWidth, setWindowWidth] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1200) {
        setWindowWidth(false);
      } else {
        setWindowWidth(true);
      }
    });
  }, []);

  //radiobuttons
  const [valueTheme, setValueTheme] = React.useState("female");

  const handleChangeTheme = (event) => {
    setValueTheme(event.target.value);
  };
  //radiobuttons-2
  const [valueDir, setValueDir] = React.useState("female");

  const handleChangeDir = (event) => {
    setValueDir(event.target.value);
  };

  const [mode, setMode] = useState("light");
  const darkMode = {
    dark: {
      primary: "rgb(0,0,0,0.7)",
      secondary: "rgb(0,0,0,0,4)",
      textColor: "white",
    },
    light: { primary: "white", textColor: "black" },
  };

  return (
    <Box>
      <AppBar
        sx={{
          width: "100% !important",
          position: "sticky !important",
          top: 0,
          left: 0,
          backgroundColor: "white",
          color: "text.secondary",
          padding: { md: "0px 10px", sm: "0px 5px" },
          boxShadow: "rgb(90 114 123 / 11%) 0px 7px 30px 0px",
        }}
      >
        <Toolbar>
          <Box sx={{ display: { md: "flex", xs: "none", flexGrow: "1" } }}>
            <Image
              src={Logo}
              width={106}
              height={38}
              alt="Logo"
              loading="lazy"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexGrow: "4",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box sx={{ flexGrow: "1" }}>
              <IconButton onClick={handleDrawer} sx={{ color: "#777E89" }}>
                <FiMenu />
              </IconButton>
              {["top"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <IconButton
                    sx={{ fontSize: "20px", color: "#777E89" }}
                    onClick={toggleDrawer(anchor, true)}
                  >
                    <FiSearch />
                  </IconButton>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    <Box
                      sx={{
                        padding: { md: "20px 40px", sx: "5px 10px" },
                        display: "flex",
                        alignItems: "center",
                      }}
                      role="presentation"
                    >
                      <FormControl
                        component="form"
                        noValidate
                        autoComplete="off"
                        sx={{ flexGrow: "1" }}
                      >
                        <OutlinedInput placeholder="Search here" />
                      </FormControl>
                      <IconButton
                        onClick={() => setState({ ...state, [anchor]: false })}
                      >
                        <BsXCircle sx={{ fontWeight: "bold" }}></BsXCircle>
                      </IconButton>
                    </Box>
                  </Drawer>
                </React.Fragment>
              ))}
            </Box>
            <Box sx={{ flexGrow: "1", textAlign: "right" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                {["right"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <IconButton
                      onClick={toggleDrawer(anchor, true)}
                      sx={{
                        marginRight: "20px",
                        width: "45px",
                        height: "45px",
                      }}
                    >
                      <FiShoppingCart />
                    </IconButton>

                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      <Box
                        sx={{
                          padding: { md: "20px 40px", sx: "5px 10px" },
                          display: "flex",
                          alignItems: "center",
                          width: "320px",
                        }}
                        role="presentation"
                        onKeyDown={toggleDrawer(anchor, false)}
                      >
                        <Box sx={{ width: "100%" }}>
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                          >
                            <Typography variant="h6"> Shopping Cart</Typography>
                            <IconButton
                              onClick={() =>
                                setState({ ...state, [anchor]: false })
                              }
                            >
                              <BsXCircle
                                sx={{ fontWeight: "bold" }}
                              ></BsXCircle>
                            </IconButton>
                          </Box>
                          <Counter />
                          <Divider />
                          <Counter />
                          <Divider />
                          <Counter />
                          <Divider />
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            sx={{ fontSize: "14px", padding: "16px 0 8px" }}
                          >
                            <Typography
                              sx={{
                                fontweight: "light",
                                color: "text.secondary",
                              }}
                            >
                              Sub Total
                            </Typography>
                            <Typography sx={{}}>$890</Typography>
                          </Box>
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            sx={{ fontSize: "14px" }}
                          >
                            <Typography
                              sx={{
                                fontweight: "light",
                                color: "text.secondary",
                              }}
                            >
                              Total
                            </Typography>
                            <Typography sx={{}}>$890</Typography>
                          </Box>
                          <Button
                            sx={{
                              backgroundColor: "primary.main",
                              color: "text.white",
                              width: "100%",
                              marginTop: "20px",
                            }}
                            onClick={handleClickOpendialog}
                          >
                            Place Order
                          </Button>
                          <Dialog
                            open={opendialog}
                            onClose={handleClosedialog}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                            padding="16px !important"
                            sx={{
                              width: "500px !important",
                              marginX: "auto",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "16px",
                                width: "400px !important",
                              }}
                            >
                              <Typography
                                id="alert-dialog-description"
                                color="success.main"
                              >
                                Order Successfully Done
                              </Typography>

                              <Button onClick={handleClosedialog} color="error">
                                Close
                              </Button>
                            </Box>
                          </Dialog>
                        </Box>
                      </Box>
                    </Drawer>
                  </React.Fragment>
                ))}
                <IconButton
                  sx={{ marginRight: "20px", width: "45px", height: "45px" }}
                  aria-describedby={id}
                  onClick={handleClickP}
                >
                  <Badge badgeContent={""} color="primary" variant="dot">
                    <BiComment sx={{ width: "20px", height: "20px" }} />
                  </Badge>
                </IconButton>
                <Popover
                  id={id}
                  open={openP}
                  anchorEl={anchorElP}
                  onClose={handleCloseP}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  boxShadow="none"
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <Messages />
                </Popover>
                <IconButton
                  sx={{ marginRight: "20px", width: "45px", height: "45px" }}
                  aria-describedby={id}
                  onClick={handleClick2}
                >
                  <Badge badgeContent={""} color="secondary" variant="dot">
                    <IoMdNotificationsOutline
                      sx={{ width: "20px", height: "20px" }}
                    />
                  </Badge>
                </IconButton>
                <Popover
                  id={id2}
                  open={open2}
                  anchorEl={anchorEl2}
                  onClose={handleClose2}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  boxShadow="none"
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <Notifications />
                </Popover>
                <Box
                  sx={{
                    width: "1px",
                    height: "30px",
                    backgroundColor: "#E0E0E0",
                    marginY: "20px",
                    marginRight: "20px",
                  }}
                ></Box>
                <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
                  <Avatar
                    style={{ width: "30px", height: "30px" }}
                    src="data:image/jpeg;base64,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"
                  />
                  <Box
                    sx={{
                      display: { md: "flex", xs: "none" },
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Typography
                      sx={{ fontSize: "16px" }}
                      component="h6"
                      variant="h6"
                    >
                      Hi,{" "}
                      <Typography
                        component="span"
                        variant="h6"
                        sx={{ fontWeight: "bold", fontSize: "16px" }}
                      >
                        Julia
                      </Typography>
                    </Typography>
                    <FiChevronDown />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex" }}>
        {!open && (
          <Box
            sx={{
              backgroundColor: "#f4f6f7",
              position: windowWidth ? "fixed" : "sticky",
              height: "",
              top: windowWidth ? "0px" : "70px",
              left: "0",
              zIndex: windowWidth ? 1200 : 120,
              display: "inline-block !important",
              width: "290px !important",
            }}
          >
            <Box
              sx={{
                background: "white",
                color: "text.dark",
                margin: windowWidth ? "0px" : "30px 20px 20px 20px",
                height: "100vh !important",
                overflowY: "auto",
                borderRadius: " 8px",
                transition: "linear 0.8s",
                width: "265px !important",
                "&::-webkit-scrollbar": {
                  width: "8px",
                },
                "&::-webkit-scrollbar:hover": {
                  width: "8px",
                },
                "&::-webkit-scrollbar-track ": {
                  boxShadow: "inset 0 0 5px #979797",
                  borderRadius: " 10px",
                },
                "&::-webkit-scrollbar-track:hover": {
                  backgroundColor: " #fff",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "grey",
                  borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  backgroundColor: "#979797",
                },
              }}
            >
              <Lists />
            </Box>
          </Box>
        )}
        {windowWidth && !open && (
          <Box
            onClick={() => setOpen(!open)}
            sx={{
              position: "fixed",
              zIndex: 10002,
              width: "calc(100% - 265px)",
              height: "100vh !important",
              top: 0,
              right: 0,
              background: "rgb(0, 0, 0, 0.3)",

            }}
          ></Box>
        )}
        <Box
          sx={{
            backgroundColor: "#f4f6f7",
            p: 3,
            width: "100%",
            position: "sticky",
            top: "0",
            right: "0",

          }}
        >
          {children}

          <Typography
            component="p"
            variant="h5"
            sx={{
              padding: "24px",
              textAlign: "center",
              fontSize: "16px",
              maxWidth: "1244px",
            }}
          >
            © 2021 All rights reserved by Wrappixel.com
          </Typography>
        </Box>
      </Box>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            aria-describedby={id}
            variant="contained"
            onClick={handleClickS}
            sx={{
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.main",
              },
              width: "56px",
              height: "56px",
              borderRadius: "50% ",
              minWidth: "0",
              padding: "0",
              boxSizing: "border-box",
              position: "fixed",
              bottom: "10px",
              right: "10px",
              fontSize: "24px",
              color: "white",
            }}
          >
            <FiSettings />
          </Button>

          <Popover
            id={idS}
            open={openS}
            anchorEl={anchorElS}
            onClose={handleCloseS}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box height="95vh" width="100px">
              <Box sx={{ px: 2, py: 3 }}>
                <Typography
                  color="text.dark"
                  sx={{ fontSize: "18px", fontWeight: "500" }}
                >
                  Settings
                </Typography>
              </Box>
              <Divider />
              <Box sx={{ px: 2, py: 2 }}>
                <Typography
                  color="text.dark"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                    textAlign: "Center",
                  }}
                >
                  Colors
                </Typography>
                <Box textAlign={"center"}>
                  <Box sx={{ my: 2 }}>
                    <ColorButton color="#0083fc" title="BLUE_THEME" />
                  </Box>
                  <Box sx={{ my: 2 }}>
                    <ColorButton color="#00dac5" title="GREEN_THEME" />
                  </Box>
                  <Box sx={{ my: 2 }}>
                    <ColorButton color="#9500fe" title="PURPLE_THEME" />
                  </Box>
                  <Box sx={{ my: 2 }}>
                    <ColorButton color="#ff008a" title="RED_THEME" />
                  </Box>
                  <Box sx={{ my: 2 }}>
                    <ColorButton color="#3800b7" title="INDIGO_THEME" />
                  </Box>
                  <Box sx={{ my: 2 }}>
                    <ColorButton color="#ff8b75" title="ORANGE_THEME" />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Popover>
        </React.Fragment>
      ))}
    </Box>
  );
}
