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
exports.Custom = exports.LargeSuccess = exports.SmallDanger = exports.Warning = exports.Info = exports.Tip = exports.Primary = void 0;
var react_1 = __importDefault(require("react"));
var foundation_1 = require("../../../foundation");
var Badge_1 = require("../Badge");
var notes_md_1 = __importDefault(require("./notes.md"));
exports.default = {
    title: "Atoms/Badge",
    component: Badge_1.Badge,
    argTypes: {
        color: { control: "color" },
        backgroundColor: { control: "color" },
    },
    parameters: {
        componentSubtitle: "This component can be used to render a <Badge> or an <a> tag for clickable items and hyperlinks on a page.",
        notes: { notes: notes_md_1.default },
    },
};
var Template = function (args) { return react_1.default.createElement(Badge_1.Badge, __assign({}, args)); };
exports.Primary = Template.bind({});
exports.Primary.args = {
    children: "Badge",
    variant: "primary",
};
exports.Tip = Template.bind({});
exports.Tip.args = {
    children: "Tip",
    variant: "primary",
    size: "small",
    backgroundColor: "#E7FDD8",
    borderRadius: "1em",
    color: "#66BF3C",
};
exports.Info = Template.bind({});
exports.Info.args = {
    children: "Badge",
};
exports.Warning = Template.bind({});
exports.Warning.args = {
    variant: "warning",
    children: "AWS",
};
exports.SmallDanger = Template.bind({});
exports.SmallDanger.args = {
    variant: "danger",
    size: "small",
    children: "Cloud",
};
exports.LargeSuccess = Template.bind({});
exports.LargeSuccess.args = {
    variant: "success",
    size: "large",
    children: "Tutorial",
};
exports.Custom = Template.bind({});
exports.Custom.args = {
    backgroundColor: foundation_1.Color.gainsboro,
    borderRadius: "30px",
    children: "Awesome",
    color: foundation_1.Color.midnightBlue,
    size: "large",
};
