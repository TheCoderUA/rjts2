import React, { Fragment } from "react";
import Navbar from "../components/Navbar/navbar";
const NotFoundPage = () => {
    return (React.createElement(Fragment, null,
        React.createElement(Navbar, null),
        React.createElement(MainSection, null)));
};
const MainSection = () => {
    return (React.createElement(Fragment, null,
        React.createElement("div", { className: "", style: { fontSize: "360px" } },
            React.createElement("span", { className: "text-emerald-600" }, "4"),
            React.createElement("span", { className: "text-purple-500" }, "0"),
            React.createElement("span", { className: "text-yellow-500" }, "4"))));
};
export default NotFoundPage;
