import React, { Fragment } from "react";
import Navbar from "../components/Navbar/navbar";
const FashionTips = () => {
    return (React.createElement(Fragment, null,
        React.createElement(Navbar, null),
        React.createElement(MainSection, null)));
};
const MainSection = () => {
    return (React.createElement("h1", { className: "text-yellow-400 text-xl font-bold font-great-vibes" }, "Fashion Tips"));
};
export default FashionTips;
