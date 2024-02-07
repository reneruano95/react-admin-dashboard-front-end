import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

export const Navbar = (props: { onClick: () => void }) => {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
      }}
    >
      <Toolbar variant="dense">
        <Box
          sx={{
            borderRadius: 1,
            border: 1,
            borderColor: "grey.500",
            display: { md: "none" },
          }}
        >
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            onClick={props.onClick}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
