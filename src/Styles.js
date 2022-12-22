import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles({
  root: {
    width: "100%"
  }
});
const disableselect = (e) => {
  return false;
};
document.onselectstart = disableselect;
document.onmousedown = disableselect;

export default function Styles() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);
  /** */
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode);
  console.log(prefersDarkMode);

  const theme = React.useMemo(() =>
    createMuiTheme({
      palette: {
        type: darkMode ? "dark" : "light"
      }
    })
  );
  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
}
