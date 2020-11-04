"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Custom = exports.Large = exports.Small = exports.Secondary = exports.Primary = void 0;
var react_1 = __importDefault(require("react"));
var foundation_1 = require("../../../foundation");
var Button_1 = require("../Button");
var notes_md_1 = __importDefault(require("./notes.md"));
exports.default = {
    title: "Atoms/Button",
    component: Button_1.Button,
    argTypes: {
        color: { control: "color" },
        backgroundColor: { control: "color" },
    },
    parameters: {
        componentSubtitle: "This component can be used to render a <button> or an <a> tag for clickable items and hyperlinks on a page.",
        notes: { notes: notes_md_1.default },
    },
};
var Template = function (args) { return react_1.default.createElement(Button_1.Button, __assign({}, args)); };
exports.Primary = Template.bind({});
exports.Primary.args = {
    children: "Button",
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    variant: "secondary",
    children: "Click me",
    onClick: function () {
        alert("Hey, good looking!");
    },
};
exports.Small = Template.bind({});
exports.Small.args = {
    variant: "secondary",
    size: "small",
    children: "Follow",
};
exports.Large = Template.bind({});
exports.Large.args = {
    size: "large",
    children: "Button",
};
exports.Custom = Template.bind({});
exports.Custom.args = {
    backgroundColor: foundation_1.Color.black,
    border: "3px solid LightGreen",
    borderRadius: "30px",
    children: "Awesome",
    color: foundation_1.Color.white,
    size: "large",
};
