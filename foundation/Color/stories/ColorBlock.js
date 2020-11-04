"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorBlockContainer = exports.ColorBlock = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Typography_1 = require("../../Typography");
var Color_1 = require("../Color");
var utils_1 = require("./utils");
function ColorBlock(_a) {
    var _b = _a.cardColor, cardColor = _b === void 0 ? Color_1.Color.white : _b, _c = _a.title, title = _c === void 0 ? "Unavailable" : _c;
    var _d = react_1.useState("Color." + title + ": " + cardColor), text = _d[0], setText = _d[1];
    function changeText(temporary, permanent) {
        setText(temporary);
        setTimeout(function () {
            setText(permanent);
        }, 800);
    }
    return (react_1.default.createElement(StyledDiv, { cardColor: cardColor, title: title, onClick: function () {
            utils_1.copyToClipboard(cardColor);
            changeText("Copied!", "Color." + title + ": " + cardColor);
        } },
        react_1.default.createElement(Typography_1.Typography, { variant: "p" }, text)));
}
exports.ColorBlock = ColorBlock;
exports.ColorBlockContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-flow: wrap;\n  margin: 20px;\n"], ["\n  display: flex;\n  flex-flow: wrap;\n  margin: 20px;\n"])));
var StyledDiv = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  background-color: ", ";\n\n  display: flex;\n  justify-content: center;\n  min-width: 258px;\n  flex: 0 0 25%;\n  flex-direction: row;\n\n  height: 80px;\n  padding: 0 20px;\n  cursor: pointer;\n  align-items: center;\n"], ["\n  color: ", ";\n  background-color: ", ";\n\n  display: flex;\n  justify-content: center;\n  min-width: 258px;\n  flex: 0 0 25%;\n  flex-direction: row;\n\n  height: 80px;\n  padding: 0 20px;\n  cursor: pointer;\n  align-items: center;\n"])), function (props) { return utils_1.getContrastColor(props.cardColor); }, function (props) { return props.cardColor; });
var templateObject_1, templateObject_2;
