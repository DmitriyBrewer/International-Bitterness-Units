import * as React from "react";
import { BrowserRouter } from "react-router-dom";
//MUI
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { PaletteMode } from "@mui/material";
//MUI
//component
import AppRouter from "./AppRouter";
import Footer from "./components/UI/footer/Footer";
import Navbar from "./pages/CalculatorIBU/Navbar";
import { getDesignTokens } from "./ColorSettingTheme";
import { ColorModeContext } from "./ColorSettingTheme";
//component

function App() {
  //switch color
  // const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  //switch color
  return (
    <React.Fragment>
      <BrowserRouter>
        <CssBaseline />
        <Navbar onChangeTheme={colorMode.toggleColorMode}/>
        <AppRouter />
        <Footer></Footer>
      </BrowserRouter>
    </React.Fragment>
  );
}



//color theme
export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      }
    }),
    []
  );

  const theme = React.useMemo(
    () => createTheme(getDesignTokens(mode as PaletteMode)),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
//color theme