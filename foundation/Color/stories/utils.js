"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enumKeys = exports.getContrastColor = exports.copyToClipboard = void 0;
var Color_1 = require("../Color");
function copyToClipboard(newClip) {
    navigator.clipboard.writeText(newClip);
}
exports.copyToClipboard = copyToClipboard;
function getContrastColor(hexColor) {
    if (hexColor === void 0) { hexColor = Color_1.Color.white; }
    hexColor = hexColor.replace("#", "");
    var r = parseInt(hexColor.substr(0, 2), 16);
    var g = parseInt(hexColor.substr(2, 2), 16);
    var b = parseInt(hexColor.substr(4, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq > 149 ? Color_1.Color.black : Color_1.Color.white;
}
exports.getContrastColor = getContrastColor;
function enumKeys(obj) {
    return Object.keys(obj).filter(function (k) { return Number.isNaN(+k); });
}
exports.enumKeys = enumKeys;
