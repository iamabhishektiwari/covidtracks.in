import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import Counter from "./components/Counter";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "./theme";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Main />
    </MuiThemeProvider>
  );
}

export default App;
