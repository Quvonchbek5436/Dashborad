import * as React from "react";
import {
  ListItem,
  ListSubheader,
  List,
  ListItemIcon,
  ListItemText,
  Collapse,
  ListItemButton,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useRouter } from "next/router";
//icons
import {
  FiShoppingBag,
  FiHardDrive,
  FiClipboard,
  FiCalendar,
  FiUsers,
  FiList,
  FiEdit,
  FiShoppingCart,
  FiAlertCircle,
  FiUser,
  FiGitPullRequest,
  FiDollarSign,
  FiType,
  FiFeather,
  FiFileText,
  FiLogIn,
  FiUserPlus,
  FiRefreshCcw,
  FiAlertTriangle,
} from "react-icons/fi";
import { BiComment } from "react-icons/bi";
import { MdAccessTime } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import ThemeComponent from "./ThemeComponent";

const dashboards = [
  { icon: <FiHardDrive />, title: "Modern", to: "/modern", select: false },
  {
    icon: <AiOutlineClockCircle />,
    title: "Analytical",
    to: "/analytical",
    select: false,
  },
];

const apps = [
  { icon: <BiComment />, title: "Chat", to: "/chat" },
  { icon: <FiClipboard />, title: "Notes", to: "/notes" },
  { icon: <FiShoppingBag />, title: "Mail", to: "/mail" },
  { icon: <FiCalendar />, title: "Calendar", to: "/calendar" },
];

const pages = [
  { icon: <FiAlertCircle />, title: "Alert", to: "/alert" },
  { icon: <FiUser />, title: "User Profile", to: "/userProfile" },
  { icon: <FiEdit />, title: "Quill Editor", to: "/quillEditor" },
  { icon: <FiGitPullRequest />, title: "Treeview", to: "/treeview" },
  { icon: <FiDollarSign />, title: "Pricing", to: "/pricing" },
  { icon: <FiType />, title: "Typography", to: "/typography" },
  { icon: <FiFeather />, title: "Feather Icons", to: "/featherIcons" },
  { icon: <MdAccessTime />, title: "Timeline", to: "/timeline" },
];
const authentication = [
  { icon: <FiLogIn />, title: "Login", to: "/login" },
  { icon: <FiUserPlus />, title: "Register", to: "/register" },
  { icon: <FiRefreshCcw />, title: "Reset password", to: "/resetPassword" },
  { icon: <FiAlertTriangle />, title: "Error", to: "/404" },
];

export default function Lists() {
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const [open2, setOpen2] = React.useState(true);
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const router = useRouter();
  const check = (item) => {
    dashboards.map((e) => (e.select = false));
    item.select = true;
    router.push(item.to);
  };
  return (
    <ThemeComponent>
      <List
        sx={{
          boxShadow: "0px 7px 30px 0px rgb(90 114 123 / 11%)",
          padding: "15px",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            color: "text.secondary !important",
            padding: "0 !important",
            backgroundColor: "transparent",
          }}
        >
          DASHBOARDS
        </ListSubheader>

        {dashboards.map((item, index) => (
          <ListItem
            padding="50px"
            button
            key={item.title}
            onClick={() => check(item)}
            sx={{
              padding: "10px !important",
              // background: item.select && "success.main",
              // color: item.select && "red",
              // "&:hover": {
              //   background: item.select && "primary.main",
              //   color: item.select && "white",
              // },
            }}
          >
            <ListItemIcon
              sx={{ 
                // color: item.select && "white", 
                fontSize: "20px" }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            color: "text.scondary !important",
            padding: "0 !important",
            backgroundColor: "transparent",
          }}
        >
          APPS
        </ListSubheader>

        {apps.map((item, index) => (
          <ListItem
            button
            key={item.title}
            onClick={() => router.push(item.to)}
            sx={{
              padding: "10px !important",
              // background: item.select && "red",
              // color: item.select && "white",
              // "&:hover": {
              //   background: item.select && "red",
              //   color: item.select && "white",
              // },
            }}
          >
            <ListItemIcon sx={{ fontSize: "20px", color: "#777E89" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}

        <ListItem
          button
          key="customers"
          onClick={handleClick}
          sx={{
            padding: "10px !important",
          }}
        >
          <ListItemIcon sx={{ fontSize: "20px", color: "#777E89" }}>
            <FiUsers />
          </ListItemIcon>
          {open ? <ExpandLess /> : <ExpandMore />}
          <ListItemText primary="Customers" />
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{
                padding: "10px !important",
                // background: item.select && "red",
                //color: item.select && "white",
                //"&:hover": {
                // background: item.select && "red",
                //color: item.select && "white",
                //  },
              }}
              onClick={() => router.push("/customersList")}
            >
              <ListItemIcon sx={{ fontSize: "20px", color: "#777E89" }}>
                <FiList />
              </ListItemIcon>
              <ListItemText primary="Lists" />
            </ListItemButton>
            <ListItemButton
              sx={{
                padding: "10px !important",
              }}
              onClick={() => router.push("/editPage")}
            >
              <ListItemIcon sx={{ fontSize: "20px", color: "#777E89" }}>
                <FiEdit />
              </ListItemIcon>
              <ListItemText primary="Edit" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            color: "text.secondary !important",
            padding: "0 !important",
            backgroundColor: "transparent",
          }}
        >
          PAGES
        </ListSubheader>

        <ListItem
          button
          key="customers"
          onClick={handleClick2}
          sx={{
            padding: "10px !important",
          }}
        >
          <ListItemIcon sx={{ fontSize: "20px", color: "#777E89" }}>
            <FiShoppingCart />
          </ListItemIcon>
          {open2 ? <ExpandLess /> : <ExpandMore />}
          <ListItemText primary="Shop" />
        </ListItem>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{
                padding: "10px !important",
              }}
              onClick={() => router.push("/listing")}
            >
              <ListItemIcon sx={{ fontSize: "20px", color: "#777E89" }}>
                <FiList />
              </ListItemIcon>
              <ListItemText primary="Listing" />
            </ListItemButton>
            <ListItemButton
              sx={{
                padding: "10px !important",
              }}
              onClick={() => router.push("/detail")}
            >
              <ListItemIcon sx={{ fontSize: "20px", color: "#777E89" }}>
                <FiFileText />
              </ListItemIcon>
              <ListItemText primary="Detail" />
            </ListItemButton>
          </List>
        </Collapse>

        {pages.map((item, index) => (
          <ListItem
            padding="50px"
            button
            key={item.title}
            onClick={() => router.push(item.to)}
            sx={{
              padding: "10px !important",
              background: item.select && "red",
              color: item.select && "white",
              "&:hover": {
                background: item.select && "red",
                color: item.select && "white",
              },
            }}
          >
            <ListItemIcon sx={{ fontSize: "20px", color: "#777E89" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </ThemeComponent>
  );
}
