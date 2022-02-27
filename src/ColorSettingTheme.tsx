import * as React from "react";
import { PaletteMode } from "@mui/material";

// color setting
export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#000000"
          },
          secondary: {
            main: "#311b92"
          },
          text: {
            primary: "#000000"
          }
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#fafafa"
          },
          secondary: {
            main: "#5c6bc0"
          },
          text: {
            primary: "#ffffff"
          }
        })
  }
});
// color setting

//switch color
export const ColorModeContext = React.createContext({
  toggleColorMode: () => {}
});
//switch color
