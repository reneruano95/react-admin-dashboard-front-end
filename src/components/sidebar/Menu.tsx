import { useState, useContext } from "react";

import {
  Box,
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
  Divider,
  ListItem,
  ListItemAvatar,
  Avatar,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { useTheme } from "@mui/material";

import { ColorModeContext } from "../../theme";
import "./menu.scss";

export const Menu = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const [openApps, setOpenApps] = useState(false);
  const [openUsers, setOpenUsers] = useState(false);

  const handleClickApps = () => {
    setOpenApps((prev) => !prev);
  };

  const handleClickUsers = () => {
    setOpenUsers((prev) => !prev);
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Toolbar
        className="toolbar"
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src="logo.svg" alt=""></img>
          <Typography variant="h6" component="div">
            dashboard
          </Typography>
        </Box>

        <Box
          sx={{
            borderRadius: 1,
            border: 1,
            borderColor: "grey.500",
          }}
        >
          <IconButton
            size="small"
            onClick={colorMode.toggleColorMode}
            sx={{ padding: "4px" }}
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Box>
      </Toolbar>
      <Box sx={{ display: "flex", justifyContent: "center", mx: "16px" }}>
        <TextField
          label="Search..."
          id="filled-basic"
          variant="outlined"
          size="small"
        />
      </Box>

      <List
        sx={{ width: "100%" }}
        component="nav"
        aria-labelledby="nested-list"
      >
        {/*item 1 */}
        {/* <ListItemButton>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton> */}

        {/* item 2 */}
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        {/* item 3 */}
        <ListItemButton>
          <ListItemIcon>
            <RequestQuoteIcon />
          </ListItemIcon>
          <ListItemText primary="Estimates" />
        </ListItemButton>

        {/* item 4 */}
        <ListItemButton>
          <ListItemIcon>
            <RequestQuoteIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>

        {/* item 5 */}
        <ListItemButton onClick={handleClickApps}>
          <ListItemIcon>
            <AppsIcon />
          </ListItemIcon>
          <ListItemText primary="Apps" />
          {openApps ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openApps} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton>
              <ListItemText inset primary="Tasks" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText inset primary="Calendar" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* item 6 */}
        <ListItemButton onClick={handleClickUsers}>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
          {openUsers ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openUsers} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton>
              <ListItemText inset primary="All users" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText inset primary="Create a new user" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText inset primary="Roles & permission" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* item 7 */}
        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
      <Divider variant="middle" sx={{ my: 1 }} />
      <Box sx={{ display: "flex" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="R" src="/" />
          </ListItemAvatar>
          <ListItemText
            primary="Rene Ruano"
            secondary={
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                renerano@email.com
              </Typography>
            }
          />
        </ListItem>
      </Box>
    </Box>
  );
};
