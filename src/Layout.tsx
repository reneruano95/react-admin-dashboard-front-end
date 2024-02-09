import { Box, CssBaseline, ThemeProvider } from "@mui/material";

// import Sidebar from "./components/sidebar/Sidebar";

import "./styles/global.scss";
import { ColorModeContext, useMode } from "./theme";
// import { Navbar } from "./components/navbar/Navbar";
import { Sidebar } from "./components/sidebar/Sidebar";

const Layout = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: "flex", height: "100%" }}>
          <Sidebar />
          <Box component="main">
            <div className="container">
              <div className="contentContainer"></div>
            </div>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Layout;
