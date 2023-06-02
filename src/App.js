import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FashionNews from "./pages/FashionNews";
import FashionTips from "./pages/FashionTips";
const App = () => {
    return (React.createElement(Routes, null,
        React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
        React.createElement(Route, { path: "/news", element: React.createElement(FashionNews, null) }),
        React.createElement(Route, { path: "/tips", element: React.createElement(FashionTips, null) })));
};
export default App;
