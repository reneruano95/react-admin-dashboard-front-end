import { Box, CssBaseline, ThemeProvider } from "@mui/material";

import "./styles/global.scss";
import { ColorModeContext, useMode } from "./theme";

import { Sidebar } from "./components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const drawerWidth = 240;

const Layout = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: "flex", height: "100%" }}>
          <Sidebar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              marginTop: { xs: "48px", md: 0 },
              width: { md: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            {/* Your page content here */}
            <Outlet />
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Layout;
