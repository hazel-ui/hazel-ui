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
exports.Label = exports.Caption = exports.Paragraph = exports.Heading6 = exports.Heading5 = exports.Heading4 = exports.Heading3 = exports.Heading2 = exports.Heading1 = exports.Display = void 0;
var react_1 = __importDefault(require("react"));
var Typography_1 = require("../Typography");
var notes_md_1 = __importDefault(require("./notes.md"));
exports.default = {
    title: "Foundation/Typography",
    component: Typography_1.Typography,
    parameters: {
        componentSubtitle: "This component can be used to render all text-based elements on a page such as headings, paragraphs, captions, and labels.",
        notes: { notes: notes_md_1.default },
    },
};
var Template = function (args) { return react_1.default.createElement(Typography_1.Typography, __assign({}, args)); };
exports.Display = Template.bind({});
exports.Display.args = {
    variant: "display",
    children: "Could a computer ever create better art than a human?",
};
exports.Heading1 = Template.bind({});
exports.Heading1.args = {
    variant: "h1",
    children: "Could a computer ever create better art than a human?",
};
exports.Heading2 = Template.bind({});
exports.Heading2.args = {
    variant: "h2",
    children: "Could a computer ever create better art than a human?",
};
exports.Heading3 = Template.bind({});
exports.Heading3.args = {
    variant: "h3",
    children: "Could a computer ever create better art than a human?",
};
exports.Heading4 = Template.bind({});
exports.Heading4.args = {
    variant: "h4",
    children: "Could a computer ever create better art than a human?",
};
exports.Heading5 = Template.bind({});
exports.Heading5.args = {
    variant: "h5",
    children: "Could a computer ever create better art than a human?",
};
exports.Heading6 = Template.bind({});
exports.Heading6.args = {
    variant: "h6",
    children: "Could a computer ever create better art than a human?",
};
exports.Paragraph = Template.bind({});
exports.Paragraph.args = {
    variant: "p",
    children: "Could a computer ever create better art than a human?",
};
exports.Caption = Template.bind({});
exports.Caption.args = {
    variant: "caption",
    children: "Could a computer ever create better art than a human?",
};
exports.Label = Template.bind({});
exports.Label.args = {
    variant: "label",
    children: "Could a computer ever create better art than a human?",
};
