"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyButtonSize = exports.applyButtonVariant = void 0;
var styled_components_1 = require("styled-components");
var foundation_1 = require("../../foundation");
function applyButtonVariant(variant, variantColor) {
    if (variantColor === void 0) { variantColor = foundation_1.Color.royalBlue; }
    switch (variant) {
        case "primary":
            return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        color: white;\n        background-color: ", ";\n        border: 1px solid transparent;\n      "], ["\n        color: white;\n        background-color: ", ";\n        border: 1px solid transparent;\n      "])), variantColor);
        case "secondary":
            return styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        color: ", ";\n        background-color: transparent;\n        border: 1px solid ", ";\n      "], ["\n        color: ", ";\n        background-color: transparent;\n        border: 1px solid ", ";\n      "])), variantColor, variantColor);
        default:
            return null;
    }
}
exports.applyButtonVariant = applyButtonVariant;
function applyButtonSize(size) {
    switch (size) {
        case "small":
            return styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        font-size: 13px;\n        padding: 6px 12px;\n        font-weight: ", ";\n      "], ["\n        font-size: 13px;\n        padding: 6px 12px;\n        font-weight: ", ";\n      "])), foundation_1.Theme.fontWeight.light);
        case "medium":
            return styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        font-size: 14px;\n        padding: 11px 20px;\n        font-weight: ", ";\n      "], ["\n        font-size: 14px;\n        padding: 11px 20px;\n        font-weight: ", ";\n      "])), foundation_1.Theme.fontWeight.semiBold);
        case "large":
            return styled_components_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        font-size: 16px;\n        padding: 12px 24px;\n        font-weight: ", ";\n      "], ["\n        font-size: 16px;\n        padding: 12px 24px;\n        font-weight: ", ";\n      "])), foundation_1.Theme.fontWeight.bold);
        default:
            return null;
    }
}
exports.applyButtonSize = applyButtonSize;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
