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
exports.Control = void 0;
var react_1 = __importDefault(require("react"));
var react_select_1 = require("react-select");
var styled_components_1 = __importDefault(require("styled-components"));
function Control(_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (react_1.default.createElement("div", { style: { display: "inline-flex" } },
        react_1.default.createElement(Label, { isFloating: props.isFocused || props.hasValue }, "Select"),
        react_1.default.createElement(react_select_1.components.Control, __assign({}, props),
            react_1.default.createElement("div", { style: { display: "flex" } },
                react_1.default.createElement(react_select_1.components.DropdownIndicator, __assign({}, props)),
                react_1.default.createElement(react_select_1.components.IndicatorSeparator, __assign({}, props))),
            children)));
}
exports.Control = Control;
var Label = styled_components_1.default.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  left: 50px;\n  pointer-events: none;\n  font-family: sans-serif;\n  font-style: italic;\n  position: absolute;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n\n  top: ", ";\n  color: ", ";\n  font-size: ", ";\n"], ["\n  left: 50px;\n  pointer-events: none;\n  font-family: sans-serif;\n  font-style: italic;\n  position: absolute;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n\n  top: ", ";\n  color: ", ";\n  font-size: ", ";\n"])), function (props) { return (props.isFloating ? "5px" : "35%"); }, function (props) { return (props.isFloating ? "red" : "blue"); }, function (props) { return (props.isFloating ? "0.5rem" : "1rem"); });
var templateObject_1;
