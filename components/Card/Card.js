"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var styled_system_1 = require("styled-system");
var foundation_1 = require("../../foundation");
var styledSystemStyles = styled_system_1.compose(styled_system_1.flexbox, styled_system_1.layout, styled_system_1.space, styled_system_1.typography);
function Card(_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (react_1.default.createElement(StyledDiv, __assign({ as: "div" }, rest), children));
}
exports.Card = Card;
var StyledDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  float: left;\n\n  margin: 1rem;\n  padding: 1rem;\n\n  border: 1px solid ", ";\n  border-radius: 5px;\n  box-shadow: ", ";\n\n  &:hover {\n    box-shadow: ", ";\n    transform: translate3d(0, -3px, 0);\n  }\n\n  &:active {\n    border-color: ", ";\n    box-shadow: ", ";\n    transform: translate3d(0, 0, 0);\n  }\n\n  transition: background 150ms ease-out, border 150ms ease-out,\n    transform 150ms ease-out;\n\n  ", "\n"], ["\n  float: left;\n\n  margin: 1rem;\n  padding: 1rem;\n\n  border: 1px solid ", ";\n  border-radius: 5px;\n  box-shadow: ", ";\n\n  &:hover {\n    box-shadow: ", ";\n    transform: translate3d(0, -3px, 0);\n  }\n\n  &:active {\n    border-color: ", ";\n    box-shadow: ", ";\n    transform: translate3d(0, 0, 0);\n  }\n\n  transition: background 150ms ease-out, border 150ms ease-out,\n    transform 150ms ease-out;\n\n  ", "\n"])), foundation_1.Color.gainsboro, foundation_1.Shadow.s, foundation_1.Shadow.m, foundation_1.Color.silver, foundation_1.Shadow.s, styledSystemStyles);
var templateObject_1;
