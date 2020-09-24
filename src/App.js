import React from "react";

import "./App.css";
import Main from "./components/Main";

import { MuiThemeProvider } from "@material-ui/core";
import theme from "./theme";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Main />
    </MuiThemeProvider>
  );
}

export default App;
