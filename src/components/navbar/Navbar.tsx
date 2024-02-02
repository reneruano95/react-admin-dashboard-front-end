import { useContext } from "react";

import { IconButton } from "@mui/material";

import "./navbar.scss";
import { ColorModeContext } from "../../theme";
import MuiSwitch from "./MUISwitch";

const Navbar = () => {
  const colorMode = useContext(ColorModeContext);

  return (
    <div className="navbar">
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        <MuiSwitch />
      </IconButton>
    </div>
  );
};

export default Navbar;
