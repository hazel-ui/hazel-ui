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
exports.Typography = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var styled_system_1 = require("styled-system");
var styles_1 = require("./styles");
var types_1 = require("./types");
var styledSystemStyles = styled_system_1.compose(styled_system_1.background, styled_system_1.border, styled_system_1.color, styled_system_1.display, styled_system_1.layout, styled_system_1.space, styled_system_1.typography);
function Typography(_a) {
    var _b = _a.variant, variant = _b === void 0 ? "p" : _b, children = _a.children, rest = __rest(_a, ["variant", "children"]);
    return (react_1.default.createElement(StyledDiv, __assign({ variant: variant, as: types_1.TextTag[variant] }, rest), children));
}
exports.Typography = Typography;
var StyledDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n"])), function (props) { return props.variant && styles_1.applyTypographyVariant(props.variant); }, styledSystemStyles);
var templateObject_1;
