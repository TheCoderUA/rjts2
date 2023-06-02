import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (React.createElement("nav", { className: "bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 sticky top-0 z-10 border-b border-red-600" },
        React.createElement("div", { className: "max-w-5xl mx-auto px-4" },
            React.createElement("div", { className: "flex items-center justify-between h-16" },
                React.createElement(Logo, null),
                React.createElement(NavLinks, null)))));
};
const Logo = () => {
    return (React.createElement(NavLink, { to: "/", className: "text-4xl font-semibold font-great-vibes" },
        React.createElement("span", { className: "text-green-700" }, "Vo"),
        React.createElement("span", { className: "text-red-700" }, "ya"),
        React.createElement("span", { className: "text-blue-700" }, "ge")));
};
const NavLinks = () => {
    const links = [
        { label: "Home", url: "/" },
        { label: "Fashion News", url: "/news" },
        { label: "Men", url: "/men" },
        { label: "Women", url: "/women" },
        { label: "Fashion Tips", url: "/tips" },
    ];
    return (React.createElement("div", { className: "flex space-x-6 text-blue-400 font-shadows-into-light font-semibold text-xl" }, links.map((link) => (React.createElement(NavLink, { to: link.url }, link.label)))));
};
export default Navbar;
