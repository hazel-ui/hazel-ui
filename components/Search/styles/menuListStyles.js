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
exports.menuListStyles = void 0;
exports.menuListStyles = function (base, state) { return (__assign(__assign({}, base), { "::-webkit-scrollbar": {
        width: "8px",
    }, "::-webkit-scrollbar-track": {
        background: "rgba(0,0,0,0)",
        borderRadius: "6px",
    }, "::-webkit-scrollbar-thumb": {
        margin: "0px 2px 0px 0px",
        background: "red",
        borderRadius: "6px",
    }, "::-webkit-scrollbar-thumb:hover": {
        background: "crimson",
        cursor: "pointer",
    } })); };
