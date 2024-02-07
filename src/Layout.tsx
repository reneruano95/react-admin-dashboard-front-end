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
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
          }}
        >
          <div className="container">
            <div className="contentContainer"></div>
          </div>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Layout;
