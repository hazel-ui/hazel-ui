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
exports.ArrowLeft = exports.ArrowDown = exports.ArrowRight = exports.ArrowUp = exports.Sort = exports.Search = exports.Close = void 0;
var react_1 = __importDefault(require("react"));
var icons_1 = require("./icons");
Object.defineProperty(exports, "ArrowUp", { enumerable: true, get: function () { return icons_1.ArrowUp; } });
var icons_2 = require("./icons");
Object.defineProperty(exports, "Close", { enumerable: true, get: function () { return icons_2.Close; } });
Object.defineProperty(exports, "Search", { enumerable: true, get: function () { return icons_2.Search; } });
Object.defineProperty(exports, "Sort", { enumerable: true, get: function () { return icons_2.Sort; } });
exports.ArrowRight = function (props) { return (react_1.default.createElement(icons_1.ArrowUp, __assign({ transform: "rotate(90)" }, props))); };
exports.ArrowDown = function (props) { return (react_1.default.createElement(icons_1.ArrowUp, __assign({ transform: "rotate(180)" }, props))); };
exports.ArrowLeft = function (props) { return (react_1.default.createElement(icons_1.ArrowUp, __assign({ transform: "rotate(-90)" }, props))); };
