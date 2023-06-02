import React, { Fragment } from "react";
import Navbar from "../components/Navbar/navbar";
const FashionNews = () => {
    return (React.createElement(Fragment, null,
        React.createElement(Navbar, null),
        React.createElement(MainSection, null)));
};
const MainSection = () => {
    return (React.createElement("h1", { className: "text-pink-600 text-xl font-bold font-great-vibes" }, "Fashion News"));
};
export default FashionNews;
