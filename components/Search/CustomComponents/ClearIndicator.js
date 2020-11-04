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
exports.ClearIndicator = void 0;
var react_1 = __importDefault(require("react"));
exports.ClearIndicator = function (props) {
    var clearValue = function () {
        props.clearValue();
        props.selectProps.onClear && props.selectProps.onClear();
    };
    var _a = props.children, children = _a === void 0 ? react_1.default.createElement(react_1.default.Fragment, null, "clear") : _a, getStyles = props.getStyles, _b = props.innerProps, ref = _b.ref, onMouseDown = _b.onMouseDown, onTouchEnd = _b.onTouchEnd, restInnerProps = __rest(_b, ["ref", "onMouseDown", "onTouchEnd"]);
    return (react_1.default.createElement("div", __assign({}, restInnerProps, { ref: ref, style: getStyles("clearIndicator", props), onMouseDown: clearValue, onTouchEnd: clearValue }),
        react_1.default.createElement("div", { style: { padding: "0px 5px" } }, children)));
};
