"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyTypographyVariant = void 0;
var scripts_1 = require("@bbc/gel-foundations/scripts");
var typography_1 = require("@bbc/gel-foundations/typography");
var styled_components_1 = require("styled-components");
var MediaQuery_1 = require("../MediaQuery");
var Theme_1 = require("../Theme");
var responsive_1 = require("./responsive");
function applyTypographyVariant(variant) {
    switch (variant) {
        case "display":
            return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        font-family: ", ";\n        font-weight: ", ";\n        ", ";\n      "], ["\n        font-family: ", ";\n        font-weight: ", ";\n        ", ";\n      "])), Theme_1.Theme.font.serif, Theme_1.Theme.fontWeight.regular, typography_1.getFoolscap(scripts_1.latin));
        case "h1":
            return styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        font-family: ", ";\n        font-weight: ", ";\n        ", ";\n      "], ["\n        font-family: ", ";\n        font-weight: ", ";\n        ", ";\n      "])), Theme_1.Theme.font.serif, Theme_1.Theme.fontWeight.regular, typography_1.getCanon(scripts_1.latin));
        case "h2":
            return styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        font-family: ", ";\n        font-weight: ", ";\n        ", ";\n      "], ["\n        font-family: ", ";\n        font-weight: ", ";\n        ", ";\n      "])), Theme_1.Theme.font.serif, Theme_1.Theme.fontWeight.regular, typography_1.getTrafalgar(scripts_1.latin));
        case "h3":
            return styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        font-family: ", ";\n        font-weight: ", ";\n        ", ";\n      "], ["\n        font-family: ", ";\n        font-weight: ", ";\n        ", ";\n      "])), Theme_1.Theme.font.serif, Theme_1.Theme.fontWeight.regular, typography_1.getParagon(scripts_1.latin));
        case "h4":
            return styled_components_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        font-family: ", ";\n        font-weight: ", ";\n        ", ";\n      "], ["\n        font-family: ", ";\n        font-weight: ", ";\n        ", ";\n      "])), Theme_1.Theme.font.serif, Theme_1.Theme.fontWeight.regular, typography_1.getDoublePica(scripts_1.latin));
        case "h5":
            return styled_components_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        font-family: ", ";\n        font-weight: ", ";\n        ", ";\n      "], ["\n        font-family: ", ";\n        font-weight: ", ";\n        ", ";\n      "])), Theme_1.Theme.font.serif, Theme_1.Theme.fontWeight.regular, typography_1.getGreatPrimer(scripts_1.latin));
        case "h6":
            return styled_components_1.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        font-family: ", ";\n        font-weight: ", ";\n        ", ";\n      "], ["\n        font-family: ", ";\n        font-weight: ", ";\n        ", ";\n      "])), Theme_1.Theme.font.serif, Theme_1.Theme.fontWeight.regular, typography_1.getPica(scripts_1.latin));
        case "p":
            return styled_components_1.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n        font-family: ", ";\n        font-weight: ", ";\n        ", ";\n      "], ["\n        font-family: ", ";\n        font-weight: ", ";\n        ", ";\n      "])), Theme_1.Theme.font.sansSerif, Theme_1.Theme.fontWeight.regular, typography_1.getBodyCopy(scripts_1.latin));
        case "caption":
            return styled_components_1.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n        font-family: ", ";\n        font-weight: ", ";\n        ", ";\n      "], ["\n        font-family: ", ";\n        font-weight: ", ";\n        ", ";\n      "])), Theme_1.Theme.font.sansSerif, Theme_1.Theme.fontWeight.regular, typography_1.getLongPrimer(scripts_1.latin));
        case "label":
            return styled_components_1.css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n        font-family: ", ";\n        font-weight: ", ";\n        ", ";\n        /* ", "; */\n      "], ["\n        font-family: ", ";\n        font-weight: ", ";\n        ", ";\n        /* ", "; */\n      "])), Theme_1.Theme.font.sansSerif, Theme_1.Theme.fontWeight.regular, typography_1.getBrevier(scripts_1.latin), applyTypographyMediaQueries("label"));
        default:
            return null;
    }
}
exports.applyTypographyVariant = applyTypographyVariant;
function applyTypographyMediaQueries(variant) {
    if (variant === "none")
        return null;
    return styled_components_1.css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    letter-spacing: ", ";\n\n    ", " {\n      letter-spacing: ", ";\n    }\n\n    ", " {\n      letter-spacing: ", ";\n    }\n\n    ", " {\n      letter-spacing: ", ";\n    }\n\n    ", " {\n      letter-spacing: ", ";\n    }\n  "], ["\n    letter-spacing: ", ";\n\n    ", " {\n      letter-spacing: ", ";\n    }\n\n    ", " {\n      letter-spacing: ", ";\n    }\n\n    ", " {\n      letter-spacing: ", ";\n    }\n\n    ", " {\n      letter-spacing: ", ";\n    }\n  "])), responsive_1.letterSpacing[variant].mobileSmall, MediaQuery_1.MediaQuery.minWidth.mobile, responsive_1.letterSpacing[variant].mobile, MediaQuery_1.MediaQuery.minWidth.tablet, responsive_1.letterSpacing[variant].tablet, MediaQuery_1.MediaQuery.minWidth.desktop, responsive_1.letterSpacing[variant].desktop, MediaQuery_1.MediaQuery.minWidth.desktopLarge, responsive_1.letterSpacing[variant].desktopLarge);
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
