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
exports.controlStyles = void 0;
exports.controlStyles = function (base, state) { return (__assign(__assign({}, base), { border: "1px solid aqua", boxShadow: "none", display: "inline-flex", height: "3rem", width: "20rem", margin: "0 auto", justifyContent: "center", alignItems: "center", placeItems: "center", backgroundColor: "rgba(0,0,0,0)", borderRadius: "10px" })); };
