import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./input.css";
ReactDOM.render(React.createElement(React.StrictMode, null,
    React.createElement(BrowserRouter, null,
        React.createElement(App, null))), document.getElementById("root"));
