"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Option = void 0;
var react_1 = __importDefault(require("react"));
var react_select_1 = require("react-select");
exports.Option = function (props) {
    return (react_1.default.createElement(react_select_1.components.Option, __assign({}, props),
        react_1.default.createElement("div", null, props.data.label)));
};
