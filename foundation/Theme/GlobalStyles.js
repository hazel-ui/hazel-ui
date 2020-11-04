"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalStyles = void 0;
var styled_components_1 = require("styled-components");
var styled_normalize_1 = require("styled-normalize");
exports.GlobalStyles = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n\n  /* Box Sizing https://bit.ly/1A91I0J */\n  html {\n    box-sizing: border-box;\n    font-size: 100%;\n  }\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n"], ["\n  ", "\n\n  /* Box Sizing https://bit.ly/1A91I0J */\n  html {\n    box-sizing: border-box;\n    font-size: 100%;\n  }\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n"])), styled_normalize_1.normalize);
var templateObject_1;
