"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyBadgeSize = exports.applyBadgeVariant = void 0;
var styled_components_1 = require("styled-components");
function applyBadgeVariant(variant) {
    switch (variant) {
        case "primary":
            return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        background-color: #777;\n      "], ["\n        background-color: #777;\n      "])));
        case "info":
            return styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        background-color: #3498db;\n      "], ["\n        background-color: #3498db;\n      "])));
        case "warning":
            return styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        background-color: #f1c40f;\n      "], ["\n        background-color: #f1c40f;\n      "])));
        case "danger":
            return styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        background-color: #e74c3c;\n      "], ["\n        background-color: #e74c3c;\n      "])));
        case "success":
            return styled_components_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        background-color: #2ecc71;\n      "], ["\n        background-color: #2ecc71;\n      "])));
        default:
            return styled_components_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        background-color: #2c3e50;\n      "], ["\n        background-color: #2c3e50;\n      "])));
    }
}
exports.applyBadgeVariant = applyBadgeVariant;
function applyBadgeSize(size) {
    switch (size) {
        case "small":
            return styled_components_1.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        font-size: 1rem;\n        padding: 0.2rem 0.6rem;\n      "], ["\n        font-size: 1rem;\n        padding: 0.2rem 0.6rem;\n      "])));
        case "medium":
            return styled_components_1.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n        font-size: 1.4rem;\n        padding: 0.4rem 0.8rem;\n      "], ["\n        font-size: 1.4rem;\n        padding: 0.4rem 0.8rem;\n      "])));
        case "large":
            return styled_components_1.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n        font-size: 1.8rem;\n        padding: 0.4rem 1rem;\n      "], ["\n        font-size: 1.8rem;\n        padding: 0.4rem 1rem;\n      "])));
        default:
            return styled_components_1.css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n        font-size: 1.6rem;\n        padding: 0.6rem 0.8rem;\n      "], ["\n        font-size: 1.6rem;\n        padding: 0.6rem 0.8rem;\n      "])));
    }
}
exports.applyBadgeSize = applyBadgeSize;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
