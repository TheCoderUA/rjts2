// This file needs upgrade
import React, { Fragment } from "react";
import Navbar from "../components/Navbar/navbar";
const NotFoundPage = () => {
    return (React.createElement("div", { className: "bg-slate-900" },
        React.createElement(Navbar, null),
        React.createElement(MainSection, null)));
};
const MainSection = () => {
    return (React.createElement(Fragment, null,
        React.createElement("div", { className: "font-dancing-script flex items-center justify-center h-screen", style: { fontSize: "200px" } },
            React.createElement("span", { className: "text-green-700 mr-12" }, "Page"),
            React.createElement("span", { className: "text-red-700 mr-12 ml-12" }, "not"),
            React.createElement("span", { className: "text-blue-700 ml-12" }, "found"))));
};
export default NotFoundPage;
