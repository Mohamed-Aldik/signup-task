import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { GlobalStyles } from '@mui/material';
import {  grey, indigo } from "@mui/material/colors";
import Routes from "./routes";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => { },
});

export default function App() {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode, ...(mode === 'light'
            ? {
              background: {
                default: grey[50],
                paper: grey[50],
              },
            }
            : {
              background: {
                default: indigo[900],
                paper: indigo[900],
              },

            })
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={(theme) => ({
            body: {
              transition: '.3s', backgroundColor: mode === 'light' ? "#e9eefc" : "#483c64"
            }
          })}
        />
     
          <Routes />
  
      </ThemeProvider>
    </ColorModeContext.Provider>


  )
}