import { CssBaseline, ThemeProvider } from "@mui/material";

import Sidebar from "./components/sidebar/Sidebar";

import "./styles/global.scss";
import { ColorModeContext, useMode } from "./theme";
import { Navbar } from "./components/navbar/Navbar";

const Layout = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="main">
          <Navbar />
          <div className="container">
            <div className="menuContainer">
              <Sidebar />
            </div>
            <div className="contentContainer">Content</div>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Layout;
