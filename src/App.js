import React from "react";
import Navbar from "./components/Navbar/navbar";
export default class App extends React.Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(Navbar, null),
            React.createElement(IntroImage, null),
            React.createElement(SeasonSection, null)));
    }
}
const IntroImage = () => {
    return (React.createElement("div", { className: "relative overflow-hidden bg-cover background-image text-center" },
        React.createElement("div", { className: "absolute bottom-0 top-0 right-0 left-0 h-full w-full overflow-hidden bg-fixed background-mask" },
            React.createElement(HeadingText, null))));
};
const HeadingText = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement("p", { className: "text-9xl text-purple-600 font-bold font-great-vibes", style: { marginTop: "135px" } }, "Open"),
        React.createElement("p", { className: "text-5xl text-blue-300 font-dancing-script mt-6" }, "the"),
        React.createElement("p", { className: "m-9" },
            React.createElement("span", { className: "text-6xl text-orange-500" }, "Colorful"),
            React.createElement("span", { className: "text-8xl text-blue-800 font-great-vibes ml-5" }, "World")),
        React.createElement("p", { className: "m-9" },
            React.createElement("span", { className: "text-6xl text-yellow-500 font-dancing-script" }, "of"),
            React.createElement("span", { className: "text-4xl text-cyan-400 ml-4" }, "the")),
        React.createElement("span", { className: "text-6xl text-pink-300 font-Arial" }, "Modern"),
        React.createElement("span", { className: "text-9xl text-red-700 font-great-vibes font-bold ml-4" }, "Fashion")));
};
const SeasonSection = () => {
    return (React.createElement("div", { className: "bg-gradient-to-r from-blue-500 to-pink-400 relative overflow-hidden py-12 px-16 w-full", style: { height: "420px" } },
        React.createElement("div", { className: "text-7xl font-dancing-script" },
            React.createElement("span", { className: "text-green-400" }, "The Spring "),
            React.createElement("span", { className: "text-orange-400" }, "vibe"),
            React.createElement("span", { className: "text-7xl text-pink-600 font-dancing-script bold ml-7" }, "!"))));
};
