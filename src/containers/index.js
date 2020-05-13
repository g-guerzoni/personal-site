import React from "react";
import { Provider } from "react-redux";
import Store from "redux/store";

import palette from "constants/palette";

import Routes from "./Routes";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: palette["primary"],
      contrastText: palette["secondary"],
    },
    secondary: {
      main: palette["secondary"],
      contrastText: palette["primary"],
    },
    success: {
      main: palette["success"],
    },
    warning: {
      main: palette["warning"],
    },
    error: {
      main: palette["error"],
    },
    info: {
      main: palette["grey"],
    },
  },
  typography: {
    fontFamily: "Texta",
    useNextVariants: true,
    h1: {
      fontSize: 28,
    },
    subtitle1: {
      fontSize: 18,
    },
    body1: {
      fontSize: 16,
      color: palette["grey"],
    },
  },
});

const styles = makeStyles({
  bg: { backgroundColor: palette["background"] },
});

const App = () => (
  <Provider store={Store}>
    <div className={styles().bg}>
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    </div>
  </Provider>
);

export default App;
