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
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var styled_system_1 = require("styled-system");
var foundation_1 = require("../../foundation");
var styles_1 = require("./styles");
var styledSystemStyles = styled_system_1.compose(styled_system_1.border, styled_system_1.color);
function Button(_a) {
    var _b = _a.size, size = _b === void 0 ? "medium" : _b, _c = _a.variant, variant = _c === void 0 ? "primary" : _c, children = _a.children, rest = __rest(_a, ["size", "variant", "children"]);
    return (react_1.default.createElement(StyledButton, __assign({ size: size, variant: variant, as: "button" }, rest), children));
}
exports.Button = Button;
var StyledButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  font-family: ", ";\n\n  display: flex;\n  border-radius: 0.5rem;\n  margin: 1rem;\n  cursor: pointer;\n\n  transition: transform 0.3s;\n  box-shadow: 0px 2px 8px -1px rgba(18, 22, 33, 0.04);\n  &:hover {\n    box-shadow: 0px 4px 20px -2px rgba(18, 22, 33, 0.12);\n    transform: translate(0, -0.1rem);\n  }\n\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  font-family: ", ";\n\n  display: flex;\n  border-radius: 0.5rem;\n  margin: 1rem;\n  cursor: pointer;\n\n  transition: transform 0.3s;\n  box-shadow: 0px 2px 8px -1px rgba(18, 22, 33, 0.04);\n  &:hover {\n    box-shadow: 0px 4px 20px -2px rgba(18, 22, 33, 0.12);\n    transform: translate(0, -0.1rem);\n  }\n\n  ", ";\n"])), function (props) { return styles_1.applyButtonVariant(props.variant, props.variantColor); }, function (props) { return styles_1.applyButtonSize(props.size); }, foundation_1.Theme.font.sansSerif, styledSystemStyles);
var templateObject_1;
