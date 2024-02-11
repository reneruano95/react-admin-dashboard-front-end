import { useState, useContext } from "react";

import { Link as RouterLink } from "react-router-dom";

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
import Link, { LinkProps } from "@mui/material/Link";

import DashboardIcon from "@mui/icons-material/Dashboard";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import LogoutIcon from "@mui/icons-material/Logout";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { useTheme } from "@mui/material";

import { ColorModeContext } from "../../theme";
import "./menu.scss";

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

// LinkRouter component with RouterLink as link
function LinkRouter(props: LinkRouterProps) {
  // spread Link props to LinkRouter
  return (
    <Link
      {...props}
      // replace <a> with RouterLink
      component={RouterLink as any}
    />
  );
}

export const Menu = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const [openApps, setOpenApps] = useState(false);
  const [openUsers, setOpenUsers] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleClickApps = () => {
    setOpenApps((prev) => !prev);
  };

  const handleClickUsers = () => {
    setOpenUsers((prev) => !prev);
  };

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
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
        {/* item 1 */}
        <LinkRouter to="/" underline="none" color="inherit">
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </LinkRouter>

        {/* item 2 */}
        <LinkRouter to="/estimates" underline="none" color="inherit">
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <RequestQuoteIcon />
            </ListItemIcon>
            <ListItemText primary="Estimates" />
          </ListItemButton>
        </LinkRouter>

        {/* item 3 */}
        <LinkRouter to="/orders" underline="none" color="inherit">
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemIcon>
              <RequestQuoteIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItemButton>
        </LinkRouter>

        {/* item 4 */}
        <ListItemButton onClick={handleClickApps}>
          <ListItemIcon>
            <AppsIcon />
          </ListItemIcon>
          <ListItemText primary="Apps" />
          {openApps ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openApps} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemText inset primary="Tasks" />
            </ListItemButton>

            <ListItemButton
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemText inset primary="Calendar" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* item 5 */}
        <ListItemButton onClick={handleClickUsers}>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
          {openUsers ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openUsers} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              selected={selectedIndex === 5}
              onClick={(event) => handleListItemClick(event, 5)}
            >
              <ListItemText inset primary="All users" />
            </ListItemButton>

            <ListItemButton
              selected={selectedIndex === 6}
              onClick={(event) => handleListItemClick(event, 6)}
            >
              <ListItemText inset primary="Create a new user" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 7}
              onClick={(event) => handleListItemClick(event, 7)}
            >
              <ListItemText inset primary="Roles & permission" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* item 6 */}
        <ListItemButton
          selected={selectedIndex === 8}
          onClick={(event) => handleListItemClick(event, 8)}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>

      <Box sx={{ marginTop: "auto" }}>
        <Divider variant="middle" sx={{ my: 1 }} />
        <ListItem alignItems="flex-start" sx={{ alignItems: "center" }}>
          <ListItemAvatar sx={{ m: 0 }}>
            <Avatar alt="R" src="/" />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography
                variant="body1"
                color="text.primary"
                sx={{ fontWeight: "bold" }}
              >
                Rene R.
              </Typography>
            }
            secondary={
              <Typography
                // component="span"
                variant="body2"
                color="text.primary"
                sx={{ fontSize: "12px" }}
              >
                reneruano@email.com
              </Typography>
            }
          />
          <ListItemButton>
            <LogoutIcon />
          </ListItemButton>
        </ListItem>
      </Box>
    </Box>
  );
};
