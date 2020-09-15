import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Example from "./Example";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  // <React.StrictMode>
  <Example />,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
