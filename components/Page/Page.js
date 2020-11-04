"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
var react_1 = __importDefault(require("react"));
var Header_1 = require("../Header/Header");
require("./page.css");
exports.Page = function (_a) {
    var user = _a.user, onLogin = _a.onLogin, onLogout = _a.onLogout, onCreateAccount = _a.onCreateAccount;
    return (react_1.default.createElement("article", null,
        react_1.default.createElement(Header_1.Header, { user: user, onLogin: onLogin, onLogout: onLogout, onCreateAccount: onCreateAccount }),
        react_1.default.createElement("section", null,
            react_1.default.createElement("h2", null, "Pages in Storybook"),
            react_1.default.createElement("p", null,
                "We recommend building UIs with a",
                " ",
                react_1.default.createElement("a", { href: "https://componentdriven.org", target: "_blank", rel: "noopener noreferrer" },
                    react_1.default.createElement("strong", null, "component-driven")),
                " ",
                "process starting with atomic components and ending with pages."),
            react_1.default.createElement("p", null, "Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"),
            react_1.default.createElement("ul", null,
                react_1.default.createElement("li", null, "Use a higher-level connected component. Storybook helps you compose such data from the \"args\" of child component stories"),
                react_1.default.createElement("li", null, "Assemble data in the page component from your services. You can mock these services out using Storybook.")),
            react_1.default.createElement("p", null,
                "Get a guided tutorial on component-driven development at",
                " ",
                react_1.default.createElement("a", { href: "https://www.learnstorybook.com", target: "_blank", rel: "noopener noreferrer" }, "Learn Storybook"),
                ". Read more in the",
                " ",
                react_1.default.createElement("a", { href: "https://storybook.js.org/docs", target: "_blank", rel: "noopener noreferrer" }, "docs"),
                "."),
            react_1.default.createElement("div", { className: "tip-wrapper" },
                react_1.default.createElement("span", { className: "tip" }, "Tip"),
                " Adjust the width of the canvas with the",
                " ",
                react_1.default.createElement("svg", { width: "10", height: "10", viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("g", { fill: "none", fillRule: "evenodd" },
                        react_1.default.createElement("path", { d: "M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z", id: "a", fill: "#999" }))),
                "Viewports addon in the toolbar"))));
};
