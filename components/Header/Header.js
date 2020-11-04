"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = __importDefault(require("react"));
var Button_1 = require("../Button/Button");
require("./header.css");
exports.Header = function (_a) {
    var user = _a.user, onLogin = _a.onLogin, onLogout = _a.onLogout, onCreateAccount = _a.onCreateAccount;
    return (react_1.default.createElement("header", null,
        react_1.default.createElement("div", { className: "wrapper" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("svg", { width: "32", height: "32", viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("g", { fill: "none", fillRule: "evenodd" },
                        react_1.default.createElement("path", { d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z", fill: "#FFF" }),
                        react_1.default.createElement("path", { d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z", fill: "#555AB9" }),
                        react_1.default.createElement("path", { d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z", fill: "#91BAF8" }))),
                react_1.default.createElement("h1", null, "Acme")),
            react_1.default.createElement("div", null, user ? (react_1.default.createElement(Button_1.Button, { size: "small", onClick: onLogout }, "Log out")) : (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Button_1.Button, { size: "small", onClick: onLogin }, "Log in"),
                react_1.default.createElement(Button_1.Button, { size: "small", onClick: onCreateAccount }, "Sign up")))))));
};
