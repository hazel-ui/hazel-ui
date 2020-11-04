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
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionStyles = void 0;
exports.optionStyles = function (base, state) { return (__assign(__assign({}, base), { fontSize: "1rem", fontFamily: "sans-serif", height: "50px", color: "green", display: "flex", alignItems: "center", backgroundColor: state.isFocused || state.isSelected ? "blue" : "white", "&:nth-of-type(odd)": {
        backgroundColor: "white",
    }, "&:nth-of-type(even)": {
        backgroundColor: "azure",
    }, "&:hover": {
        backgroundColor: "fuchsia",
    } })); };
