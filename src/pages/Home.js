import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/navbar.js";
const Home = () => {
    return (React.createElement(Fragment, null,
        React.createElement(Navbar, null),
        React.createElement(IntroImage, null),
        React.createElement(PostsSection, null)));
};
const IntroImage = () => {
    return (
    /* Container where intro image "lives" */
    React.createElement("div", { className: "relative overflow-hidden bg-cover background-image text-center" },
        React.createElement("div", { className: "absolute bottom-0 top-0 right-0 left-0 h-full w-full overflow-hidden bg-fixed background-mask" },
            React.createElement(HeadingText, null))));
};
/* Colored text on intro image */
const HeadingText = () => {
    return (
    // May need upgrades
    React.createElement(React.Fragment, null,
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
/* Section below the intro image, with fresh posts */
const PostsSection = () => {
    return (
    // Container
    React.createElement("div", { className: "bg-gradient-to-t from-slate-500 to-black relative overflow-hidden py-12 px-16 w-full", style: { height: "640px" } },
        React.createElement("div", { className: "grid grid-rows-3 grid-cols-3 gap-4 grid-flow-row-dense" },
            React.createElement(PostThumbnail, { bg: "https://www.irreverentgent.com/wp-content/uploads/2023/02/Mens-Spring-Fashion-intro.jpg", url: "/posts/summer-2023-#1", title: "The summer is comming!", text: "Are you ready for season of cozy nights and sunshines?", gridStyle: "row-span-2" }),
            React.createElement(PostThumbnail, { bg: "https://cdn.hemden.de/media/image/53/1a/66/Fruhjahrs-Mode-Herren.jpg", url: "/posts/summer-2023-#2", title: "Summer tips", text: "Bacame a serious man with these few tips!" }),
            React.createElement(PostThumbnail, { bg: "https://fashionjackson.com/wp-content/uploads/2021/02/Fashion-Jackson-Wearing-Tan-Blazer-White-Jeans-Chanel-Slingbacks.jpg", url: "/posts/summer-2023-#3", title: "Weekend walkaround!", text: "What to wear at the weekends? Whe have few tips for it!", gridStyle: "row-span-2" }))));
};
const PostThumbnail = ({ bg, url, title, text, gridStyle, }) => {
    // Function for programmatical navigation of posts
    const navigate = useNavigate();
    return (
    // A post is a clickable element which have a url to it's publication post
    React.createElement("div", { className: `${gridStyle}`, onClick: () => navigate(url) },
        React.createElement("div", { className: `border-none bg-cover rounded-lg hover:brightness-75 transition duration-700 p-6 cursor-pointer`, style: {
                backgroundImage: `url("${bg}")`,
            } },
            React.createElement("p", { className: "text-2xl text-slate-200 font-semibold" }, title),
            React.createElement("p", { className: "text-lg text-slate-100 mt-24 mb-2 w-64" }, text))));
};
export default Home;
