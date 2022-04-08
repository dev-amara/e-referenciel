import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import {CssBaseline} from "@mui/material";
// import { ThemeProvider } from "@emotion/react";
import {BrowserRouter as Router} from "react-router-dom";


ReactDOM.render(
    <Router>
        {/*<ThemeProvider>*/}
        {/*  <CssBaseline />*/}
          <App />
        {/*</ThemeProvider>*/}
    </Router>,
  document.getElementById('root')
);

